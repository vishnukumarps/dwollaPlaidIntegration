const express = require('express')
const routerDwolla = express.Router()

const { createCustomer, createTransfer,
    addingBankAndMakingAuth,
    createTransferBetweenCustomer,
    statusOfYourTransfer,
    createWebhookSubscription,
    retrieveAwebhookSubscription} = require("../contoller/dwollaController")

routerDwolla.post('/createCustomer', createCustomer)
routerDwolla.post('/addingBankAndMakingAuth', addingBankAndMakingAuth)
routerDwolla.post('/createTransfer', createTransfer)
routerDwolla.post('/createTransferBetweenCustomer', createTransferBetweenCustomer)
routerDwolla.post('/statusOfYourTransfer', statusOfYourTransfer)
routerDwolla.post('/createWebhookSubscription',createWebhookSubscription)
routerDwolla.post('/retrieveAwebhookSubscription',retrieveAwebhookSubscription)





module.exports = routerDwolla