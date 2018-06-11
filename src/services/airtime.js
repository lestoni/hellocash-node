/**
 * Load Module Dependencies
 */
const axios = require('axios')
const qs    = require('query-string')

/**
 * Airtime Transfer - Create a new Airtime transfer.
 * @name AirtimeTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.airtimeTransfer = async function airtimeTransfer(transferBase) {

  return axios.post('/airtime', transferBase, this.reqConfig);
}

/**
 * Airtime Validate - Validate Airtime transfer.
 * @name AirtimeValidate
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.validateAirtime = async function validateAirtime(transferBase) {

  return axios.post('/airtime/validate', transferBase, this.reqConfig);
}

/**
 * Airtime amounts - Returns a list of amonts, which are currently available topup amounts in the system.
 * @name AirtimeValidate
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.airtimeAmounts = async function airtimeAmounts() {

  return axios.get('/airtime/available', this.reqConfig);
}


/**
 * Airtime Transfers - Finds a list of airtime transfers to and from this account.
 * @name FindAirtimeTransfers
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.airtimeTransfers = async function airtimeTransfers(query) {

  query = qs.stringify(query);

  return axios.get(`/airtime?${query}`, this.reqConfig);
}

/**
 * Find Airtime Transfer - Find an airtime topup transfer by id
 * @name FindTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.airtimeInfo = async function airtimeInfo(id) {

  return axios.get(`/airtime/${id}`, this.reqConfig);
}