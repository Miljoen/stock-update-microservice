const { gql } = require('apollo-server-express')

export const typeDefs = gql`
    type Query {
        requiredForSchema: Boolean
    }
    
    type Mutation {
        sendStockUpdate(input: SendStockUpdateInput!): String!
    }

    type Subscription {
        stockUpdated: StockUpdate!
    }

    type StockUpdate {
        menuItemStockId: Int!
        stock: Int!
        stockReserved: Int!
    }

    input SendStockUpdateInput {
        menuItemStockId: Int!
        stock: Int!
        stockReserved: Int!
    }
`
