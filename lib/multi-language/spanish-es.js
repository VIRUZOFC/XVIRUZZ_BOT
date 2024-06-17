const MID_GB = {
idioma: 'Español',
idioma_code: 'es',
  
//main.js
methodCode1: 'ELIGE COMO QUIERES CONECTARTE A XVIRUS',
methodCode2: '¿CÓMO DESEA CONECTARSE?',
methodCode3: 'Opción',
methodCode4: 'Código QR',
methodCode5: 'Código de 8 digitos.',
methodCode6: 'Escriba sólo el número de',
methodCode7: 'la opción para conectarse.',
methodCode8: 'CONSEJO',
methodCode9: 'Si usa Termux, Replit, Linux, o Windows',
methodCode10: 'Use estos comandos para una ejecución directa:',
methodCode11: (chalk) => `NO SE PERMITE NÚMEROS QUE NO SEAN ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, TAMPOCO LETRAS O SÍMBOLOS ESPECIALES.\n${chalk.bold.greenBright("CONSEJO: COPIE EL NÚMERO DE LA OPCIÓN Y PÉGUELO EN LA CONSOLA.")}`,
methodCode12: 'Inicia con código QR',
methodCode13: 'Inicia con código de 8 dígitos spamea la opción pq anda bug',
methodCode14: 'Inicio predeterminado con opciones',
phNumber2: (chalk) => `Por favor, Ingrese el número de WhatsApp.\n${chalk.bold.yellowBright("CONSEJO: Copie el número de WhatsApp y péguelo en la consola.")}\n${chalk.bold.greenBright("Ejemplo: +593090909090")}\n${chalk.bold.magentaBright('---> ')}`,
pairingCode: 'CÓDIGO DE VINCULACIÓN:',
mCodigoQR: `\n🦠 ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS`,
mConexion: `\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒\n│\n│ 👾 Se ha conectado con WhatsApp exitosamente.\n│\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒`,
mConexionOFF: "\n☣️𒌍 CONEXION REPLAZADA, POR FAVOR ESPERE UN MOMENTO ME VOY A REINICIAR...\nSI SALE ERROR VUELVE A INICIAR CON: npm start", 

//Alertas
mAdminTrue: '*Eres Admin. no habrá no puedo negarme, pero es bajo tu responsabilidad*',
mAdmin: '*Debo de ser Admin. para poder eliminar*',
mOwner: '*Si tienes permisos o eres propietario/a, usa `#on restringir`*\n\n> _Si lo activas, las funciones no se limitarán_',
mAntiDelete: '*Desactive la función anti eliminar usando `#off antieliminar` para evitar reenvío de mensajes no deseados*',
mAdvertencia: '> ☣️ *ADVERTENCIA 🦠*\n\n',
mInfo: '> 🪧 *INFORMACIÓN 🦠*\n\n',
mExito: '> 👾 *ÉXITO 🦠*\n\n',
mError: '> 🛑 *ERROR 🦠*\n\n',

//_allantilink.js
mTiktok: '*¡No se permite enlace de TikTok!*\n*Tendre que eliminarte por incumplir normas*',
mYoutube: '*¡No se permite enlace de YouTube!*\n*Tendre que eliminarte por incumplir normas*',
mTelegram: '*¡No se permite enlace de Telegram!*\n*Tendre que eliminarte por incumplir normas*',
mFacebook: '*¡No se permite enlace de Facebook!*\n*Tendre que eliminarte por incumplir normas*',
mInstagram: '*¡No se permite enlace de Instagram!*\n*Tendre que eliminarte por incumplir normas*',
mX: '*¡No se permite enlace de X (Twitter)!*\n*Tendre que eliminarte por incumplir normas*',
mDiscord: '*¡No se permite enlace de Discord!*\n*Tendre que eliminarte por incumplir normas*',
mThreads: '*¡No se permite enlace de Threads!*\n*Tendre que eliminarte por incumplir normas*',
mTwitch: '*¡No se permite enlace de Twitch!*\n*Tendre que eliminarte por incumplir normas*',

//_antilink.js
mWhatsApp: '*¡No se permite este tipo de enlace de WhatsApp!*\n*Tendre que eliminarte por incumplir normas*',

//_antilink2.js
mWhatsApp2: '*¡No se permite ningún tipo de enlace!*\n*Tendre que eliminarte por incumplir normas*',
  
//antiprivado.js
smsprivado: (m, cuentas) => `*@${m.sender.split`@`[0]} Esta prohibido escribir al privado*\n\n> *Únete a la comunidad x-virus-bot para conocer cómo puedes tener tú propio Bot para WhatsApp*\n${cuentas}\n\n☣️ \`\`\`Serás Bloqueado(a)\`\`\` ☣️`, 

//_anti-internacional.js
mFake: (m) => `💀 *¡El usuario @${m.sender.split`@`[0]} no esta permitido en este grupo!*`, 
mFake2: (user) => `☣️ *¡El usuario @${user.split`@`[0]} no es bienvenido en este grupo!*`, 
  
//antispam.js
smsNoSpam: "SPAM DE MENSAJES LEVE", 
smsNoSpam1: (m, motive) => `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 30 SEGUNDOS*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam2: "SPAM DE MENSAJES MODERADO", 
smsNoSpam3: (m, motive) => `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 1 MINUTO*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam4: "SPAM DE MENSAJES ALARMANTE", 
smsNoSpam5: (m, motive) => `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 2 MINUTOS*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam6: (mention) => `*${mention} ESTA PROHIBIDO HACER SPAM DE MENSAJES!!*`, 

//antitraba.js
smsAntiTraba: (sender) => `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, 
smsAntiTraba2: '[ ☣️ ] Se detecto un mensaje que contiene muchos caracteres [ ☣️ ]', 
smsAntiTraba3: 'Marcar el chat como leido ✓', 
smsAntiTraba4: (sender, name) => `[ ☣️ ] El número : wa.me/${m.sender.split("@")[0]}\n• Alias : ${name}\n‼️Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos [ ☣️ ]`, 

//_autodetec.js
smsAutodetec1: (usuario, m) => `*» ${usuario}*\n*CAMBIO EL NOMBRE DEL GRUPO*\n\n🪧 *EL NUEVO MOMBRE ES:*\n*${m.messageStubParameters[0]}*`, 
smsAutodetec2: (usuario, groupMetadata) => `*» ${usuario}*\n*ACTUALIZO LA IMAGEN DEL GRUPO:*\n*${groupMetadata.subject}*`, 
smsAutodetec3: (usuario, m) => `*» ${usuario}*\n*ACTUALIZO LA DESCRIPCIÓN DEL GRUPO\n👾 *AQUI TIENES LA NUEVA PARA LEERLA:*`, 
smsAutodetec4: (usuario, m, groupMetadata) => `👾 ${usuario}*\n*HA CAMBIADO LAS REGLAS A: ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINITRADORES' : 'TODOS'} PUEDAN CONFIGURAR ${groupMetadata.subject}*`, 
smsAutodetec5: (groupMetadata, usuario) => `*☣️ SE RESTABLECIÓ EL ENLACE DE EL GRUPO ☣️*`, 
smsAutodetec6: (m) => `UN ADMIN *${m.messageStubParameters[0] == 'on' ? 'CERRO EL GRUPO' : 'ABRIO EL GRUPO'}*\n ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS LOS PARTICIPANTES'} PUEDEN MANDAR MENSAJES*`, 
smsAutodetec7: (m, usuario) =>  `@${m.messageStubParameters[0].split`@`[0]} AH SIDO ASCENDIDO A ADMIN\n\n👾 POR: ${usuario}`, 
smsAutodetec8: (m,  usuario) => `@${m.messageStubParameters[0].split`@`[0]} AH SALIDO DE LA LISTA DE AMDINS\n\n👾 POR: ${usuario}`, 
smsAutodetec9: (usuario, m) => `*» ${usuario}*\n*SE CAMBIÓ LA DURACIÓN DE LOS MENSAJES TEMPORALES*: *@${m.messageStubParameters[0]}*`, 
smsAutodetec10: (usuario, m) => `*» ${usuario}*\nDESACTIVO LOS MENSAJES TEMPORALES`, 

//información
smsinfo: "🦠 *Infórmate sobre las Novedades y recuerda tener la última versión.*", 
name: "NOMBRE/ALIAS", 
user: "USER", 

//Descargar 
smsYT1: "TITULO", 
smsYT2: "AUTOR", 
smsYT3: "LETRA", 
smsYT4: "LINK:", 
smsYT5: "DURACIÓN:", 
smsYT6: "ARTISTA", 
smsYT7: "ALBUM", 
smsYT8: "FECHA", 
smsYT9: "GENERO", 
smsYT9: "SE SUBIO", 
smsYT10: "VISISTAS", 
smsYT11: "TAMAÑO", 
smsYT12: "TIPO", 
smsYT13: "ARTISTAS", 
smsYT14: "DESCRIPCIÓN", 
smsYT15: "SUBIDO", 
smsinsta1: "SEGUIDORES", 
smsinsta2: "SEGUIDOS", 
smsinsta3: "PUBLICACIONES", 
smsinsta4: "BIO", 
smsinsta5: "NUMERO DE ME GUSTA", 

//descarga
smsYtlist: (usedPrefix) => `𝙋𝙐𝙀𝘿𝙀𝙎 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼𝙎 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼:\n${usedPrefix}video <numero>\n${usedPrefix}audio <numero>\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*`, 
smsfb: '𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsfb2: '𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsfb3: '𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙐𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsgit: '𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊. 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽', 
smsgit2: '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝘼𝙍𝘾𝙃𝙄𝙑𝙊, 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 🚀\n𝙎𝙄 𝙉𝙊 𝙇𝙀 𝙇𝙇𝙀𝙂𝘼 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙀𝙎 𝘿𝙀𝘽𝙄𝘿𝙊 𝘼 𝙌𝙐𝙀 𝙀𝙇 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝙀𝙎 𝙋𝙀𝙎𝘼𝘿𝙊. 🚀', 
smsInsta: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsInsta2: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼𝙎 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsInsta3: '𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙄𝙉𝙑𝘼́𝙇𝙄𝘿𝙊𝙎 𝙊 𝙎𝙄𝙉 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎', 
smsFire: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀.', 
smsApk: '*ESCRIBA EL NOMBRE DEL APK*', 
smsApk2: '𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉', 
smsApk3: '𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝘿𝙊 𝘼𝙋𝙆𝙎', 
smsApk4: 'EL APK ES MUY PESADO.', 
smsTikTok: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsTikTok1: '𝙁𝙊𝙏𝙊 𝘿𝙀 𝙋𝙀𝙍𝙁𝙄𝙇', 
smsTikTok2: '𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsTikTok3: '𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙋𝙍𝙊𝘾𝙐𝙍𝙀 𝙌𝙐𝙀 𝙀𝙎𝙏𝙀 𝙑𝘼𝙇𝙄𝘿𝙊', 
smsTikTok4: '𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 👾', 
smsTikTok5: (anu) => `*Se ha enviado 1 de ${anu.length} imágenes.* ✅\n_El resto podrá ser visible en el chat privado del bot_ 👾`, 
smsTikTok6: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsSpoti: 'Enviando canción...', 
smsAguarde: (additionalText) => `𝙀𝙉𝙑𝙄𝘼𝘿𝙊 ${additionalText}, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊`, 
smsAud: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝘼𝙐𝘿𝙄𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍', 
smsVid: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsYT: '𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊́ 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 𝙋𝘼𝙍𝘼 𝙀𝙎𝙀 𝙉𝙐́𝙈𝙀𝙍𝙊, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙀𝙉𝙏𝙍𝙀 1 𝙔 𝙀𝙇', 
smsY2: (usedPrefix, command) => `𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙇𝘼 𝘽𝙐́𝙎𝙌𝙐𝙀𝘿𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`, 

//ejemplos
smsMalused: "ESPECIFICA LO QUE QUIERES BUSCAR\nEJEMPLO.\n", 
smsMalused2: 'PON EL NOMBRE DE UN ANIME', 
smsMalused3: 'ESPECIFICS EL NOMBRE DE LA CANCIÓN PARA EXTRAER LA LETRA\nEJEMPLO.', 
smsMalused4: 'ESCRIBE EL NOMBRE DEL VIDEO O CANAL DE YOUTUBE', 
smsMalused4: 'PON EL NOMBRE O TITULO\nEJEMPLO', 
smsMalused5: 'INGRESA EL ENLACE DE FACEBOOK PARA OBTENER EL VIDEO\nEJEMPLO', 
smsMalused6: 'PON EL ENLACE DE GITHUB\nEJEMPLO', 
smsMalused7: '👾 *LA MANERA CORRECTA DE USAR EL COMANDO ES:*\n', 
smsMalused8: `☣️ *USA EL COMANDO COMO ESTE EJEMPLO:*\n`, 
smsMalused9: `🐈 *RESPONDE A UN MENSJA ECON EL COMANDO O USA EL EJEMPLO:*\n`, 

//Error
smsMalError: `\`\`\`☣️ ERROR INESPERADO ☣️\`\`\``, 
smsMalError2: `\`\`\`☣️ HUBO UN INCONVENIENTE ☣️\`\`\`\n`, 
smsMalError3: `\`\`\`ALGO SALIÓ MAL, REPORTA EL COMANDO USANDO:\`\`\`\n`, 

//grupos
smsAdd: 'Hola, soy X-VIRUS que no te asuste mi nombre, soy un hot de WhatsApp, te invitaron a un grupo pero no pude agregarte aquí tienes la invitación:', 
smsAdd2: 'Enviando invitacion a su privado...', 
smsGrup: 'TODOS LOS USUARIOS PUEDEN ESCRIBIR', 
smaGrup2: 'SOLO LOS ADMINS PUEDEN ESCRIBIR', 

//buscadores
buscador: "*RESULTADOS DE:* ", 
buscador2: "CAPITULOS:", 
buscador3: "FORMATO:", 
buscador3: "SE BASA EN:", 
buscador4: "LANZAMIENTO:", 
buscador5: "MIEMBROS:", 
buscador6: "FAVORITOS:", 
buscador7: "CALIFICACIÓN:", 
buscador8: "TRAILER:", 
buscador9: "👾 *ESTO FUE LO QUE ENCONTRE:*", 
buscador10: "NO ENCONTRE LA PELÍCULA", 
buscador11: "SE RECOMIENDA BLOQUEADOR DE ANUNCIOS", 

//convertido
smsconvert: "RESPONDE O ETIQUETA LA IMAGEN", 
smsconvert1: "ESPERE EL RESULTADO, NO AGA SPAM DEL COMANDO", 
smsconvert2: "☣️ ERROR, VERIFICA QUE SE VEA EL ROSTRO DE LS PERSONA", 
smsconvert3: "RESPONDE AL STIKER QUE QUIERAS CONVERTIR EN IMAGEN CON:", 
smsconvert4: "RESPONDE S UN VÍDEO O AUDIO PARA CONVERTIRLO A FORMATO MP3", 
smsconvert5: "NO PUDE DESCARGAR EL VIDEO, INTENTA DE NUEVO", 
smsconvert6: "NO PUDE CONVERTIR A FORMATO MP3, INTENTA DE NUEVO", 
smsconvert7: "RESPONDE AL VIDEO QUE QUIERAS CONVERTIR EN NOTA DE VOZ", 
smsconvert8: "NO PUDE DESCARGAR EL VIDEO, INTENTA DE NUEVO", 
smsconvert9: "NO PUDE CONVERTIR EL AUDIO S NOTA DE VOZ, INTENTA DE MUEVO", 
smsconvert10: "RESPONDE A UNA IMAGEN O VIDEO", 
smsconvert11: "TAMAÑO", 
smsconvert12: "EXPIRACIÓN", 
smsconvert13: "ACORTADO", 
smsconvert14: "RESPONDE AL AUDIO PARA CONVERTIR EN VIDEO", 
smsconvert15: "ESCRIBE EL TEXTO QUE QUIERES QUE LEA\nEJEMOPLO", 
smsconvert16: "RESPONDE SL AUDIO QUE QUIERAS MODIFICAR CON EL COMANDO", 

//herramientas.js
smsAcorta: 'INGRESS EL LINK PARA ACORTAR', 
smsAcorta2: (text) => `👾 SE ACORTO EXITOSAMENTE\n\nENLACE ACORTADO:`, 

//comando +18
smshorny: "INGRESA UN ENLACE VALIDO DE XNXX:", 
smshorny2: "PREPARA EL GANZO, YA SE ESTA ENVIANDO EL VIDEO"
}

export default MID_GB
