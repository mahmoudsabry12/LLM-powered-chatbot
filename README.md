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

