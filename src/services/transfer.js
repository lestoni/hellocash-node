/**
 * Load Module Dependencies
 */
const axios = require('axios')
const qs    = require('query-string')

/**
 * Initiate Transfer - Create a new Transfer to an existing HelloCash member or a new member.
 * @name InitiateTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.initiateTransfer = async function initiateTransfer(transferBase) {

  return axios.post('/transfer', transferBase, this.reqConfig);
}

/**
 * Validate Transfer - Validate if a transfer can be made, without actually performing the transfer.
 * @name ValidateTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.validateTransfer = async function validateTransfer(transferBase) {

  return axios.post('/transfer/validate', transferBase, this.reqConfig);
}

/**
 * Cancel Transfer(s) - Cancel a group of transfers.
 * @name CancelTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.cancelTransfer = async function cancelTransfer(transfers = []) {

  return axios.post('/transfer/cancel', transfers, this.reqConfig);
}

/**
 * Select Transfer(s) - Select a group of transfers for authorizing in one go
 * @name SelectTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.selectTransfer = async function selectTransfer(transfers = []) {

  return axios.post('/transfer/select', transfers, this.reqConfig);
}

/**
 * Find Transfer - Get A transfer by ID
 * @name FindTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.findTransfer = async function findTransfer(id) {

  return axios.get(`/transfer/${id}`, this.reqConfig);
}

/**
 * Find Transfers - Get transfers
 * @name FindTransfer
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.findTransfers = async function findTransfers(query) {

  query = qs.stringify(query);

  return axios.get(`/transfer?${query}`, this.reqConfig);
}