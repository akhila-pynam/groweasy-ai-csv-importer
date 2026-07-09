# 🚀 GrowEasy AI CSV Importer

> AI-powered CSV Importer built for the **GrowEasy Software Developer Internship Assignment**.

---

# 🌐 Live Demo

👉 **Hosted Application**

[GrowEasy AI CSV Importer](http://groweasy-ai-csv-importer-front.vercel.app/)

---

# 💻 GitHub Repository

👉 [https://github.com/akhila-pynam/groweasy-ai-csv-importer](https://github.com/akhila-pynam/groweasy-ai-csv-importer)

---

# 📌 Project Overview

The objective of this project is to build an **AI-powered CSV Importer** capable of accepting **any valid CSV file**, intelligently understanding different column names and layouts using **Google Gemini AI**, and transforming the data into the **GrowEasy CRM format**.

Unlike traditional CSV importers that rely on fixed column names, this application automatically detects and maps columns using AI.

This project was developed as part of the **GrowEasy Software Developer Internship Assignment**.

---

# ✨ Features

## Frontend

- ✅ Responsive UI
- ✅ Drag & Drop CSV Upload
- ✅ File Picker
- ✅ CSV Preview
- ✅ Import Statistics
- ✅ AI Column Mapping
- ✅ CRM Ready Data Preview
- ✅ Responsive Tables
- ✅ Horizontal Scrolling
- ✅ Loading Indicators
- ✅ Light / Dark Theme
- ✅ Error Handling

---

## Backend

- ✅ Express REST API
- ✅ CSV Upload API
- ✅ CSV Parsing
- ✅ Google Gemini AI Integration
- ✅ Intelligent Column Mapping
- ✅ CRM Data Transformation
- ✅ Record Validation
- ✅ Invalid Record Skipping
- ✅ Structured JSON Response
- ✅ TypeScript

---

# 🤖 AI Features

Google Gemini AI is used to:

- Detect CSV columns automatically
- Understand different CSV structures
- Map columns intelligently
- Transform CSV into GrowEasy CRM format
- Return structured JSON output

Example

### Input CSV

| Customer Name | Mail | Contact Number | Organization |
|---------------|------|----------------|--------------|

↓

### CRM Output

| CRM Field | Value |
|-----------|-------|
| name | Customer Name |
| email | Mail |
| mobile_without_country_code | Contact Number |
| company | Organization |

No hardcoded mappings are used.

---

# 📊 CRM Fields Supported

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

# 📂 Project Structure

```text
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
