import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from backend.config import settings
from backend.database import engine, Base
from backend.routers import health_router, opportunities_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger("connectsphere")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup and shutdown management."""
    logger.info(f"Starting {settings.APP_NAME} in '{settings.ENVIRONMENT}' mode...")
    logger.info(f"Configured CORS origins: {settings.cors_origins}")

    # Ensure tables exist in development / SQLite mode
    if not settings.is_production:
        try:
            Base.metadata.create_all(bind=engine)
            logger.info("Database schema initialized.")
        except Exception as exc:
            logger.error(f"Error during database initialization: {exc}")

    yield

    logger.info(f"Shutting down {settings.APP_NAME}...")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Backend API for ConnectSphere — Skills-First Opportunity Platform in Bangladesh and beyond.",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    max_age=86400,
)

# Include Routers
app.include_router(health_router)
app.include_router(opportunities_router)


@app.get("/", tags=["Root"])
def root_info():
    """Root info endpoint providing service status and documentation links."""
    return {
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "docs": "/docs",
        "health": "/health",
        "api": f"{settings.API_V1_PREFIX}/opportunities",
    }


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Global fallback exception handler to prevent leaking stack traces in production."""
    logger.error(f"Unhandled error processing {request.method} {request.url}: {exc}")
    if settings.is_production:
        return JSONResponse(
            status_code=500,
            content={"detail": "An internal server error occurred."},
        )
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc)},
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=settings.PORT,
        reload=not settings.is_production,
    )

