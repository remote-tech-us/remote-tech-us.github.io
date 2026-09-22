#!/bin/bash
FORM_ID="WLS7O8DIGQLolsYJ9diB3WQk57EuC0SvGJIrBdI7Wqo"

curl -i -X POST \
  -H "Origin: http://localhost:5173" \
  -H "Content-Type: application/json" \
  -d '{
    "Full Name": "Alex Vance",
    "Email Address": "vance@remote-tech.us",
    "Active": true,
    "Target Product Stack": "Cloud Infrastructure",
    "Project Classification": "Kubernetes Cluster Orchestration",
    "Detailed Specifications": "Schema verification test via user field names."
  }' \
  "https://br.remote-tech.us/api/database/views/form/${FORM_ID}/submit/?user_field_names=true"
