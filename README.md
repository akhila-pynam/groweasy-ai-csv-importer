# 🚀 GrowEasy AI CSV Importer

> AI-powered CSV Importer built for the **GrowEasy Software Developer Internship Assignment**.

---

## 🌐 Live Demo

**Hosted Application**

👉 http://groweasy-ai-csv-importer-front.vercel.app/

---

## 💻 GitHub Repository

👉 https://github.com/akhila-pynam/groweasy-ai-csv-importer

---

# 📌 Project Overview

The objective of this project is to build an **AI-powered CSV Importer** capable of accepting **any valid CSV file**, intelligently understanding different column names and layouts using **Google Gemini AI**, and transforming the data into the **GrowEasy CRM format**.

Unlike traditional CSV importers that rely on fixed column names, this application automatically detects and maps columns using AI.

This project was developed as part of the **GrowEasy Software Developer Internship Assignment**. :contentReference[oaicite:1]{index=1}

---

# ✨ Features

## Frontend

- ✅ Responsive UI
- ✅ Drag & Drop CSV Upload
- ✅ File Picker
- ✅ CSV Preview
- ✅ Responsive Tables
- ✅ Sticky Table Headers
- ✅ Horizontal Scrolling
- ✅ Loading Indicators
- ✅ Import Statistics
- ✅ AI Mapping Preview
- ✅ CRM Ready Data Preview
- ✅ Light & Dark Mode
- ✅ Error Handling

---

## Backend

- ✅ Express REST API
- ✅ CSV Upload API
- ✅ CSV Parsing
- ✅ Google Gemini Integration
- ✅ Intelligent AI Column Mapping
- ✅ CRM Data Transformation
- ✅ Record Validation
- ✅ Invalid Record Skipping
- ✅ Structured JSON Response
- ✅ TypeScript
- ✅ Error Handling

---

# 🤖 AI Capabilities

Google Gemini AI is used to:

- Detect CSV columns automatically
- Handle different CSV structures
- Map columns intelligently
- Extract CRM fields
- Return structured JSON

Example:

CSV

```
Customer Name
Mail
Contact Number
Organization
```

Automatically becomes

```
name
email
mobile_without_country_code
company
```

without any hardcoded mapping.

---

# 📊 CRM Fields Extracted

The application extracts the following CRM fields whenever available.

| CRM Field |
|------------|
| created_at |
| name |
| email |
| country_code |
| mobile_without_country_code |
| company |
| city |
| state |
| country |
| lead_owner |
| crm_status |
| crm_note |
| data_source |
| possession_time |
| description |

---

# 📂 Folder Structure

```
groweasy-ai-csv-importer
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── prompts
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── uploads
│   ├── package.json
│   └── tsconfig.json
│
└── frontend
    ├── app
    ├── components
    ├── services
    ├── public
    ├── package.json
    └── next.config.ts
```

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- Express
- TypeScript

## AI

- Google Gemini

## CSV Parser

- PapaParse

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/akhila-pynam/groweasy-ai-csv-importer.git

cd groweasy-ai-csv-importer
```

---

# Backend Setup

Go to backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Create

```
.env
```

Add

```
PORT=5000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend

```bash
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

# Frontend Setup

Go to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend runs at

```
http://localhost:3000
```

---

# API Endpoints

## Health Check

```
GET /api/health
```

---

## Preview CSV

```
POST /api/preview
```

Returns

- CSV Preview
- Columns
- Total Rows

---

## Upload CSV

```
POST /api/upload
```

Returns

- AI Column Mapping
- CRM Ready Data
- Imported Count
- Skipped Count

---

# Project Workflow

```
User Uploads CSV
        │
        ▼
CSV Preview
        │
        ▼
Confirm Import
        │
        ▼
Backend Receives CSV
        │
        ▼
Parse CSV
        │
        ▼
Google Gemini AI
Column Mapping
        │
        ▼
CRM Transformation
        │
        ▼
Record Validation
        │
        ▼
Skip Invalid Records
        │
        ▼
Return Structured JSON
        │
        ▼
Display CRM Ready Data
```

---

# Validation Rules

The application follows the assignment rules.

✔ Skip records that contain neither Email nor Mobile Number

✔ Use only allowed CRM Status values

- GOOD_LEAD_FOLLOW_UP
- DID_NOT_CONNECT
- BAD_LEAD
- SALE_DONE

✔ Use only allowed Data Source values

- leads_on_demand
- meridian_tower
- eden_park
- varah_swamy
- sarjapur_plots

✔ Return structured JSON

✔ Preserve CSV integrity

These validation rules are based on the assignment specification. :contentReference[oaicite:2]{index=2}

---

# Sample CSV

The application supports CSV files from different sources such as

- Facebook Lead Export
- Google Ads Export
- Real Estate CRM Export
- Sales Reports
- Excel Sheets
- Marketing Agencies
- Custom CSV Files

---

# Screenshots

## Home Page

(Add Screenshot)

---

## CSV Upload

(Add Screenshot)

---

## CSV Preview

(Add Screenshot)

---

## AI Column Mapping

(Add Screenshot)

---

## CRM Ready Data

(Add Screenshot)

---

# Future Improvements

- Batch AI Processing
- Streaming CSV Parsing
- Virtualized Tables
- Retry Failed AI Requests
- Docker Support
- Backend Deployment
- Authentication
- Unit Testing
- Export CRM CSV
- Database Integration

---

# Assignment Requirements Covered

| Requirement | Status |
|------------|--------|
| Upload CSV | ✅ |
| CSV Preview | ✅ |
| AI Mapping | ✅ |
| CRM Transformation | ✅ |
| JSON Response | ✅ |
| Responsive UI | ✅ |
| Error Handling | ✅ |
| Loading State | ✅ |
| Import Statistics | ✅ |
| GitHub Repository | ✅ |
| Hosted Application | ✅ |
| README | ✅ |

This implementation satisfies the core functional requirements described in the assignment, including the frontend workflow, backend APIs, AI extraction, and submission checklist. :contentReference[oaicite:3]{index=3}

---

# Author

## Akhila Pynam

B.Tech Computer Science & Engineering

GitHub

https://github.com/akhila-pynam

LinkedIn

(Add LinkedIn Profile)

---

# License

This project was developed solely for the **GrowEasy Software Developer Internship Assignment**.

© 2026 Akhila Pynam
