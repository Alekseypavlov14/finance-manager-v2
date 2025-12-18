import { type Id } from '@/shared/types/entity'
import { unique } from '@/shared/utils/arrays'
import { create } from 'zustand'

export interface CurrenciesFormState {
  modifyingIds: Id[]
}

export interface CurrenciesFormActions {
  updateModifyingIds: (ids: Id[]) => void
  toggleModifyingId: (id: Id) => void
}

export interface CurrenciesFormStore extends CurrenciesFormState, CurrenciesFormActions {}

export const useCurrenciesFormStore = create<CurrenciesFormStore>(set => ({
  modifyingIds: [],
  updateModifyingIds: (modifyingIds) => set(state => ({ ...state, modifyingIds })),

  toggleModifyingId: (id) => set(state => ({ 
    ...state, 
    modifyingIds: state.modifyingIds.includes(id) 
      ? state.modifyingIds.filter(modifyingId => modifyingId !== id)
      : unique(state.modifyingIds.concat(id)) 
  }))
}))

export const modifyingIdsSelector = (store: CurrenciesFormStore) => store.modifyingIds
export const updateModifyingIdsSelector = (store: CurrenciesFormStore) => store.updateModifyingIds
export const toggleModifyingIdSelector = (store: CurrenciesFormStore) => store.toggleModifyingId
