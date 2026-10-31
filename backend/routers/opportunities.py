import math
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import or_, func, cast, String
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models.opportunity import OpportunityModel
from backend.schemas.opportunity import (
    OpportunityRead,
    OpportunityListResponse,
    CategoryRead,
    LocationRead,
)

router = APIRouter(prefix="/api/v1", tags=["Opportunities"])

SUPPORTED_CATEGORIES = [
    {
        "id": "full-time",
        "title": "Full-Time Jobs",
        "description": "Launch your career with established tech teams, startups, and enterprises.",
        "countLabel": "40+ Roles",
        "filterType": "full-time",
        "filterArrangement": None,
        "iconName": "Briefcase",
        "accentColor": "blue",
    },
    {
        "id": "internships",
        "title": "Internships",
        "description": "Gain hands-on industry mentorship while completing your degree.",
        "countLabel": "25+ Positions",
        "filterType": "internship",
        "filterArrangement": None,
        "iconName": "GraduationCap",
        "accentColor": "emerald",
    },
    {
        "id": "remote",
        "title": "Remote Opportunities",
        "description": "Work with regional and international teams from anywhere in Bangladesh.",
        "countLabel": "30+ Listings",
        "filterType": None,
        "filterArrangement": "remote",
        "iconName": "Globe",
        "accentColor": "teal",
    },
    {
        "id": "freelance",
        "title": "Freelance Projects",
        "description": "Deliver high-impact contracted deliverables and build independent income.",
        "countLabel": "15+ Projects",
        "filterType": "freelance",
        "filterArrangement": None,
        "iconName": "Laptop",
        "accentColor": "cyan",
    },
    {
        "id": "student",
        "title": "Student Opportunities",
        "description": "Campus ambassador roles, research labs, and academic hackathons.",
        "countLabel": "18+ Programs",
        "filterType": "student",
        "filterArrangement": None,
        "iconName": "BookOpen",
        "accentColor": "amber",
    },
    {
        "id": "scholarships",
        "title": "Scholarships & Competitions",
        "description": "Grants, incubation funds, and fellowship programs for rising innovators.",
        "countLabel": "10+ Awards",
        "filterType": "scholarship",
        "filterArrangement": None,
        "iconName": "Award",
        "accentColor": "indigo",
    },
]


@router.get("/opportunities", response_model=OpportunityListResponse)
def list_opportunities(
    q: Optional[str] = Query(default=None, description="Search keyword across title, skills, or organization"),
    location: Optional[str] = Query(default=None, description="Filter by location/city (e.g. Dhaka, Remote)"),
    type: Optional[str] = Query(default=None, description="Filter by opportunity type (e.g. full-time, internship)"),
    arrangement: Optional[str] = Query(default=None, description="Filter by work arrangement (remote, hybrid, on-site)"),
    page: int = Query(default=1, ge=1, description="Page number"),
    size: int = Query(default=20, ge=1, le=100, description="Page size"),
    db: Session = Depends(get_db),
):
    """Retrieve paginated opportunities with multi-facet search and filtering."""
    query = db.query(OpportunityModel)

    if q and q.strip():
        term = f"%{q.strip().lower()}%"
        query = query.filter(
            or_(
                func.lower(OpportunityModel.title).like(term),
                func.lower(OpportunityModel.organization).like(term),
                func.lower(OpportunityModel.short_description).like(term),
                func.lower(OpportunityModel.description).like(term),
                func.lower(cast(OpportunityModel.skills, String)).like(term),
            )
        )

    if location and location.strip():
        loc = location.strip().lower()
        if loc == "remote":
            query = query.filter(
                or_(
                    func.lower(OpportunityModel.arrangement) == "remote",
                    func.lower(OpportunityModel.city) == "remote",
                )
            )
        else:
            query = query.filter(
                or_(
                    func.lower(OpportunityModel.city) == loc,
                    func.lower(OpportunityModel.location).like(f"%{loc}%"),
                )
            )

    if type and type.strip():
        query = query.filter(func.lower(OpportunityModel.type) == type.strip().lower())

    if arrangement and arrangement.strip():
        query = query.filter(
            func.lower(OpportunityModel.arrangement) == arrangement.strip().lower()
        )

    total = query.count()
    pages = math.ceil(total / size) if total > 0 else 1

    # Order featured opportunities first, then by posted date descending
    items = (
        query.order_by(
            OpportunityModel.is_featured.desc(),
            OpportunityModel.posted_date.desc(),
        )
        .offset((page - 1) * size)
        .limit(size)
        .all()
    )

    return OpportunityListResponse(
        items=items,
        total=total,
        page=page,
        size=size,
        pages=pages,
    )


@router.get("/opportunities/{opportunity_id}", response_model=OpportunityRead)
def get_opportunity(
    opportunity_id: str,
    db: Session = Depends(get_db),
):
    """Retrieve details of a single opportunity by ID."""
    opportunity = (
        db.query(OpportunityModel)
        .filter(OpportunityModel.id == opportunity_id)
        .first()
    )
    if not opportunity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Opportunity with ID '{opportunity_id}' not found",
        )
    return opportunity


@router.get("/opportunity-categories", response_model=List[CategoryRead])
def get_opportunity_categories():
    """Return all supported opportunity category tracks."""
    return [CategoryRead.model_validate(cat) for cat in SUPPORTED_CATEGORIES]


@router.get("/locations", response_model=List[LocationRead])
def get_available_locations(
    db: Session = Depends(get_db),
):
    """Return unique locations and active counts from the database."""
    # Query distinct cities and counts
    results = (
        db.query(
            OpportunityModel.city,
            func.count(OpportunityModel.id).label("count"),
        )
        .group_by(OpportunityModel.city)
        .all()
    )

    labels_map = {
        "Dhaka": "Dhaka, Bangladesh",
        "Chattogram": "Chattogram, Bangladesh",
        "Sylhet": "Sylhet, Bangladesh",
        "Remote": "Remote (Bangladesh)",
    }

    locations = []
    for city, count in results:
        label = labels_map.get(city, f"{city}, Bangladesh")
        locations.append(LocationRead(city=city, label=label, count=count))

    # Sort with Dhaka first, then alphabetical
    locations.sort(key=lambda x: (0 if x.city == "Dhaka" else 1, x.city))
    return locations

