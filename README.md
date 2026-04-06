# AI Meeting Assistant (Backend)

AI-powered backend service that converts meeting transcripts into structured actionable insights using LLMs.

## 🚀 Overview

This project analyzes meeting transcripts and extracts:

* Summary
* Action Items
* Decisions
* Risks

The system transforms unstructured text into structured JSON data using AI.

## 🧱 Tech Stack

* Node.js
* Express
* TypeScript
* MongoDB
* OpenAI API

## 🎯 Goal

Build a production-style AI backend demonstrating real-world LLM integration patterns.

---

## 📌 Project Status

## ✅ Project initialized
## ✅ Backend Setup

Initialized Express server with TypeScript support.

### Features

* Express server configured
* TypeScript enabled
* Development hot reload using ts-node-dev

### Run locally

```bash
npm install
npm run dev
```

## ✅ Step 2 — MongoDB Connection

- Added centralized database configuration.
- Server will now only start if MongoDB connection is successful.
- All modules can import mongoose models without worrying about connection details.


## ✅ Step 3 — Meeting Module

- Created `Meeting` module with Mongoose schema, service, controller, and routes
- Endpoints:
  - POST `/api/meetings` → Create new meeting
  - GET `/api/meetings` → List all meetings
- Supports storing transcript, summary, action items, decisions, risks
- Ready for AI integration

### Example POST body:
```json
{
  "transcript": "Ahmed will design UI. Sara will deploy backend. Decide beta release in July.",
  "summary": "",
  "actionItems": [],
  "decisions": [],
  "risks": []
}

```

## ⚙️ Features

- Analyze meeting transcripts
- Extract **summary**, **action items**, **decisions**, **risks**
- Modular **agents** for each task
- Separate **prompts** and **AI client**
- **Workflow orchestration** to combine results


## 📂 Project Structure
```
│ aiClient.ts # Wrapper to call OpenAI API
│
├─ prompts/
│ └─ meetingPrompts.ts # All prompt templates
│
├─ agents/
│ ├─ summaryAgent.ts # Extract summary
│ ├─ actionItemsAgent.ts # Extract action items
│ └─ risksDecisionsAgent.ts # Extract risks & decisions
│
└─ orchestration/
└─ meetingWorkflow.ts # Organize workflow between agents
```

