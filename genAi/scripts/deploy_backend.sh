#!/bin/bash
# Deploy backend to Google Cloud Run
# Usage: bash deploy_backend.sh

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/misinformlens-backend

gcloud run deploy misinformlens-backend \
  --image gcr.io/$GOOGLE_PROJECT_ID/misinformlens-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
