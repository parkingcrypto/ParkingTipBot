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
      '  **!tip<CoinSymbol>** : Displays This Message\n' +
      '  **!tip<CoinSymbol> balance** : get your balance\n' +
      '  **!tip<CoinSymbol> deposit** : get address for your deposits\n' +
      '  **!tip<CoinSymbol> withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **!tip<CoinSymbol> <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **!tip<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **!tippark @MSFTserver 10**\n' +
      '  **!tippark withdraw DOGEaddressHERE 10**\n' +
      '  **!tippark private @MSFTserver 10**\n' +
      '  **!tippark balance**\n' +
      '  **!tippark deposit**\n'
    );
  }
};
