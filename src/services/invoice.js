/**
 * Load Module Dependencies
 */
const axios = require('axios')
const qs    = require('query-string')

/**
 * Create a new Invoice
 * @name CreateInvoice
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.createInvoice = async function createInvoice(invoiceBase) {

  return axios.post('/invoices', invoiceBase, this.reqConfig);
}

/**
 * Validate a new Invoice
 * @name ValidateInvoice
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.validateInvoice = async function validateInvoice(invoiceBase) {

  return axios.post('/invoices/validate', invoiceBase, this.reqConfig);
}

/**
 * Invoices List - Finds a list of invoices to and from this account.
 * @name FindInvoices
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.getInvoices = async function getInvoices(query) {

  query = qs.stringify(query);

  return axios.get(`/invoices?${query}`, this.reqConfig);
}

/**
 * Find Invoice  by id
 * @name FindInvoice
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.getInvoice = async function getInvoice(id) {

  return axios.get(`/invoices/${id}`, this.reqConfig);
}

/**
 * Generate Invoice  by id
 * @name GenerateInvoice
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.generateInvoice = async function generateInvoice(id) {

  return axios.put(`/invoices/${id}`, this.reqConfig);
}