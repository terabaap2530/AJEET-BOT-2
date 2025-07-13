const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 ──── •💜• ────' },
    { time: '1:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍──── •💜• ────' },
    { time: '2:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍─── •💜• ────' },
    { time: '3:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍─── •💜• ────' },
    { time: '4:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 ──── •💜• ────' },
    { time: '5:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢😹 ──── •💜• ────' },
    { time: '6:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_Gud Morning 🌄 📍─── •💜• ────' },
    { time: '7:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢 😂─── •💜• ────' },
    { time: '8:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 ──── •💜• ────' },
    { time: '9:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ Its Breakfast Time 🐼 ──── •💜• ────' },
    { time: '10:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 ──── •💜• ────' },
    { time: '11:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨😻 ──── •💜• ────' },
    { time: '12:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞|| कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵 ──── •💜• ────' },
    { time: '1:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳Its 𝐋𝐮𝐧𝐜𝐡 Time 🐼|| कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍 ──── •💜• ────' },
    { time: '2:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇 ──── •💜• ────' },
    { time: '3:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍─── •💜• ────' },
    { time: '4:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝐁𝐚𝐡𝐮𝐭 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐀𝐚𝐣🥵 ──── •💜• ────' },
    { time: '5:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍──── •💜• ────' },
    { time: '6:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍──── •💜• ────' },
    { time: '7:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳|| कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍─── •💜• ────' },
    { time: '8:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋 ──── •💜• ────' },
    { time: '9:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ || कृष्ण सदा सहायते 🔱🦚 📍_Jai Shree Krishna 💟_📍•💜• ────' },
    { time: '10:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐓𝐮𝐦 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️ ──── •💜• ────' },
    { time: '11:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳Gud Nyt 📍_Jai Shree Krishna 💟_📍🥱 •💜• ────' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
