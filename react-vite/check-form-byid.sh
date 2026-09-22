#!/bin/bash
FORM_ID="WLS7O8DIGQLolsYJ9diB3WQk57EuC0SvGJIrBdI7Wqo"

curl -i -X POST \
  -H "Origin: http://localhost:5173" \
  -H "Content-Type: application/json" \
  -d '{
    "field_5000": "This is a test submission from the command line.",
    "field_5001": true,
    "field_5002": "Alex Vance",
    "field_5003": "test@remote-tech.us",
    "field_5004": "Cloud Infrastructure",
    "field_5005": "Kubernetes Cluster Orchestration"
  }' \
  "https://br.remote-tech.us/api/database/views/form/${FORM_ID}/submit/"
