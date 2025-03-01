import { StoreApi, UseBoundStore, create } from "zustand";

export type userStoreType = {
    firstName: string;
    lastName: string;
    adminToken: string;
    email: string;
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
    const store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (const k of Object.keys(store.getState())) {
      ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }
  
    return store
  }

export const useUserStore = createSelectors(create<userStoreType>((set) => ({
    firstName: '',
    lastName: '',
    adminToken: '',
    email: '',
    setName: (newName: string) => set({ firstName: newName }),
    setAdminToken: (newName: string) => set({ firstName: newName }),
    setLastName: (newName: string) => set({ lastName: newName }),
    setUpdate: (field: string, newName: string) => set({ [field]: newName }),
})));