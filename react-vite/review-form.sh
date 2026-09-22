#!/bin/bash
BASEROW="https://br.remote-tech.us/api/database/views/form"
FORM_ID="WLS7O8DIGQLolsYJ9diB3WQk57EuC0SvGJIrBdI7Wqo"
API_URL="${BASEROW}/${FORM_ID}/submit/"
# worked: curl -s "https://br.remote-tech.us/api/database/views/form/WLS7O8DIGQLolsYJ9diB3WQk57EuC0SvGJIrBdI7Wqo/submit/" | python3 -m json.tool

echo "  curl -s \"$API_URL\" | python3 -m json.tool"
curl -s "$API_URL" | python3 -m json.tool
