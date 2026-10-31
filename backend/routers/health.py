from fastapi import APIRouter
from backend.config import settings
from backend.database import check_db_connection

router = APIRouter(tags=["Health"])


@router.get("/health")
def get_health():
    """Health check endpoint to monitor API and database status."""
    db_connected = check_db_connection()
    status = "healthy" if db_connected else "degraded"

    return {
        "status": status,
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT,
        "database": "connected" if db_connected else "disconnected",
    }

