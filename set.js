/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFXOTZrZFBxWTVRK2lGVWJRdlAwVVNGcjhiMDl3eTJmc2VVbkZoMEcxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZVK2hBNEl2eGJvSjhOMkRPeE0xWFZNeXRpTEFHSU9JYisrREZuaG5TYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQVU5RUcxdDZPVUY3bVJkYjVXSHNYSkV1Q0FURWlxQ25SdHNoQU9Kd1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aFgrenU4eEhTQXJEckY3WlJ6L0RhL1lrMEFPendjcTlGdkhIR0Z6M1hvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NMWlHT2J1S3F0L3VHNHVmdlZKQjFxVU1iOEh6SXc4TDJhY29VM0dOR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCL25PeC83L2JUQ0tublQzT2tiU1dDS3IzNHB6MThFbGhWeUEvekpLaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0MwMTNDV0FTRnYvRnRrM0dxWTJsTk5SQm12RUVLemUvcWlvRldQTTBGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0tnUXdwV1JFQlRHRXM4aDdBQlRFZDlxNWNyTVZNSVpMT3J0dktPTlB3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrWnFNcHBCYWc3clpjejdRam1FWDZSakY0eXlQRGZlMGM3NFZrVFlNZXZROGdKSnl0V1B6TE1jbmVOWFcwOFQrQWhFWWtVZWhXY1RkQmlad21MSWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiIwVFUzWm1wcDRCSGRTQUZjVThVaXBpKzdXZUttWnlHbGVQcnUwREdldWlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODQ0MzExMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQTIxRjIxRkJBMDgwOEREQThDQkY2NzYzQzdCNkU3RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2NTc4NTgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzc5MTA2QTM0NDExNENFNDRERTkzMDRDQzM5OEJBQTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjU3ODU4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0hMZ2pYMkFRMXU5a3lJdVgyYUtxdyIsInBob25lSWQiOiI5NDA0MjBlNy05MzM4LTQwOGMtOWFiZS1jYTA2MDJkMWNhZmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk96R0xtVlFnMThEZmcwckg4UHJFbXlaSnBRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9hbXBBYXpLa3pyRVlYM2NQMi9MWFpUSnV0OD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZOUFOR0g5RCIsIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4piF4Y6v4pi877iO4oSS4pi877iO4oSS4pyp4oSw4pyr4oSV4pmrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZW1vTThDRUlIWjZzQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHeUVZaHVaTWFIbW5yT1FSRC9TSDhMMFlRZjNkaFc0STRTcmtwMk5UUGtNPSIsImFjY291bnRTaWduYXR1cmUiOiJWZUhzUXpxOXIvVzlRbGtBSnRaSXlmMnUvZ3NTRkY3Z1VrK1Zyem5aOFprSTZnNU9rYWplTE40QWJ3TDl3eGhOc3RSaStnY1Fvb0xFc253aU1uNFJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnoyZEo2SWV4MFNDaStYZVh2OGEwTG55d0tVWWtmdlp5amJjVi9qT0ZyK0RiRm16Z1hBNUlYa2xKbU14UmZEYUpERHZxRkhVWXF6cnpOT1pSOUYraFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTg0NDMxMTE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSc2hHSWJtVEdoNXA2emtFUS8waC9DOUdFSDkzWVZ1Q09FcTVLZGpVejVEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NTc4NTczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtjMSJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
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
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
