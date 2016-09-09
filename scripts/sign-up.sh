
curl --include --request POST http://tic-tac-toe.wdibos.com \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "chris15@chris.com",
      "password": "123",
      "password_confirmation": "123"
    }
  }'

echo
