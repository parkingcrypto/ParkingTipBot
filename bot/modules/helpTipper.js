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
      '  **.tip** : Displays This Message\n' +
      '  **.tip balance** : get your balance\n' +
      '  **.tip deposit** : get address for your deposits\n' +
      '  **.tip withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **.tip <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **.tip private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **.tip @admin 10**\n' +
      '  **.tip withdraw PARKaddressHERE 10**\n' +
      '  **.tip private @admin 10**\n' +
      '  **.tip balance**\n' +
      '  **.tip deposit**\n'
    );
  }
};
