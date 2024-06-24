const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const os = require('os');
const { ApolloServer, gql } = require('apollo-server-express');


const app = express()
serverConfigs();
const host = process.env.NODE_ENV === 'production' ? os.hostname() : 'localhost';
const port = process.env.PORT || 3000

const authRoute = require("./routes/user");

app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/user", authRoute);

const url = `http://${host}:${port}/`;

app.listen(port, () => console.log(`Server is up in  ${url}`))

// settings for server
function serverConfigs() {
  dotenv.config();
  app.use(express.json({ limit: "1mb" }));
  app.use(
    cors({
      origin: "*",
    })
  );
  return;
}