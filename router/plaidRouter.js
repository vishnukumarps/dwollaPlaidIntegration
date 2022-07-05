const express = require('express')
const routerPlaid = express.Router()

const { createPublicToken,
    createAccessToken,
    choosingAccountIdforProcessorToken,
    createProcessorToken,
    accountBalance,
    institutionsGetRequest } = require("../contoller/plaidApiContoller")



routerPlaid.post('/createPublicToken', createPublicToken)
routerPlaid.post('/createAccessToken', createAccessToken)
routerPlaid.post('/choosingAccountIdforProcessorToken', choosingAccountIdforProcessorToken)
routerPlaid.post('/createProcessorToken', createProcessorToken)
routerPlaid.post('/accountBalance',accountBalance)
routerPlaid.post('/institutionsGetRequest',institutionsGetRequest)




module.exports = routerPlaid