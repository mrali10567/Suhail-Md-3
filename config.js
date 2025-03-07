const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923087598338";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923087598338,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_24_03_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJndkNxcUIxOEdLdm1jU2JSRWxTTXU1OERhakxKWkIvWmFXTG9xVlRsWlUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrTWVzUEFFY1JMdXhncUNKbVhnVTBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhNTlmNTg3LTMwZTItNDAzZS1iOTM1LWRkYzI3ZmZlODY3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgNzksXG4gICAgICAyNDksXG4gICAgICA1NyxcbiAgICAgIDgsXG4gICAgICAxOTEsXG4gICAgICAyNDEsXG4gICAgICA5MCxcbiAgICAgIDE2LFxuICAgICAgMTA5LFxuICAgICAgMTUyLFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICA4NyxcbiAgICAgIDQ5LFxuICAgICAgMjM4LFxuICAgICAgMTQ0LFxuICAgICAgMTYsXG4gICAgICAxMDUsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxNTEsXG4gICAgICA5MixcbiAgICAgIDQ0LFxuICAgICAgNDQsXG4gICAgICA0MyxcbiAgICAgIDUxLFxuICAgICAgMTEsXG4gICAgICAxODYsXG4gICAgICAyMjMsXG4gICAgICAyOCxcbiAgICAgIDY0LFxuICAgICAgMjM0LFxuICAgICAgMjUsXG4gICAgICA4MCxcbiAgICAgIDU0LFxuICAgICAgMTA3LFxuICAgICAgNjgsXG4gICAgICA4MCxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSRTdQR0xGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODc1OTgzMzg6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzYXFsYWluIGFzbGFtXCIsXG4gICAgXCJsaWRcIjogXCI3NDQ5MTkxMjc4NjE0Mjo5MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMlh5T0lCRVB1aHFyNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQwakY0U0k5b2pzY2I2S2QvRktnZjBFQ2J4RC9STTdIRDNHcmIzSWEzVlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHZiN3RIT2lZWHg0WXhOUHFXR1pQTXBwZ2ZsQUh3NzI2UTdyK0J6dTFXVWdaSVkzRVBQL0hkN0lGMGQ1M0IyMkhMcFlWUkF2VXd5ek0rNTBjOVdqQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWlhZbUF1L05NTXRxQWlmd0RvSkFIeVpsMzNmUjhvSFY3Lzh6SG5IZkRvS09teEJLWkxvUStCMld3VEtUcHVRNFFmLytsbFBVaHlpN0d3RCsra3g3Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg3NTk4MzM4OjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTMyODYzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdvaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR29pLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWs3MGpyMGVHbWdWNGx1SC9GSmc1VzRPODVIQnZrczQ0RFAwNjhybFlSYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzUxMzkwNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MTMyODY0NjA4MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "true", // 'true' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
