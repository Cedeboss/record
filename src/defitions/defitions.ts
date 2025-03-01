export type userType = {
    id?: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: "ROLE_SUPER_ADMIN" | "ROLE_ADMIN" | "ROLE_USER" | undefined,
    status?: boolean
}