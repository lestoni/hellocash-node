/**
 * Load Module Dependencies
 */
const axios = require('axios');

/**
 * Visible Accounts - Finds a list of accounts visible.  
 * @name Visible Accounts
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.visibleAccounts = async function visibleAccounts(opts = {limit:10,offset:0}) {

  return axios.get(`/accounts?limit=${opts.limit}&offset=${opts.offset}`, this.reqConfig);
}

/**
 *  Accounts - Find Account  
 * @name FindAccount
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.findAccount = async function findAccount(id) {

  return axios.get(`/accounts/${id}`, this.reqConfig);
}