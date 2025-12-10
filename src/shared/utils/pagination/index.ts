import { create } from 'zustand'

export const defaultCurrentPage = 0
export const defaultTotalPages = 1

export interface PaginationState {
  currentPage: number
  totalPages: number
}

export interface PaginationActions {
  updateCurrentPage: (currentPage: number) => void
  updateTotalPages: (totalPages: number) => void 
}

export interface PaginationStore extends PaginationState, PaginationActions {}

export function createPaginationStore(initial: Partial<PaginationState> = {}) {
  return create<PaginationStore>(set => ({
    currentPage: initial.currentPage ?? defaultCurrentPage,
    totalPages: initial.totalPages ?? defaultTotalPages,

    updateCurrentPage: (currentPage) => set(state => ({ ...state, currentPage })),
    updateTotalPages: (totalPages) => set(state => ({ ...state, totalPages })),
  }))
}

export const currentPageSelector = (store: PaginationStore) => store.currentPage
export const totalPagesSelector = (store: PaginationStore) => store.totalPages

export const updateCurrentPageSelector = (store: PaginationStore) => store.updateCurrentPage
export const updateTotalPagesSelector = (store: PaginationStore) => store.updateTotalPages
