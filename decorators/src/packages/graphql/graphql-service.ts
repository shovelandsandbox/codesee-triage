import { ApolloServer } from 'apollo-server-express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { Container as container, Service } from 'typedi'

@Service()
export class GraphQLService {
  async initialize() {
    // build GraphQL schema
    const schema = await buildSchema({
      resolvers: [],
      container,
      emitSchemaFile: true,
      validate: false,
    })

    // create the GraphQL server
    const server = new ApolloServer({
      schema,
      context: {},
      playground: true,
      introspection: true
    })
    server.graphqlPath = '/'
    server.subscriptionsPath = '/'

    return server.getMiddleware()
  }
}
