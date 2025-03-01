import { StoreApi, UseBoundStore, create } from "zustand";

export type NameStoreType = {
    name:string;
    timer: number | never;
    setName: (newName: string) => void;
}



export type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never


const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}




export const useNameStore = createSelectors(create<NameStoreType>((set) => ({
    name: "",
    timer: 0,
    setName: (newName: string) => set({ name: newName }),
})));


export const globalUpdateName = (userName: string) =>{
    useNameStore.setState({name: userName})
}


// window.setInterval(() => {
//     useNameStore.setState((state: any) => ({timer: state.timer + 1}))
    
// }, 1000)