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

//////changes added
