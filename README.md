# Hello Cash API Node Client

> WIP

[Hello Cash API](https://api.hellocash.net/docs/#/) NodeJS Client

[![Made in Africa](https://img.shields.io/badge/Africa's%20Rising-%E2%9C%93-green.svg)](https://github.com/collections/made-in-africa)

## Install

 Requires NodeJS 8+

```
  npm install hellocash-node --save
```

## Pre-Usage
You need the following before getting to use this library:
1. Password
2. Internal user id, phone number or agent id.

## Basic Usage

````js
const HelloCash = require('hellocash-node')
const helloCash = new HelloCash();

await helloCash.authenticate({
  principal: '251xxxxxxxxx',
  credentials: 'password',
  system: 'lucy'
});

let res = await helloCash.airtimeTransfer({
  amount: 100,
  to: '251xxxxxxxxxxx'
});

````

## API

1. [Authenticate](https://api.hellocash.net/docs/#!/default/authenticate_login)

Authenticate a user with username and password. Returns a Bearer API token. The API token must be passed as header with Authorization: Bearer on all subsequent accesses to the api.
````js

let authInfo = await helloCash.authenticate({
  principal: '251xxxxxxxxx',
  credentials: 'password',
  system: 'lucy'
});
````

2. [Password Change ](https://api.hellocash.net/docs/#!/default/authenticate_change)

Change a user's password. Returns a Bearer API token on successful change.
````js

await helloCash.password({
  principal: '251xxxxxxxxx',
  old_password: 'old',
  new_password: 'new',
  system: 'lucy'
});
````

3. [Accounts](https://api.hellocash.net/docs/#!/Account/account_findWrap)

Finds a list of accounts visible.
````js

let accounts = await helloCash.visibleAccounts();
````

4. [Account](https://api.hellocash.net/docs/#!/Account/account_findByIdWrap)

Find an accounts .
````js

let account = await helloCash.findAccount('xxxxxxxxxxxxxxx');
````

5. [Airtime Transfer](https://api.hellocash.net/docs/#!/Airtime/transfer_create)

Create a new Airtime transfer. The Airtime transfer will be attempted and may have several possible states.
````js

let res = await helloCash.airtimeTransfer({
  amount: 100,
  to: '251xxxxxxxxxxx'
});
````

6. [Airtime Transfer](https://api.hellocash.net/docs/#!/Airtime/transfer_verify)

Validate if an airtime topup can be made.
````js

let res = await helloCash.validateAirtime({
  amount: 100,
  to: '251xxxxxxxxxxx'
});
````

7. [Airtime Amounts](https://api.hellocash.net/docs/#!/Airtime/airtime_amounts)

Returns a list of amonts, which are currently available topup amounts in the system. 
````js

let amounts = await helloCash.airtimeAmounts();
````

8. [Airtime Transfers](https://api.hellocash.net/docs/#!/Airtime/transfer_find)

Finds a list of airtime transfers to and from this account. 
````js

let amounts = await helloCash.airtimeTransfers({
  offset: 10,
  limit: 100,
  status: 'PREPARED'
});
````

## License

MIT
