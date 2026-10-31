import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from backend.database import Base, get_db
from backend.main import app
from backend.models.opportunity import OpportunityModel

# In-memory SQLite database specifically for test isolation
TEST_DATABASE_URL = "sqlite:///:memory:"

test_engine = create_engine(
    TEST_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=test_engine
)


@pytest.fixture(scope="function")
def db_session():
    """Create fresh database tables for each test function."""
    Base.metadata.create_all(bind=test_engine)
    session = TestingSessionLocal()
    try:
        yield session
    finally:
        session.close()
        Base.metadata.drop_all(bind=test_engine)


@pytest.fixture(scope="function")
def client(db_session):
    """Test client with overridden get_db dependency."""

    def override_get_db():
        try:
            yield db_session
        finally:
            pass

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


@pytest.fixture(scope="function")
def seeded_db(db_session):
    """Seed test opportunities for search and filter testing."""
    test_opps = [
        OpportunityModel(
            id="test-001",
            title="Senior Backend Engineer (Python)",
            organization="Dhaka FinTech",
            organization_type="Financial Services",
            location="Dhaka, Bangladesh",
            city="Dhaka",
            type="full-time",
            arrangement="hybrid",
            experience_level="Mid-Level (2-4 yrs)",
            compensation="৳ 80,000 / month",
            skills=["Python", "FastAPI", "PostgreSQL"],
            short_description="Build modern payment rails for South Asian consumers.",
            description="Detailed job description for fintech engineer.",
            responsibilities=["Develop APIs", "Write tests"],
            requirements=["3+ years Python experience"],
            benefits=["Medical insurance", "Festival bonus"],
            deadline="2026-12-01",
            posted_date="2026-10-15",
            is_featured=True,
            target_audience="Experienced developers",
            application_url=None,
            is_sample_data=True,
            verification_status="demo_verified",
        ),
        OpportunityModel(
            id="test-002",
            title="Frontend React Intern",
            organization="Chattogram Labs",
            organization_type="Digital Studio",
            location="Chattogram, Bangladesh",
            city="Chattogram",
            type="internship",
            arrangement="on-site",
            experience_level="Student / Fresh Graduate",
            compensation="৳ 20,000 / month (Stipend)",
            skills=["React", "TypeScript", "Tailwind CSS"],
            short_description="Mentored internship for undergraduate frontend developers.",
            description="Detailed internship overview.",
            responsibilities=["Build UI components"],
            requirements=["Basic React knowledge"],
            benefits=["Lunch provided", "Certificate"],
            deadline="2026-11-20",
            posted_date="2026-10-22",
            is_featured=False,
            target_audience="Students",
            application_url=None,
            is_sample_data=True,
            verification_status="demo_verified",
        ),
        OpportunityModel(
            id="test-003",
            title="Remote Freelance Mobile Developer",
            organization="Sylhet Global Systems",
            organization_type="Software Agency",
            location="Remote - Bangladesh",
            city="Remote",
            type="freelance",
            arrangement="remote",
            experience_level="Mid-Level (2-4 yrs)",
            compensation="৳ 50,000 / milestone",
            skills=["Flutter", "Dart"],
            short_description="Deliver cross-platform mobile apps remotely.",
            description="Detailed project requirements.",
            responsibilities=["Implement UI in Flutter"],
            requirements=["Experience with Flutter"],
            benefits=["100% remote"],
            deadline="2026-11-30",
            posted_date="2026-10-25",
            is_featured=False,
            target_audience="Freelancers",
            application_url=None,
            is_sample_data=True,
            verification_status="demo_verified",
        ),
    ]
    for opp in test_opps:
        db_session.add(opp)
    db_session.commit()
    return db_session

