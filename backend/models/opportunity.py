from datetime import datetime, timezone
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    String,
    Text,
    JSON,
    func,
)
from backend.database import Base


class OpportunityModel(Base):
    __tablename__ = "opportunities"

    id = Column(String(64), primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    organization = Column(String(255), nullable=False, index=True)
    organization_type = Column(String(255), nullable=False, default="Software & IT Services")
    location = Column(String(255), nullable=False)
    city = Column(String(100), nullable=False, index=True)
    type = Column(String(50), nullable=False, index=True)  # full-time, internship, etc.
    arrangement = Column(String(50), nullable=False, index=True)  # remote, hybrid, on-site
    experience_level = Column(String(100), nullable=False, default="Entry-Level (0-2 yrs)")
    compensation = Column(String(255), nullable=False)
    skills = Column(JSON, nullable=False, default=list)
    short_description = Column(Text, nullable=False)
    description = Column(Text, nullable=False)
    responsibilities = Column(JSON, nullable=False, default=list)
    requirements = Column(JSON, nullable=False, default=list)
    benefits = Column(JSON, nullable=False, default=list)
    deadline = Column(String(50), nullable=False)
    posted_date = Column(String(50), nullable=False)
    is_featured = Column(Boolean, default=False, nullable=False)
    target_audience = Column(String(255), nullable=False, default="Students & Fresh Graduates")
    application_url = Column(String(500), nullable=True)
    is_sample_data = Column(Boolean, default=True, nullable=False)
    verification_status = Column(String(50), default="demo_verified", nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )
    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    def __repr__(self) -> str:
        return f"<Opportunity id={self.id} title={self.title} organization={self.organization}>"

