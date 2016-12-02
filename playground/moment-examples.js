var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp: ', now.unix());

var timestamp = 1480601958;
var currentMoment = moment.unix(1480601958);

console.log('Current moment', currentMoment.format('MMMM D, YY @ H:mm a'));
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
