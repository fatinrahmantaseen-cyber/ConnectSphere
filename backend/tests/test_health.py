def test_health_check(client):
    """Test health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] in ("healthy", "degraded")
    assert data["service"] == "ConnectSphere API"
    assert "version" in data
    assert "database" in data


def test_root_info(client):
    """Test root endpoint provides service metadata."""
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["service"] == "ConnectSphere API"
    assert "/docs" in data["docs"]
    assert "/health" in data["health"]

