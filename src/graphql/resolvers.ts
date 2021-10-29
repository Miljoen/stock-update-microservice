import { pubSub } from './pub-sub'
import { sendStockUpdate } from './mutations/send-stock-update'
import { SendStockUpdateInput } from './inputs/SendStockUpdateInput'

export const resolvers = {
    Mutation: {
        sendStockUpdate(
            unused: undefined,
            input: SendStockUpdateInput,
        ) {
            console.log(unused)
            return sendStockUpdate(input.input)
        },
    },
    Subscription: {
        stockUpdated: {
            subscribe: () => pubSub.asyncIterator(['STOCK_UPDATED']),
        },
    },
}
