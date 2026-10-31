def test_list_opportunities_empty(client, db_session):
    """Test empty opportunity list response."""
    response = client.get("/api/v1/opportunities")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 0
    assert data["items"] == []
    assert data["page"] == 1
    assert data["pages"] == 1


def test_list_opportunities_seeded(client, seeded_db):
    """Test retrieving seeded opportunities with pagination."""
    response = client.get("/api/v1/opportunities")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 3
    assert len(data["items"]) == 3

    # Check field compatibility with frontend camelCase aliases
    first_item = data["items"][0]
    assert "organizationType" in first_item
    assert "shortDescription" in first_item
    assert "experienceLevel" in first_item
    assert "postedDate" in first_item
    assert "isFeatured" in first_item
    assert "isSampleData" in first_item


def test_search_by_title_keyword(client, seeded_db):
    """Test keyword search matching opportunity title."""
    response = client.get("/api/v1/opportunities?q=Backend")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert data["items"][0]["id"] == "test-001"


def test_search_by_skill_keyword(client, seeded_db):
    """Test keyword search matching technical skills."""
    response = client.get("/api/v1/opportunities?q=TypeScript")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert data["items"][0]["id"] == "test-002"


def test_filter_by_location(client, seeded_db):
    """Test filtering opportunities by location."""
    response = client.get("/api/v1/opportunities?location=Chattogram")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert data["items"][0]["city"] == "Chattogram"


def test_filter_by_type(client, seeded_db):
    """Test filtering opportunities by opportunity type."""
    response = client.get("/api/v1/opportunities?type=internship")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert data["items"][0]["id"] == "test-002"


def test_filter_by_arrangement(client, seeded_db):
    """Test filtering opportunities by work arrangement."""
    response = client.get("/api/v1/opportunities?arrangement=remote")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert data["items"][0]["id"] == "test-003"


def test_get_opportunity_by_id_success(client, seeded_db):
    """Test retrieving an existing opportunity by ID."""
    response = client.get("/api/v1/opportunities/test-001")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == "test-001"
    assert data["title"] == "Senior Backend Engineer (Python)"
    assert data["organization"] == "Dhaka FinTech"
    assert "Python" in data["skills"]


def test_get_opportunity_by_id_not_found(client, db_session):
    """Test 404 error when opportunity ID does not exist."""
    response = client.get("/api/v1/opportunities/non-existent-id")
    assert response.status_code == 404
    data = response.json()
    assert "not found" in data["detail"].lower()


def test_pagination(client, seeded_db):
    """Test page size and pagination bounds."""
    response = client.get("/api/v1/opportunities?page=1&size=2")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 3
    assert len(data["items"]) == 2
    assert data["page"] == 1
    assert data["pages"] == 2


def test_invalid_pagination(client):
    """Test validation rejection for invalid page or size."""
    response = client.get("/api/v1/opportunities?page=0")
    assert response.status_code == 422

    response2 = client.get("/api/v1/opportunities?size=150")
    assert response2.status_code == 422


def test_get_categories(client):
    """Test categories endpoint returns all supported tracks."""
    response = client.get("/api/v1/opportunity-categories")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 6
    category_ids = [cat["id"] for cat in data]
    assert "full-time" in category_ids
    assert "internships" in category_ids
    assert "remote" in category_ids
    assert "freelance" in category_ids


def test_get_locations(client, seeded_db):
    """Test locations endpoint aggregates cities from database."""
    response = client.get("/api/v1/locations")
    assert response.status_code == 200
    data = response.json()
    cities = [loc["city"] for loc in data]
    assert "Dhaka" in cities
    assert "Chattogram" in cities
    assert "Remote" in cities

