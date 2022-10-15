require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const quotes = require("./quotesArray");

// create new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// once ready, run this code a single time
client.once("ready", () => {
  console.log("ready");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;
  if (commandName === "quote") {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const message = `"${quote.quote}" 
    - ${quote.author}`;
    await interaction.reply(message);
  }
});

client.login(process.env.BOT_TOKEN);
