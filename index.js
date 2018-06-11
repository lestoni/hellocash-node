const {
  account,
  airtime,
  authenticate,
  invoice,
  transfer
} = require('./src/services');


class Hellocash {

  constructor(config = {}) {

    this.reqConfig = {
      baseURL: 'https://api.hellocash.net',
      headers: {
        'content-type': 'application/json'
      }
    }

  }

  /**
   * Authenticate
   * 
   */
  authenticate () {
    return authenticate.login.bind(this)(...arguments)
  }

  /**
   * Password
   * 
   */
  passwordChange () {
    return authenticate.passwordChange.bind(this)(...arguments)
  }

  /**
   * Visible Accounts
   * 
   */
  visibleAccounts () {
    return account.visibleAccounts.bind(this)(...arguments)
  }

  /**
   *  Find sAccounts
   * 
   */
  findAccount () {
    return account.findAccount.bind(this)(...arguments)
  }

  /**
   *  Airtime Transfer
   * 
   */
  airtimeTransfer () {
    return airtime.airtimeTransfer.bind(this)(...arguments)
  }

  /**
   *  Validate Airtime Transfer
   * 
   */
  validateAirtime () {
    return airtime.validateAirtime.bind(this)(...arguments)
  }

  /**
   *  Get Airtime Amounts
   * 
   */
  airtimeAmounts () {
    return airtime.airtimeAmounts.bind(this)(...arguments)
  }

  /**
   *  Get Airtime Transfers
   * 
   */
  airtimeTransfers () {
    return airtime.airtimeTransfers.bind(this)(...arguments)
  }

  /**
   *  Get Airtime Info
   * 
   */
  airtimeInfo () {
    return airtime.airtimeInfo.bind(this)(...arguments)
  }

  /**
   *  Create Invoice
   * 
   */
  createInvoice () {
    return invoice.createInvoice.bind(this)(...arguments)
  }

  /**
   *  Validate Invoice
   * 
   */
  validateInvoice () {
    return invoice.validateInvoice.bind(this)(...arguments)
  }

  /**
   *  Get  Invoices
   * 
   */
  getInvoices () {
    return invoice.getInvoices.bind(this)(...arguments)
  }

  /**
   *  Get  Invoice
   * 
   */
  getInvoice () {
    return invoice.getInvoice.bind(this)(...arguments)
  }

  /**
   *  Generate Invoice
   * 
   */
  generateInvoice () {
    return invoice.generateInvoice.bind(this)(...arguments)
  }

  /**
   * Initiate Transfer
   * 
   */
  initiateTransfer () {
    return transfer.initiateTransfer.bind(this)(...arguments)
  }

  /**
   * Validate Transfer
   * 
   */
  validateTransfer () {
    return transfer.validateTransfer.bind(this)(...arguments)
  }

  /**
   * Cancel Transfer
   * 
   */
  cancelTransfer () {
    return transfer.cancelTransfer.bind(this)(...arguments)
  }

  /**
   * Select Transfer
   * 
   */
  selectTransfer () {
    return transfer.selectTransfer.bind(this)(...arguments)
  }

 /**
   * find Transfer
   * 
   */
  findTransfer () {
    return transfer.findTransfer.bind(this)(...arguments)
  }

  /**
   * find Transfers
   * 
   */
  findTransfers () {
    return transfer.findTransfer.bind(this)(...arguments)
  }

}