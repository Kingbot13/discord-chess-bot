require("dotenv").config();
const { REST, SlashCommandBuilder, Routes } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Replies with random chess quote"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

rest
  .put(Routes.applicationCommands(process.env.APP_ID), { body: commands })
  .then((data) =>
    console.log(`successfully registered ${data.length} commands`)
  )
  .catch(console.error());
