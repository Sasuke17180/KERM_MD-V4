const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3AZ3waIZ#scksYrFkn5Ci67FUc56L4f7rlecyacFKMtfs4t72cKU",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/wbilbw.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR sispann jwe nan koko manmanw mèsi😌",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "!",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩𝗦𝗘𝗜𝗚𝗡𝗘𝗨𝗥𓆪²⁴_𓆩𝗡𝗔𝗖𝗛𝗜𝗧𝗢𓆪²⁴_𝗣𝗥𝗜𝗡𝗖𝗘𝗦 𝗗𝗘𝗦 𝗧É𝗡È𝗕𝗥𝗘𝗦⁷⁷_𝐃𝚫𝚪𝐊³³³_𝚸𝐒𝐘𝐂𝚮𝚯𝚸𝚫𝚻𝚮²²²",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
