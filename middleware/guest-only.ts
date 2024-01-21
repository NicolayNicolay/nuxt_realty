export default defineNuxtRouteMiddleware(async () => {
  const user = await useAuthUser()

  if (user.value) {
    if (process.server) {
      return navigateTo({ name: 'index' })
    }

    return abortNavigation()
  }
})
