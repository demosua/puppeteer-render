require('dotenv').config();
const express = require("express");
const { Telegraf } = require('telegraf');
const connectDB = require('./src/db');
const User = require('./src/models/User');
const Queue = require('./src/models/Queue');
const app = express();
const { scrapeLogic } = require("./src/scrapeLogic");


const bot = new TelegramBot(process.env.BOT_TOKEN);
const webhookURL = `https://puppeteer-render-z3go.onrender.com/bot${process.env.BOT_TOKEN}`;
bot.telegram.setWebhook(webhookURL);

const PORT = process.env.PORT || 4000;
connectDB();

app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`));

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

bot.start((ctx) => ctx.reply('Привіт! Бот на вебхуках запущено.'));