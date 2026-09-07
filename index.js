require('dotenv').config({path:'../.env'});
const {Client,GatewayIntentBits,REST,Routes,SlashCommandBuilder,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle}=require('discord.js');
const c=new Client({intents:[GatewayIntentBits.Guilds]});
const commands=[new SlashCommandBuilder().setName('painel').setDescription('Abre o painel administrativo da Cloud')].map(x=>x.toJSON());
const rest=new REST({version:'10'}).setToken(process.env.DISCORD_TOKEN);
(async()=>{if(process.env.DISCORD_TOKEN&&process.env.DISCORD_CLIENT_ID)try{await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),{body:commands});console.log('Comandos registrados')}catch(e){console.error(e)}})();
c.once('ready',()=>console.log(`Cloud Bot online como ${c.user.tag}`));
c.on('interactionCreate',async i=>{if(!i.isChatInputCommand()||i.commandName!=='painel')return;
 const e=new EmbedBuilder().setTitle('☁️ Minha Cloud').setDescription('Painel administrativo\n\n👥 Usuários\n🤖 Aplicações\n📦 Planos\n💾 Recursos\n📜 Histórico').setTimestamp();
 const row=new ActionRowBuilder().addComponents(
 new ButtonBuilder().setCustomId('apps').setLabel('Aplicações').setStyle(ButtonStyle.Primary),
 new ButtonBuilder().setCustomId('plans').setLabel('Planos').setStyle(ButtonStyle.Secondary),
 new ButtonBuilder().setCustomId('logs').setLabel('Histórico').setStyle(ButtonStyle.Secondary));
 await i.reply({embeds:[e],components:[row],ephemeral:true});});
c.login(process.env.DISCORD_TOKEN);
