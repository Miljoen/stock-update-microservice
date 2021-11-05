require('dotenv').config()

import { Request } from 'express/ts4.0'
import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'

const { createServer } = require('http')
const express = require('express')
const { execute, subscribe } = require('graphql')
const { ApolloServer } = require('apollo-server-express')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { makeExecutableSchema } = require('@graphql-tools/schema')

;(async () => {
    const app = express()
    const httpServer = createServer(app)

    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const server = new ApolloServer({
        schema,
        context: ({ req }: { req: Request }) => ({
            authScope: req.headers.authorization,
        }),
    })

    await server.start()

    server.applyMiddleware({ app })

    SubscriptionServer.create(
        { schema, execute, subscribe },
        { server: httpServer, path: server.graphqlPath },
    )

    httpServer.listen(process.env.HTTP_PORT, () => {
        console.log(`🚀 HTTP server ready at :${process.env.HTTP_PORT}${server.graphqlPath}`)
        console.log(`🚀 Websocket server ready at :${process.env.HTTP_PORT}${server.graphqlPath}`)
    })
})()
