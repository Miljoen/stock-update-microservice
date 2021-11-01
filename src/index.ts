require('dotenv').config()

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
    const wsServer = createServer(app)

    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const server = new ApolloServer({ schema })

    await server.start()

    server.applyMiddleware({ app })

    SubscriptionServer.create(
        { schema, execute, subscribe },
        { server: wsServer, path: server.graphqlPath },
    )

    httpServer.listen(process.env.HTTP_PORT, () => {
        console.log(
            `🚀 HTTP server ready at :${process.env.HTTP_PORT}${server.graphqlPath}`,
        )
    })

    wsServer.listen(process.env.WS_PORT, () => console.log(
        `🚀 Websocket server ready at :${process.env.WS_PORT}${server.graphqlPath}`,
    ))
})()
