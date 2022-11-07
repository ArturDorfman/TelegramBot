const { Telegraf } = require('telegraf')
require('dotenv').config()
const commands = require('./commands').commands

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name ?? 'stranger'}!`))
bot.help((ctx) => ctx.reply(commands))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))