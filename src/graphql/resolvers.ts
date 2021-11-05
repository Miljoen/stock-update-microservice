import { pubSub } from './pub-sub'
import { sendStockUpdate } from './mutations/send-stock-update'
import { SendStockUpdateInput } from './inputs/SendStockUpdateInput'
import { Context } from 'vm'
import { AuthenticationError } from 'apollo-server-express'

export const resolvers = {
    Mutation: {
        sendStockUpdate(
            _: undefined,
            input: SendStockUpdateInput,
            context: Context,
        ) {
            if (context.authScope !== process.env.AUTHENTICATION) {
                throw new AuthenticationError('Unauthenticated')
            }

            return sendStockUpdate(input.input)
        },
    },
    Subscription: {
        stockUpdated: {
            subscribe: () => pubSub.asyncIterator(['STOCK_UPDATED']),
        },
    },
}
