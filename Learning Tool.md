# ThreadTheory-AI: Learning Tool Expansion

This document outlines the next phase of **ThreadTheory-AI**, focusing on two key features to transform the platform into a learning tool for sales associates:
1. **Consumer Agent Chat** – A simulated customer conversation tool.
2. **Product Script Generator** – AI-powered sales scripts tailored to product SKUs and personas.

---

## Goal

The aim is to provide an interactive platform where sales associates can:
- **Practice live conversations** with AI-powered consumer personas.
- **Access tailored product scripts** and talking points for different customer profiles.
- **Receive actionable feedback** on storytelling, persuasion, and product knowledge.

---

## Key Features

### 1. Consumer Agent Chat
**Description:**  
An AI-driven chat interface where users can role-play as sales associates, while the AI acts as a **customer persona** (e.g., "Gen Z sneakerhead," "luxury buyer in NYC").

**Core Capabilities:**
- **Persona Simulation:** Pre-defined persona prompts with unique tone and preferences.
- **Live Chat UI:** Interactive messaging interface on the frontend.
- **Feedback System:** AI evaluates responses and scores them on storytelling, emotional connection, and persuasiveness.

**API Endpoints:**
- `POST /chat`  
  - **Input:** User message + persona context.  
  - **Output:** AI customer reply.
- `POST /feedback`  
  - **Input:** Full conversation transcript.  
  - **Output:** Evaluation with strengths, weaknesses, and improvement tips.

**Example Feedback Output:**
```json
{
  "score": 7,
  "strengths": "You emphasized the exclusivity of the handbag.",
  "tips": "Add more emotional connection by linking to personal style."
}
```

2. Product Script Generator

Description:
Generates structured sales scripts based on product data, persona, and tone. Useful as a quick reference or practice material during role-play.

Core Capabilities:
	•	Dynamic Script Creation: Pulls SKU data from the database and crafts persona-aligned pitches.
	•	Talking Points: Includes product features, emotional hooks, and closing lines.
	•	Export Options: Copy to clipboard or download as PDF.

API Endpoints:
	•	POST /generate-script
	•	Input: Product ID, persona, tone.
	•	Output: JSON with a 3–5 step product pitch.

```json
{
  "persona": "Luxury Shopper, NYC",
  "script": [
    "Open with heritage: 'This handbag draws inspiration from Paris couture of the 70s.'",
    "Highlight craftsmanship: 'Hand-stitched Italian leather, limited run of 50 units.'",
    "Create exclusivity: 'It’s more than an accessory—it’s a collector’s piece.'",
    "Close with urgency: 'I can hold this for you today since it’s our fastest-seller.'"
  ]
}
```
