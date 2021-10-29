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
        menuItemId: Int!
        stock: Int!
    }

    input SendStockUpdateInput {
        menuItemId: Int!,
        stock: Int!
    }
`
