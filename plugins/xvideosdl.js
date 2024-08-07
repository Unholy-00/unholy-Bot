import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { conn, args, command, usedPrefix, text }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.adult_xvideosdl

  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${tradutor.texto1} #enable modohorny*`;
  if (!args[0]) throw `${tradutor.texto2} ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`;
  try {
    conn.reply(m.chat, `${tradutor.texto3}`, m);
    const res = await xvideosdl(args[0]);
    conn.sendMessage(m.chat, { document: { url: res.result.url }, mimetype: 'video/mp4', fileName: res.result.title }, { quoted: m });
  } catch (e) {
    throw `${tradutor.texto4}\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`;
  }
};
handler.command = /^(xvideosdl)$/i;
export default handler;

async function xvideosdl(url) {
  return new Promise((resolve, reject) => {
