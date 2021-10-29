import { StockUpdate } from '../../types/StockUpdate'
import { pubSub } from '../pub-sub'

export const sendStockUpdate = async (stockUpdate: StockUpdate) => {
    await pubSub.publish('STOCK_UPDATED', {
        stockUpdated: stockUpdate,
    })

    return 'Broadcast complete'
}
