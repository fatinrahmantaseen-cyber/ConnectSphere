"""Initial opportunities table

Revision ID: 001_initial_opportunities
Revises: 
Create Date: 2026-10-31 17:45:00.000000

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = "001_initial_opportunities"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "opportunities",
        sa.Column("id", sa.String(length=64), primary_key=True, nullable=False),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("organization", sa.String(length=255), nullable=False),
        sa.Column("organization_type", sa.String(length=255), nullable=False, server_default="Software & IT Services"),
        sa.Column("location", sa.String(length=255), nullable=False),
        sa.Column("city", sa.String(length=100), nullable=False),
        sa.Column("type", sa.String(length=50), nullable=False),
        sa.Column("arrangement", sa.String(length=50), nullable=False),
        sa.Column("experience_level", sa.String(length=100), nullable=False, server_default="Entry-Level (0-2 yrs)"),
        sa.Column("compensation", sa.String(length=255), nullable=False),
        sa.Column("skills", sa.JSON(), nullable=False),
        sa.Column("short_description", sa.Text(), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("responsibilities", sa.JSON(), nullable=False),
        sa.Column("requirements", sa.JSON(), nullable=False),
        sa.Column("benefits", sa.JSON(), nullable=False),
        sa.Column("deadline", sa.String(length=50), nullable=False),
        sa.Column("posted_date", sa.String(length=50), nullable=False),
        sa.Column("is_featured", sa.Boolean(), nullable=False, server_default=sa.text("false")),
        sa.Column("target_audience", sa.String(length=255), nullable=False, server_default="Students & Fresh Graduates"),
        sa.Column("application_url", sa.String(length=500), nullable=True),
        sa.Column("is_sample_data", sa.Boolean(), nullable=False, server_default=sa.text("true")),
        sa.Column("verification_status", sa.String(length=50), nullable=False, server_default="demo_verified"),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
    )

    op.create_index("ix_opportunities_id", "opportunities", ["id"], unique=False)
    op.create_index("ix_opportunities_title", "opportunities", ["title"], unique=False)
    op.create_index("ix_opportunities_organization", "opportunities", ["organization"], unique=False)
    op.create_index("ix_opportunities_city", "opportunities", ["city"], unique=False)
    op.create_index("ix_opportunities_type", "opportunities", ["type"], unique=False)
    op.create_index("ix_opportunities_arrangement", "opportunities", ["arrangement"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_opportunities_arrangement", table_name="opportunities")
    op.drop_index("ix_opportunities_type", table_name="opportunities")
    op.drop_index("ix_opportunities_city", table_name="opportunities")
    op.drop_index("ix_opportunities_organization", table_name="opportunities")
    op.drop_index("ix_opportunities_title", table_name="opportunities")
    op.drop_index("ix_opportunities_id", table_name="opportunities")
    op.drop_table("opportunities")

