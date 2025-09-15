# MisinformLens – AI-Powered Tool for Combating Misinformation

## 🚀 Project Goal
MisinformLens is an AI-powered tool designed to detect misinformation and educate users on identifying credible content. The system is built on Google Cloud + Generative AI and goes beyond fact-checking by highlighting manipulation techniques and fostering digital literacy.

---

## 🎯 Objectives
- Detect potential misinformation in text, links, or images.
- Provide a credibility score with reasoning.
- Educate users on misinformation strategies.
- Foster a more critical and informed digital citizenry.

---

## 🛠️ Tech Stack
- **Frontend**: React.js (Material UI / TailwindCSS)
- **Backend**: Node.js + Express
- **Database**: Firestore (Google Cloud) or MongoDB
- **AI/ML**:
  - Google Cloud Vertex AI (LLMs, fine-tuned models)
  - Hugging Face models (fake news detection, claim verification)
  - Perspective API (bias/toxicity detection)
- **Deployment**: Firebase Hosting / Google Cloud Run
- **Other Tools**: Docker, GitHub Actions (CI/CD)

---

## 📂 Folder Structure
```
genAI/
│── README.md # Workflow + setup instructions
│── frontend/ # React UI
│ ├── src/components/ # UI widgets (cards, alerts, dashboards)
│ ├── src/pages/ # Home, Results, Education Hub
│ ├── src/services/ # API calls to backend
│ └── App.js
│
│── backend/ # Node.js + Express server
│ ├── src/routes/ # API endpoints
│ ├── src/controllers/ # Core logic
│ ├── src/models/ # Database schemas
│ └── src/utils/ # Helper functions
│
│── ai_models/ # AI integrations
│ ├── factcheck_model/ # Hugging Face / custom model
│ ├── credibility_model/ # Vertex AI pipeline
│ └── toxicity_model/ # Perspective API
│
│── docs/ # Documentation
│ └── MisinformLens_Workflow.md
│
│── config/ # API keys (gitignored)
│── scripts/ # Deployment automation
└── .env.example # Template for secrets
```

---

## 🔑 Core Features
1. **User Input**: Accept text, URL, or image.
2. **AI Pipeline**:
   - Claim extraction & fact-checking.
   - Credibility scoring.
   - Manipulative/bias language detection.
   - Cross-check with trusted sources.
3. **Results Dashboard**:
   - ✅ Green → Trustworthy
   - ⚠️ Yellow → Needs Caution
   - ❌ Red → Likely Fake
   - With explanation + educational tips.
4. **Education Hub**: Tutorials + quizzes on misinformation patterns.

---

## 🧪 Prototype Scope (Hackathon)
- Simple React frontend (input + results).
- Backend mock pipeline using Google Cloud + Hugging Face APIs.
- Basic credibility scoring function.
- Preloaded educational content (Markdown/PDF).

---

## 🚀 Next Steps
1. Build basic React UI (input + results).
2. Add backend API routes for analysis.
3. Integrate Hugging Face fake news detection model.
4. Implement credibility scoring logic.
5. Deploy frontend + backend on Firebase/Cloud Run.
6. Add Education Hub (static tutorials + quiz).

---

## 📘 References
- [Google Cloud Vertex AI Docs](https://cloud.google.com/vertex-ai)
- [Hugging Face Model Hub](https://huggingface.co/models)
- [Perspective API](https://perspectiveapi.com/)
