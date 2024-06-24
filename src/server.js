const { port } = require('./config');
const createApolloServer = require('./graphql');
const createExpressServer = require('./app');

const app = createExpressServer();
const server = createApolloServer();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();
