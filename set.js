/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hJV3pDSk9DVnl6UE5rYTZhSWhmZ2haYitYZlJNQURFVHBGM25BRTFFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3ZYVjNlUWFsTTZaeFBpTzF2SWgrdzdRWUlTZ3RjM2UzSUNmK054UWNIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TXlrWWdrckFqUG5xZ2p0ODhrSmZOaWJ2aE9CSjlycU81NVZ2eDJPVG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeDdYNjNmZ3kyUTZNSmxndXZlWm94eTN1a1M1eVBjQUgxQ2lQZDFNdzFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLM0x3bVdRQndTcGpIUWxQRmdVQ1VJcDl6d2xVb0lWYVdzVzN0ZVI0a3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFsWEYzaXcyWFNLVDdZQWNMTXBvanpOYkRXQ1ZuTzBlRit2cHJDMWIwVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBTVm1LV1VRUEdlQXoyZ0daT1NQSG9SdDV1UzY3UnF2YUxwbTgySGNYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmdtR3RNZTY0b0xjbUU1NXo4RmxaRDZ1NXYwclJsQ2I2b3BpSzV3Z1BHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJTZXZadTRQeXAyYUtLcGI3SlFNdW9jSGtqSGU0RnE2cUM0dExIU0xwanpQTFlGTk9mVHpLK3JpOTBvdzh5czZqTm5VR051NGE5STdESkQvSHRES2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiVzBxVFVYVERmdkJLdTF2QVdJKzQzbzFQM1F2RGNTKytrQWcwYUtwWDlzND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTRFRDQ2QjkxQjgzMUMxRDMwRUI3MkYzMDU2NDk4RUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzgxNjA3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU4NDQzMTExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc1NDM2RkU1QUM3NkFDMUZCNEQyOTZBQUVCRjVGM0IwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDc4MTYwNzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlpSNFExVjMzIiwibWUiOnsiaWQiOiIyNTQ3NTg0NDMxMTE6N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNzQ4MDgyNzY1ODI1MDo3QGxpZCIsIm5hbWUiOiLinJ7vuI7imIXhjq/imLzvuI7ihJLimLzvuI7ihJLinKnihLDinKvihJXimavimKDvuI7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IUjhva0VFUE9jdHNFR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhSN0JnS3hidk9ON0dualNWWFJjTnNFM0N6Q0ZsMWhnbWQ1OE9Ha3pSbGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZ6bkwzYWR4czJWZnVLNW1uY1NGZzEvQ0hYODlSS0FtK1ZvZ3pkRVU5d2ZnQmJvWHJ2dnpDVzJUWHlFZ0ZaakJtZG1NKzVpQkc2L2M3enBKOGF4Z0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1S0tHN2lpazBJUXJPbkdzT2lwL0FqY2ExSHc2OUJkallveDF6a2NpTU02T1F5anczTWZXYXo3eTVpVEZ5U3RkWEJ2cTFSTXYwOVdKQTdwc1Btd0NoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZFZXdZQ3NXN3pqZXhwNDBsVjBYRGJCTndzd2haZFlZSm5lZkRocE0wWlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzgxNjA2NSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMODcifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'FALSE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '*';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254758443111';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/jxxwms.jpeg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'FALSE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
