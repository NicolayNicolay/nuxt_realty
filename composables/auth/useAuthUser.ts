interface AuthUser {
  id: number,
  email: string,
  name: string
}

export const useAuthUser = () => {
  return useState<AuthUser | null>('user', () => null)
}
