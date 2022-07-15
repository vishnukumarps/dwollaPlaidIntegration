const express = require('express')
const routerDwolla =express.Router()

const {createCustomer,createTransfer,addingBankAndMakingAuth,createTransferBetweenCustomer,statusOfYourTransfer}=require("../contoller/dwollaController")

routerDwolla.post('/createCustomer',createCustomer)
routerDwolla.post('/addingBankAndMakingAuth',addingBankAndMakingAuth)
routerDwolla.post('/createTransfer',createTransfer)
routerDwolla.post('/createTransferBetweenCustomer',createTransferBetweenCustomer)
routerDwolla.post('/statusOfYourTransfer',statusOfYourTransfer)





module.exports = routerDwolla