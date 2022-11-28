import { ApolloServer } from "apollo-server-micro";
import resolvers from "../../../../graphql/resolvers";
import typeDefs from "../../../../graphql/TypeDefs";
import Cors from "micro-cors";
const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};
const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
