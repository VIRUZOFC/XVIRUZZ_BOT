let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `👾 ESTAS SON LAS CUENTAS OFICIALES DEL BOT
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🦠 X-VIRUS-BOT
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM - ASISTENCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *FACEBOOK*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*`
await conn.sendButton(m.chat, str, wm, media, [
['GRUPOS 👾', '.grupos'],
['CREADOE', '#owner'],
['MENU 🦠', '/menu']], null, [
['X-VIRUS-BOT🦠', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /CUENTAS|VIRUZZ|VIRUS|OFICIAL$/i
handler.exp = 35
export default handler
