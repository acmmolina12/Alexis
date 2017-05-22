var Bot = require('bot');
var PF = require('pathfinding');
// var bot = new Bot('YOUR_KEY_HERE', 'training', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
var bot = new Bot('3m45waur', 'training', 'http://v.summitdevclub.com:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        //////* Write your bot below Here *//////
        //////* Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom *////////

        /*                                      *
         * This Code is global data!            *
         *                                      */

        // Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
        var myDir;

        // 
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];

        //
        var enemyBots = [];
        if (bot.yourBot.id != 1) enemyBots.push(bot.bot1);
        if (bot.yourBot.id != 2) enemyBots.push(bot.bot2);
        if (bot.yourBot.id != 3) enemyBots.push(bot.bot3);
        if (bot.yourBot.id != 4) enemyBots.push(bot.bot4);


        /*                                      *
         * This Code Decides WHAT to do         *
         *                                      */
        var task = "none"
        if (bot.yourBot.mineCount === 0) {
            task = "mines"
        } 
        else if (bot.yourBot.life < 50) {
            task = "tavern"

        }
        else {
            task = "killbots"
        }



        /*                                      *
         * This Code Determines HOW to do it    *
         *                                      */

        //This code basically is telling us the distance from the bot to the closes mine of the bot. It
        // also finds mines that are close to the bot.
        if (task === "mines") {
            var closemine = bot.freeMines[0]
            for (var i = 0; i < bot.freeMines.length; i++) {
                if (bot.findDistance(myPos, closemine) > bot.findDistance(myPos, bot.freeMines[i])) {
                    closemine = bot.freeMines[i]
                }
            }
            console.log("You got a mine!");
            myDir = bot.findPath(myPos, closemine)
        }
        
        //This is for when the bot needs to go to a tavern to get health, it finds the closest tavern to
        //get health from. 
        if (task === "tavern") {
            var closetavern = bot.taverns[0]
            for (var i = 0; i < bot.taverns.length; i++) {
                if (bot.findDistance(myPos, closetavern) > bot.findDistance(myPos, bot.taverns[i])) {
                    closetavern = bot.taverns[i]
                }
            }
            console.log("You're getting health");
            myDir = bot.findPath(myPos, closetavern)
        }

        //From lines 78 to 83 is what makes your bot kill enemy bots that are the closest to you.
        if (task === "killbots") {
            var killEnemyBots = enemyBots[0]
            for (var i = 0; i < enemyBots.length; i++) {
                if (bot.findDistance(myPos, killEnemyBots.posArray) > bot.findDistance(myPos, bot.enemyBots[i])) {
                    killEnemyBots = enemyBots[i];
                }
            }
            console.log("Your enemy is close");
            myDir = bot.findPath(myPos, killEnemyBots.posArray)
        }
        //From line 89 to 94 is what makes the robot do random stuff if there isn't anything else to do.
        if (task === "none") {
            console.log("Going Random!");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            myDir = dirs[rand];
        }




        /*                                                                          *
         * This Code Sets your direction based on myDir. Change if you want.        */

        bot.goDir = myDir;

        ///////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
}
bot.runGame();
