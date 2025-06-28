# ThreadTheory-AI Design Document

## Overview
A high-level architecture and schema design for the ThreadTheory-AI platform, which predicts SKU-level performance and generates brand storytelling using LLMs.

---

## Database Schema (PostgreSQL)

### Tables

#### 1. `products`
- `id` (PK, UUID)
- `name` (TEXT)
- `brand` (TEXT)
- `category` (TEXT)
- `price` (NUMERIC)
- `launch_date` (DATE)

#### 2. `sales_data`
- `id` (PK, UUID)
- `product_id` (FK → products.id)
- `region` (TEXT)
- `units_sold` (INTEGER)
- `revenue` (NUMERIC)
- `week` (DATE)

#### 3. `llm_outputs`
- `id` (PK, UUID)
- `product_id` (FK → products.id)
- `story_text` (TEXT)
- `persona` (TEXT)
- `created_at` (TIMESTAMP)

#### 4. `trend_signals`
- `id` (PK, UUID)
- `product_id` (FK → products.id)
- `platform` (TEXT)
- `metric_type` (TEXT) — e.g. "TikTok Views"
- `value` (INTEGER)
- `date_collected` (DATE)

---

## LLM Integration
- Use LangChain with OpenAI/GPT or Mistral to generate product narratives based on metadata and trend signals.
- Cache and store outputs in the `llm_outputs` table.
- Create prompts dynamically based on sales, trend, and product context.

---

## API Design
Built with FastAPI. Key endpoints:

- `GET /products/`
- `POST /generate-story/`
- `GET /forecast/sku/{id}`

---

## Hosting / Infra
- Backend: Python + FastAPI
- DB: PostgreSQL (can use Supabase or RDS)
- Cloud: AWS EC2 + optional Lambda for background tasks
- Frontend: React or Next.js + TailwindCSS
