# ThreadTheory-AI Design Document

## 🧠 Overview

**ThreadTheory-AI** is a proof-of-concept full-stack platform that combines fashion forecasting with brand storytelling through AI. The application predicts SKU-level performance using a time-series forecasting model and generates brand-aligned product descriptions using LLMs. Built for fashion buyers, merchandisers, and sales associates, the system enhances both product strategy and retail communication.

This project showcases:
- LLM integration with LangChain
- RESTful backend API with FastAPI
- Frontend using React and TailwindCSS
- PostgreSQL database
- Cloud deployment using AWS EC2

---

## 🗃️ Database Schema (PostgreSQL)

### 1. `products`
Stores basic product metadata.

| Field         | Type    | Description                 |
|--------------|---------|-----------------------------|
| id           | UUID (PK) | Unique product ID           |
| name         | TEXT    | Product name                |
| brand        | TEXT    | Brand name                  |
| category     | TEXT    | Category of product         |
| price        | NUMERIC | MSRP or base price          |
| launch_date  | DATE    | Date product was launched   |

---

### 2. `sales_data`
Stores historical sales performance for each product.

| Field       | Type        | Description                     |
|------------|-------------|---------------------------------|
| id         | UUID (PK)   | Unique record ID                |
| product_id | UUID (FK)   | Foreign key to `products` table |
| region     | TEXT        | Sales region (e.g., US-West)    |
| units_sold | INTEGER     | Units sold in time window       |
| revenue    | NUMERIC     | Revenue generated               |
| date       | DATE        | Time of transaction             |

---

### 3. `descriptions`
Stores AI-generated product descriptions and storytelling briefs.

| Field         | Type        | Description                         |
|--------------|-------------|-------------------------------------|
| id           | UUID (PK)   | Unique description ID               |
| product_id   | UUID (FK)   | Foreign key to `products`           |
| tone         | TEXT        | e.g., "Luxury", "Minimal", "Trendy" |
| summary      | TEXT        | LLM-generated brand brief           |
| description  | TEXT        | AI-generated customer-facing copy   |
| created_at   | TIMESTAMP   | Timestamp of generation             |

---

## 🔧 Backend

- **Language**: Python  
- **Framework**: FastAPI  
- **Endpoints**:
  - `GET /products` - List all products
  - `GET /products/{id}` - Product detail
  - `POST /forecast` - Run forecasting model on product
  - `POST /generate-description` - Generate LLM-based description
  - `POST /upload-sales` - Ingest sales CSV

- **Tools**:
  - `SQLAlchemy` for ORM
  - `pydantic` for validation
  - `uvicorn` for local dev

---

## 📊 Forecasting Model (SKU Performance)

- **Model**: Facebook Prophet or ARIMA (for time series forecasting)
- **Input**: Historical sales from `sales_data`
- **Output**: Predicted revenue, units sold, and stock signals
- **Granularity**: Product + region level

---

## 💬 LLM Description Generator

- **Tool**: LangChain with OpenAI/GPT backend
- **Inputs**: Product name, category, brand, tone
- **Output**: Description + story-style summary
- **Enhancements**:
  - Custom prompts per persona
  - Integration of macro/cultural signals in copy

---

## 🎨 Frontend

- **Framework**: React.js or Next.js  
- **Styling**: TailwindCSS (or Chakra UI as an alternative)  
- **Key Pages**:
  - Dashboard: Product list and insights
  - Forecast View: Time-series visualizations
  - Description Generator: Inputs and outputs of LLM
  - Upload Page: For ingesting new sales data

---

## ☁️ Cloud Infrastructure

- **Platform**: AWS  
  - **EC2**: Hosts backend + frontend
  - **RDS**: PostgreSQL managed database (optional)
  - **S3**: (Optional) For file uploads or image storage
- **Deployment**:
  - Docker container for backend
  - CI/CD with GitHub Actions (optional)

---

## 📈 Example Flow

1. User uploads sales data (CSV).
2. Backend parses and stores data in `sales_data`.
3. Forecasting API runs time-series model → returns SKU insights.
4. LLM prompt crafted using product metadata → returns branded copy.
5. Frontend displays both insights and descriptions for download or presentation.

---

## 🧪 Future Enhancements

- Admin dashboard with authentication
- Integration with Shopify or NuORDER API
- Add consumer sentiment scraper (Reddit/TikTok)
- Gamified associate training based on brand stories
- Deploy as SaaS with multi-tenant support

---

## 🗂️ File Structure
