const { Configuration, PlaidApi, PlaidEnvironments, ProcessorTokenCreateRequest } = require('plaid');

const PLAID_CLIENT_ID = '62a30605787ab8001324575d';
const PLAID_SECRET = 'c8eecc45cd764363a91f257aff28bf';
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';


const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
})
const client = new PlaidApi(configuration);

const {Token} = require("../model/Token")
const {Account} = require("../model/Account")



const createPublicToken = async ( req, res) => {
  const publicTokenRequest = {
    // institution_id: 'ins_1',
    // initial_products: ['transactions']
    institution_id: req.body.institution_id,
    initial_products: req.body.initial_products
  };
  const token= new Token()
  try {

    const publicTokenResponse = await client.sandboxPublicTokenCreate(
      publicTokenRequest
    );
    const publicToken = publicTokenResponse.data.public_token;
    token.mobileNumber=req.body.mobileNumber
    token.publicTokens = publicToken
    token.save()
    res.send(`publicToken:${publicToken}`)

  }
  catch (error) {
    console.log(error)
    res.send(error)
  }

 
}


const createAccessToken = async ( req, res) => {
  const tokens = await Token.findOne({ "mobileNumber": req.body.mobileNumber })
  try {
    const exchangeRequest = {
      public_token: tokens.publicTokens
    };
    const exchangeTokenResponse = await client.itemPublicTokenExchange(
      exchangeRequest,
    );
    const accessToken = exchangeTokenResponse.data.access_token;
    tokens.accessTokens = accessToken
    await tokens.save()
    res.send(`aceesToken: ${accessToken}`)
  }
  catch (error) {
    console.log(error)
    res.send(error)
  } 
}


const choosingAccountIdforProcessorToken = async ( req, res) => {
  const account= new Account(req.body)
  const tokens = await Token.findOne({ "mobileNumber": req.body.mobileNumber })
  const request1 = {
    access_token: tokens.accessTokens
  };
  
  try {
    const response = await client.accountsGet(request1);
    const accounts = response.data.accounts;
    account.accounts=accounts
    account.save()
    res.send(accounts)
  }
  catch (error) {
    console.log(error)
    res.send(error)
  } 
}


const createProcessorToken = async ( req, res) => {
  const tokens = await Token.findOne({ "mobileNumber": req.body.mobileNumber })
  const account = await Account.findOne({ "mobileNumber": req.body.mobileNumber })
  try {
    console.log("hiii")

    const request = {
      access_token: tokens.accessTokens,
      account_id: account.accounts[req.body.chooseAccount].account_id,
      processor: 'dwolla',
    };
    const processorTokenResponse = await client.processorTokenCreate(
      request,
    );
    const processorToken = processorTokenResponse.data.processor_token;
    tokens.processorToken=processorToken
    tokens.save()
   

    res.send(`processorToken:${processorToken}`)
  }
  catch (error) {
    console.log(error)
    res.send(error)
  } 
}



module.exports = {
  createPublicToken,
  createAccessToken,
  choosingAccountIdforProcessorToken,
  createProcessorToken
}