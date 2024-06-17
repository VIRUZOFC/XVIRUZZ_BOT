import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) {
    conn.reply(
      m.chat,
      `Hola *@${m.sender.split`@`[0]}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n*_📌 Ejemplo :_* *${
        usedPrefix + command
      }* Hola bot`,
      m,
      {mentions: [m.sender]}
    );
    throw false;
  }
  try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${text}`)
let res = await gpt.json()
await m.reply(res.data.message)
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `Simsimi esta durmiendo no molesta 🥱`;
    }
  }
};
handler.help = ['virus']
handler.tags = ['fun'];
handler.command = /^((sim)?simi|alexa|cortana|bot)$/i;
export default handler;
