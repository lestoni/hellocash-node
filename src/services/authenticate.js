/**
 * Load Module Dependencies
 */
const axios = require('axios');


/**
 * Login - Authenticate a user with username and password. 
 * @name Login
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.credentials          Web password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.authenticate = async function login(info) {

  let res = await axios.post('/authenticate', {
    principal: info.principal,
    credentials: credentials,
    system: system
  }, this.reqConfig);

  this.reqconfig.headers['Authorization'] = `Bearer ${res.authkey}`;

}

/**
 * Password - Change a user's password.  
 * @name PasswordChange
 * @function
 * @param  {String} info.principal            Internal user id, phone number or agent id
 * @param  {String} info.old_password         Old Password
 * @param  {String} info.new_password        New Password
 * @param  {String} info.system              System ID to login to
 * @return {Promise}                    This returns a promise that resolves to the login info
 */
exports.passwordChange = async function login(info) {

  return axios.put('/authenticate', {
    principal: info.principal,
    credentials0: info.old_password,
    credentials1: info.new_password,
    credentials2: info.new_password,
    system: system
  }, this.reqConfig);
}