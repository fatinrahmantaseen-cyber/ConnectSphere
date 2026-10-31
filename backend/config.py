import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "ConnectSphere API"
    APP_VERSION: str = "1.0.0"
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    PORT: int = int(os.getenv("PORT", "8000"))
    API_V1_PREFIX: str = "/api/v1"

    # Database configuration
    # Default local fallback to sqlite for frictionless local development / testing
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", "sqlite:///./connectsphere.db"
    )

    # CORS configuration
    FRONTEND_ORIGIN: str = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")
    ADDITIONAL_ALLOWED_ORIGINS: str = os.getenv("ADDITIONAL_ALLOWED_ORIGINS", "")

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @property
    def sqlalchemy_database_uri(self) -> str:
        """
        Normalize database URL for SQLAlchemy compatibility.
        Hosting providers like Render or Supabase sometimes provide URLs starting with
        'postgres://', which SQLAlchemy 2 requires to be 'postgresql://'.
        """
        url = self.DATABASE_URL
        if url.startswith("postgres://"):
            url = url.replace("postgres://", "postgresql://", 1)
        return url

    @property
    def cors_origins(self) -> List[str]:
        origins = [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
        ]
        if self.FRONTEND_ORIGIN:
            for origin in self.FRONTEND_ORIGIN.split(","):
                cleaned = origin.strip()
                if cleaned and cleaned not in origins:
                    origins.append(cleaned)
        if self.ADDITIONAL_ALLOWED_ORIGINS:
            for origin in self.ADDITIONAL_ALLOWED_ORIGINS.split(","):
                cleaned = origin.strip()
                if cleaned and cleaned not in origins:
                    origins.append(cleaned)
        return origins

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT.lower() == "production"


settings = Settings()

