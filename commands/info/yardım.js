const Discord = require('discord.js')
exports.run = function(client, message) {

    const dcs = new Discord.EmbedBuilder()
    .setColor('fff00ff')
    .setDescription(`Botta in total **${client.commands.size}** Number of Commands Found! `)
    .setTimestamp()
    .addField('Command 1 ','Description')
    .addField('Command 2  ','Description')
.setThumbnail(client.user.avatarURL())
    message.channel.send({embeds: [dcs]})
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'help'