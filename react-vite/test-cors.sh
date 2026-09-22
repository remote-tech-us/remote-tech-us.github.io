#!/bin/bash

# 1. Test CORS Preflight (OPTIONS request)
curl -i -X OPTIONS \
  -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  "https://br.remote-tech.us/api/database/views/form/sNsqHzGLgd8d3sMbLaep8ZDh-t-bAr7xUorFUcxkGg8/submit/"

# 2. Test Actual Form Submission (POST request)
curl -i -X POST \
  -H "Origin: http://localhost:5173" \
  -H "Content-Type: application/json" \
  -d '{
    "Full Name": "Test User",
    "Email Address": "test@remote-tech.us",
    "Target Product Stack": "Cloud Infrastructure",
    "Project Classification": "Kubernetes Cluster Orchestration",
    "Detailed Specifications": "cURL validation test."
  }' \
  "https://br.remote-tech.us/api/database/views/form/sNsqHzGLgd8d3sMbLaep8ZDh-t-bAr7xUorFUcxkGg8/submit/"
