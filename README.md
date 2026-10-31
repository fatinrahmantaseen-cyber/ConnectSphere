# ConnectSphere

> **Your Skills. Your Opportunities. Your Future.**

ConnectSphere is a full-stack career-tech platform designed to bridge the gap between education, skill development, and employment. The platform enables students, fresh graduates, job seekers, and freelancers to discover verified opportunities, build relevant competencies, and connect with forward-thinking employers. ConnectSphere begins with a targeted focus on Bangladesh's technology and youth talent ecosystem, architected for future international expansion.

---

## 🏗️ Architecture Overview

ConnectSphere is built as a decoupled, production-ready full-stack application:

- **Frontend (`/`)**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Lucide React icons.
- **Backend (`/backend`)**: Python 3.14 / 3.11+, FastAPI, Pydantic v2, SQLAlchemy 2.x, PostgreSQL (with SQLite local fallback).
- **Database Migrations**: Alembic.
- **Automated Testing**: Pytest for backend unit/integration tests; ESLint & TypeScript compiler for frontend.

---

## 📡 REST API Reference

Base API Path: `/api/v1`

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Service health & database connectivity check | None |
| `GET` | `/api/v1/opportunities` | Paginated opportunity search & filtering | `q`, `location`, `type`, `arrangement`, `page`, `size` |
| `GET` | `/api/v1/opportunities/{id}` | Single opportunity details by ID | None (path parameter `id`) |
| `GET` | `/api/v1/opportunity-categories` | Supported opportunity category tracks | None |
| `GET` | `/api/v1/locations` | Available cities & active vacancy counts | None |

Interactive OpenAPI documentation is available locally at `http://localhost:8000/docs` and `http://localhost:8000/redoc`.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 & PostCSS
- **Icons**: Lucide React
- **Runtime**: Node.js v20+ / npm v10+

### Backend & Database
- **Framework**: FastAPI (Asynchronous ASGI)
- **ORM**: SQLAlchemy 2.x
- **Schema Validation**: Pydantic v2 & Pydantic-Settings
- **Database**: PostgreSQL (Production) / SQLite (Local Dev fallback)
- **Migrations**: Alembic
- **Testing**: Pytest & HTTPX

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

### Backend Variables
| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | PostgreSQL or SQLite connection URI | `sqlite:///./connectsphere.db` |
| `FRONTEND_ORIGIN` | Allowed CORS origins for browser security | `http://localhost:3000` |
| `PORT` | Backend listening port | `8000` |
| `ENVIRONMENT` | Runtime environment (`development` / `production`) | `development` |

### Frontend Variables
| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the deployed FastAPI backend | `http://localhost:8000` |

---

## 🚀 Local Development Setup

### 1. Backend Setup

1. Create and activate a Python virtual environment:
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\activate
   ```

2. Install backend dependencies:
   ```powershell
   pip install -r backend/requirements.txt
   ```

3. Run database migrations:
   ```powershell
   alembic upgrade head
   ```

4. *(Optional)* Seed demonstration opportunities for local development:
   ```powershell
   python -m backend.scripts.seed
   ```
   > **Notice:** The seed command is strictly for local testing. It does not run automatically in production.

5. Start the FastAPI development server:
   ```powershell
   python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 --reload
   ```

### 2. Frontend Setup

1. Install frontend packages (from the project root):
   ```powershell
   npm install
   ```

2. Start the Next.js development server:
   ```powershell
   npm run dev
   ```

3. Open your browser:
   - **Frontend UI**: [http://localhost:3000](http://localhost:3000)
   - **FastAPI Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)
   - **Health Check**: [http://localhost:8000/health](http://localhost:8000/health)

---

## 🧪 Testing & Verification

### Backend Tests (Pytest)
Runs 15 automated test cases validating health endpoints, database CRUD, search keyword matching, multi-facet filtering, pagination bounds, and error handling using an isolated in-memory test database:

```powershell
.\.venv\Scripts\pytest -v
```

### Frontend Code Quality & Build Checks
```powershell
# ESLint check (Flat Config, 0 warnings/errors)
npm run lint

# TypeScript strict typecheck
npx tsc --noEmit

# Production build verification
npm run build
```

---

## 🌐 Public Deployment Guide

### A. Deploy Backend & PostgreSQL on Render

1. **Create PostgreSQL Database on Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com) > **New** > **PostgreSQL**.
   - Set Name: `connectsphere-db`.
   - Copy the **Internal Database URL** (or External URL).

2. **Deploy FastAPI Web Service**:
   - Click **New** > **Web Service**.
   - Connect your GitHub repository: `ConnectSphere`.
   - Set **Root Directory**: `.` (leave empty or set to root).
   - Set **Environment**: `Python 3`.
   - Set **Build Command**:
     ```bash
     pip install -r backend/requirements.txt && alembic upgrade head
     ```
   - Set **Start Command**:
     ```bash
     uvicorn backend.main:app --host 0.0.0.0 --port $PORT
     ```
   - Set **Environment Variables**:
     - `DATABASE_URL`: *(Paste your Render PostgreSQL connection string)*
     - `ENVIRONMENT`: `production`
     - `FRONTEND_ORIGIN`: `https://connectsphere.vercel.app` *(Your deployed Vercel domain)*
   - Save and Deploy. Your backend URL will be: `https://connectsphere-api.onrender.com`.

3. **Seed Initial Demo Data (One-Time Optional)**:
   - In Render Web Service, go to **Shell** tab:
     ```bash
     python -m backend.scripts.seed
     ```

### B. Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) > **Add New** > **Project**.
2. Import the `ConnectSphere` repository.
3. Configure Project:
   - **Framework Preset**: Next.js.
   - **Root Directory**: `./`.
4. Configure Environment Variables:
   - `NEXT_PUBLIC_API_BASE_URL`: `https://connectsphere-api.onrender.com` *(Your Render backend URL)*
5. Click **Deploy**. Vercel will build the frontend and provide your public URL.

---

## ⚖️ Phase 2 Scope & Transparent Disclosures

1. **Demonstration Data Notice**: Opportunity records seeded in development mode are clearly labeled demonstration records. They provide realistic design testing for the Bangladesh talent market without pretending to be legally binding employment vacancies.
2. **Career Navigator Status**: The Career Navigator is a structured prototype demonstrating curriculum milestones. Live LLM / AI integrations are scheduled for subsequent phases.
3. **No Authentication or Live Submissions**: Candidate authentication and live job applications will be introduced in subsequent phases with verified candidate skill portfolios.
