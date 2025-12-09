import { LocalStorage } from '@oleksii-pavlov/storages'
import type { TransactionEntity } from './transaction.entity'

export const transactionsLocalStorage = new LocalStorage<TransactionEntity[]>('entities/transactions')
