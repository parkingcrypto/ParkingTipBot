'use strict';
let config = require('config');
let parkingFee = config.get('park').paytxfee;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Parking (park) Tipper**\n    Transaction Fees: **' + parkingFee + '**\n' +
      '__**Commands**__\n' +
      '  **.tippark** : Displays This Message\n' +
      '  **.tippark balance** : get your balance\n' +
      '  **.tippark deposit** : get address for your deposits\n' +
      '  **.tippark withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **.tippark <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **.tippark private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **.tippark @admin 10**\n' +
      '  **.tippark withdraw PARKaddressHERE 10**\n' +
      '  **.tippark private @admin 10**\n' +
      '  **.tippark balance**\n' +
      '  **.tippark deposit**\n'
    );
  }
};
