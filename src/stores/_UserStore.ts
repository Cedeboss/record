import { StoreApi, UseBoundStore, create } from "zustand";

export type NameStoreType = {
    firstName: string;
    lastName: string;
    email: string;
    objet: string;
    message: string;
    timer: number | never;
    setName: (newName: string) => void;
    setLastName: (newName: string) => void;
    setUpdate: (nom: string, newName: string) => void;

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




export const useUserStore = createSelectors(create<NameStoreType>((set) => ({
    firstName: '',
    lastName: '',
    email: '',
    objet: '',
    message: '',
    timer: 0,
    setName: (newName: string) => set({ firstName: newName }),
    setLastName: (newName: string) => set({ lastName: newName }),
    setUpdate: (field: string, newName: any) => set({ [field]: newName }),
})));


export const globalUpdateName = (object: any) =>{
const obj = object[0]
    useUserStore.setState({firstName: obj.name})
    useUserStore.setState({lastName: obj.lastName})
}
export const userUpdate = (propriete: any, object: any) =>{

    useUserStore.setState({[propriete]: object})
    // useUserStore.setState({name: object.lastName})
}


// window.setInterval(() => {
//     useUserStore.setState((state: any) => ({timer: state.timer + 1}))
    
// }, 1000)