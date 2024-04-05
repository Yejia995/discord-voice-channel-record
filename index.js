import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('voiceStateUpdate', (old_state, new_state) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const channel_id = process.env.CHANNEL_ID;
  const member_id = new_state.member.id;

  let log_message;

  if (!old_state.channel && new_state.channel) {
    log_message = `<t:${timestamp}:T> <@${member_id}> :wheelchair: <#${new_state.channel.id}> :mens:`;
  } else if (old_state.channel && !new_state.channel) {
    log_message = `<t:${timestamp}:T> <@${member_id}> :mens: <#${old_state.channel.id}> :wheelchair:`;
  } else if (old_state.channel?.id !== new_state.channel?.id) {
    log_message = `<t:${timestamp}:T> <@${member_id}> :mens: <#${old_state.channel.id}> :wheelchair: <#${new_state.channel.id}> :mens:`;
  }

  if (log_message) {
    client.channels.cache.get(channel_id).send(log_message).catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);
