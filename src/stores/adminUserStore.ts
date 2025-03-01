

import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserState = {

  id: string | null;
  firstname: string | null;
  lastname: string | null;
  token: any | null;
  roles: any | null;
  email: string | null;
  authLogin: any;
  authLogout: () => void;
};

const adminUserStore = create(
  persist<UserState>(
    (set) => ({
      // initial state
      id: null,
      firstname: null,
      lastname: null,
      token: null,
      roles: null,
      email: null,

      // methods for manipulating state
      authLogin: (
        id: string | null,
        firstname: string | null,
        lastname: string | null,
        token: string | null,
        roles: any | null,
        email: string | null
      ) =>
        set((state: any) => ({
          id: id,
          firstname: firstname,
          lastname: lastname,
          token: token,
          roles: roles,
          email: email,
        })),
      authLogout: () =>
        set((state: any) => ({
          id: null,
          firstname: null,
          lastname: null,
          token: null,
          roles: null,
          email: null,
        })),
    }),
    {
      name: "userData", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage sessionStorage' is used
    }
  )
);

export default adminUserStore;