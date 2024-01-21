import { useAuthUser } from './useAuthUser'

export const useAuth = () => {
  const authUser = useAuthUser()
  const config = useRuntimeConfig()

  const setUser = (user: any) => {
    authUser.value = user
  }

  const setCookie = (cookie: any) => {
    cookie.value = cookie
  }

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    const data: any = await $fetch(config.public.API_BASE_URL + '/api/login', {
      method: 'POST',
      body: {
        email,
        password,
        rememberMe
      }
    })

    setUser(data)

    return authUser
  }

  const logout = async () => {
    await $fetch(config.public.API_BASE_URL + '/api/logout', {
      method: 'POST'
    })

    setUser(null)
  }

  const checkAuth = async () => {
    if (!authUser.value) {
      try {
        const data: any = await useFetch(config.public.API_BASE_URL + '/api/checkAuth', {
          headers: useRequestHeaders(['cookie']) as HeadersInit
        })

        setUser(data.data)
      } catch (error) {
        setCookie(null)
      }
    }

    return authUser
  }

  return {
    login,
    logout,
    checkAuth
  }
}
