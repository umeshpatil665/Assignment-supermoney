import { Dispatch, SetStateAction } from 'react'

export type ID = undefined | null | number

export type PaginationState = {
  page?: number
  items_per_page?: 20 | 30 | 50 | 100
  links?: Array<{ label: string; active: boolean; url: string | null; page: number | null }>
  total?: number
  from?: string
  to?: string,
  total_records?: string,
  last_page?: string
}

export type SortState = {
  sort?: string
  order?: 'asc' | 'desc'
}

export type FilterState = {
  filter?: any
}

export type f_keyState = {
  _fkey?: any
}

export type _levelState = {
  _level?: any
}

export type name = {
  name?: any
}

export type OtherState = {
  other?: any
}

export type fState = {
  f?: any
}

export type qState = {
  q?: any
}

export type SearchState = {
  search?: string
}

export type Response<T> = {
  data?: T
  payload?: {
    message?: string
    errors?: {
      [key: string]: Array<string>
    }
    pagination?: PaginationState
  }
}

export type QueryState = PaginationState & SortState & FilterState & name & f_keyState & _levelState & SearchState & OtherState & fState & qState

export type QueryRequestContextProps = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void,
  updateFilter?: (updates: Partial<any>) => void,
  updateF?: (updates: Partial<any>) => void,
  updateQ?: (updates: Partial<any>) => void,
}

export const initialQueryState: QueryState = {
  page: 1,
  items_per_page: 20,
}

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {

  },
  updateFilter: () => {

  },
}

export interface queryStateReducerAction {
  type: string;
  payload: any;
}

export enum queryStateReducersActions {
  UPDATE_FILTER = 'UPDATE_FILTER',
  UPDATE_F = 'UPDATE_F',
  UPDATE_Q = 'UPDATE_Q',
}

export const queryStateReducer = (state: QueryState, action: queryStateReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case queryStateReducersActions.UPDATE_FILTER:
      let filterState = { ...state.filter, ...payload }
      return {
        ...state,
        filter: filterState,
      };
    case queryStateReducersActions.UPDATE_F:
      let _FState = { ...state.f, ...payload }
      return {
        ...state,
        f: _FState,
      };
      case queryStateReducersActions.UPDATE_Q:
      let _QState = {  ...payload }
  
      return {
        ...state,
        q: _QState,
      };

      
    default:
      return state;
  }
}


export type QueryResponseContextProps<T> = {
  response?: Response<Array<T>> | undefined
  refetch: () => void
  isLoading: boolean
  query: string,
  error?: any | undefined,
  isError?: boolean | undefined,
  message?: string | undefined,
  isRefetchError?: boolean | undefined,
  status?: any | undefined
}

export const initialQueryResponse = { refetch: () => { }, isLoading: false, query: '' }

export type ListViewContextProps = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
}

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => { },
  onSelectAll: () => { },
  clearSelected: () => { },
  setItemIdForUpdate: () => { },
  isAllSelected: false,
  disabled: false,
}
