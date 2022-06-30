const express = require('express')
const routerDwolla =express.Router()

const {createCustomer,addingCustBankDetails,createTransfer,makingBankAuth}=require("../contoller/dwollaController")
// const {publicAcessTokenRequest,processorTokenRequest} = require("../service/plaidController")


routerDwolla.post('/createCustomer',createCustomer)
routerDwolla.post('/addingCustBankDetails',addingCustBankDetails)
routerDwolla.post('/createTransfer',createTransfer)
routerDwolla.post('/makingBankAuth',makingBankAuth)
// routerDwolla.post('/createLinkTokenNew',createLinkTokenNew)


// routerDwolla.post('/publicAcessTokenRequest',publicAcessTokenRequest)
// routerDwolla.post('/processorTokenRequest',processorTokenRequest)



module.exports = routerDwolla