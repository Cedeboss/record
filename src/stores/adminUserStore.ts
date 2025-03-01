

import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserState = {

  id: string | null;
  firstname: string | null;
  lastname: string | null;
  token: string | null;
  roles: "ROLE_SUPER_ADMIN" | "ROLE_ADMIN" | "ROLE_USER" | undefined;
  email: string | null;
  authLogin: (
    id: string | null,
    firstname: string | null,
    lastname: string | null,
    token: string | null,
    roles: "ROLE_SUPER_ADMIN" | "ROLE_ADMIN" | "ROLE_USER" | undefined,
    email: string | null
  ) => void;
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
      roles: undefined,
      email: null,

      // methods for manipulating state
      authLogin: (
        id: string | null,
        firstname: string | null,
        lastname: string | null,
        token: string | null,
        roles: "ROLE_SUPER_ADMIN" | "ROLE_ADMIN" | "ROLE_USER" | undefined,
        email: string | null
      ) =>
        set(() => ({
          id: id,
          firstname: firstname,
          lastname: lastname,
          token: token,
          roles: roles,
          email: email,
        })),
      authLogout: () =>
        set(() => ({
          id: null,
          firstname: null,
          lastname: null,
          token: null,
          roles: undefined,
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