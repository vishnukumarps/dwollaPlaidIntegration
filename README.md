# dwollaPlaidIntegration


///// Create customer 
post: http://localhost:3000/dwolla/createCustomer

 {
  "firstName": "Mashoor",
  "lastName": "koothradan",
  "mobileNumber":"1234567890",
  "email": "vava@gmail.com",
  "type": "personal",
  "address1": "Highschoolkunnu,Chungathara",
  "city": "Malappuram",
  "state": "NY",
  "postalCode": "67933",
  "dateOfBirth": "1997-10-23",
  "ssn": "1456"
}

//// Adding bank account and making verification
post : http://localhost:3000/dwolla/addingBankAndMakingAuth

{
    "institution_id":"ins_1",
    "initial_products":["transactions"],
    "bankName":"Fedral Bank of India",
    "mobileNumber":"1234567890"   
}

//// Create fund Transfer
post: http://localhost:3000/dwolla/createTransfer
{
    "mobileNumber":1234567890,
    "currency": "USD",
    "amount": "1.00"
}

//////////////////////////////////////////////////////////////////////////////////////////////////

///// createCustomer
http://localhost:3000/dwolla/createCustomer

{
  "firstName": "anshad",
  "lastName": "Rahman",
  "mobileNumber":"2222222222",
  "email": "ans@gmail.com",
  "type": "personal",
  "address1": "Highschoolkunnu,Chungathara",
  "city": "Malappuram",
  "state": "NY",
  "postalCode": "67933",
  "dateOfBirth": "1997-10-23",
  "ssn": "1456"
}

/////createPublicToken
http://localhost:3000/plaid/createPublicToken
{
    "mobileNumber":"2222222222",
    "institution_id": "ins_131858",
    "initial_products": [
            "balance",
            "transactions",
            "identity"
        ]
}

/////createAccessToken
http://localhost:3000/plaid/createAccessToken
{
    "mobileNumber":"2222222222"
}

/////choosingAccountIdforProcessorToken
http://localhost:3000/plaid/choosingAccountIdforProcessorToken
{
    "mobileNumber":"2222222222"
}

/////createProcessorToken
http://localhost:3000/plaid/createProcessorToken

{
    "mobileNumber":"2222222222",
    "chooseAccount":0
}

/////accountBalance
http://localhost:3000/plaid/accountBalance
{
    "mobileNumber":"1234567896",
    "chooseAccount":0
}


/////institutionsGetRequest
http://localhost:3000/plaid/institutionsGetRequest


//////createTransfer
http://localhost:3000/dwolla/createTransfer
{
    "mobileNumber":2222222222,
    "currency": "USD",
    "amount": "3.00"
}


//////addingBankAndMakingAuth
http://localhost:3000/dwolla/addingBankAndMakingAuth
{
    "bankName":"Federal Bank",
    "mobileNumber":"2222222222"   
}

//////createTransferBetweenCustomer
http://localhost:3000/dwolla/createTransferBetweenCustomer
{
    "sendCusNumber":7777777777,
    "recdCusNumber":2222222222 ,
    "currency": "USD",
    "amount": "4.00"
}

//////statusOfYourTransfer
http://localhost:3000/dwolla/statusOfYourTransfer

{
    "sendCusNumber":7777777777
}