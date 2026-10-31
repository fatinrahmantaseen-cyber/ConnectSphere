from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field


class OpportunityBase(BaseModel):
    title: str = Field(..., max_length=255)
    organization: str = Field(..., max_length=255)
    organization_type: str = Field(
        default="Software & IT Services",
        alias="organizationType",
        max_length=255,
    )
    location: str = Field(..., max_length=255)
    city: str = Field(..., max_length=100)
    type: str = Field(..., max_length=50)
    arrangement: str = Field(..., max_length=50)
    experience_level: str = Field(
        default="Entry-Level (0-2 yrs)",
        alias="experienceLevel",
        max_length=100,
    )
    compensation: str = Field(..., max_length=255)
    skills: List[str] = Field(default_factory=list)
    short_description: str = Field(..., alias="shortDescription")
    description: str
    responsibilities: List[str] = Field(default_factory=list)
    requirements: List[str] = Field(default_factory=list)
    benefits: List[str] = Field(default_factory=list)
    deadline: str = Field(..., max_length=50)
    posted_date: str = Field(..., alias="postedDate", max_length=50)
    is_featured: bool = Field(default=False, alias="isFeatured")
    target_audience: str = Field(
        default="Students & Fresh Graduates",
        alias="targetAudience",
        max_length=255,
    )
    application_url: Optional[str] = Field(
        default=None,
        alias="applicationUrl",
        max_length=500,
    )
    is_sample_data: bool = Field(default=True, alias="isSampleData")
    verification_status: str = Field(
        default="demo_verified",
        alias="verificationStatus",
        max_length=50,
    )

    model_config = ConfigDict(
        populate_by_name=True,
        from_attributes=True,
    )


class OpportunityCreate(OpportunityBase):
    id: str = Field(..., max_length=64)


class OpportunityRead(OpportunityBase):
    id: str
    created_at: Optional[datetime] = Field(default=None, alias="createdAt")
    updated_at: Optional[datetime] = Field(default=None, alias="updatedAt")

    model_config = ConfigDict(
        populate_by_name=True,
        from_attributes=True,
    )


class OpportunityListResponse(BaseModel):
    items: List[OpportunityRead]
    total: int
    page: int
    size: int
    pages: int

    model_config = ConfigDict(
        populate_by_name=True,
    )


class CategoryRead(BaseModel):
    id: str
    title: str
    description: str
    count_label: str = Field(alias="countLabel")
    filter_type: Optional[str] = Field(default=None, alias="filterType")
    filter_arrangement: Optional[str] = Field(default=None, alias="filterArrangement")
    icon_name: str = Field(alias="iconName")
    accent_color: str = Field(alias="accentColor")

    model_config = ConfigDict(
        populate_by_name=True,
    )


class LocationRead(BaseModel):
    city: str
    label: str
    count: int

    model_config = ConfigDict(
        populate_by_name=True,
    )

