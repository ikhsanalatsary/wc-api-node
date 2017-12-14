'use strict';

var WooCommerceAPI = require('./index.js'); // use require('woocommerce-api')

// Initialize the WooCommerceAPI class
var WooCommerce = new WooCommerceAPI({
  url: 'http://example.com', // Your store url (required)
  // version: 'v3', // WooCommerce API version (optional)
  // verifySsl: true, // Use `false` when need test with self-signed certificates, default is `true` (optional)
  // encoding: 'utf8', // Encode, default is 'utf8' (optional)
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Your API consumer key (required)
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // Your API consumer secret (required)
});

// var WooCommerce = new WooCommerceAPI({
//   url: 'https://wordpresyugo.000webhostapp.com',
//   consumerKey: 'ck_5b58c63fceef8aaabcdb35e984f6eb74f712c9b4',
//   consumerSecret: 'cs_5dfd2ad4ff3faeb25be9661108ca417ae93debb9',
//   wpAPI: true,
//   queryStringAuth: true,
//   version: 'wc/v2'
// });

// GET example

WooCommerce.get('products').then(console.log).catch(console.log)

// var data = {
//   code: '2356',
//   discount_type: 'fixed_cart',
//   amount: '123',
//   individual_use: true,
//   exclude_sale_items: true,
//   usage_limit: 1,
//   description: 'Voucher',
// };

// WooCommerce.post('coupons', data).then(console.log).catch(console.log)

// POST example
// WooCommerce.post('products', {
//   product: {
//     title: 'Premium Quality',
//     type: 'simple',
//     regular_price: '21.99'
//   }
// }).then(console.log).catch(console.log)

// PUT example
// WooCommerce.put('orders/123', {
//   order: {
//     status: 'completed'
//   }
// }).then(console.log).catch(console.log)

// Delete example
// WooCommerce.delete('coupons/123').then(console.log).catch(console.log)
