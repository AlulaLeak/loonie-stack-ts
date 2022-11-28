import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: String!
    name: String
    email: String
    emailVerified: String
    image: String
    accounts: Account
    sessions: Session
  }
  type Session {
    id: String!
    sessionToken: String
    userId: String
    expires: String
    user: User
  }
  type Account {
    id: String!
    userId: String
    type: String
    provider: String
    providerAccountId: String
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    user: User
  }
  type Query {
    getUserById(id: String): User
    getUserByName(name: String): User
  }
`;

export default typeDefs;
