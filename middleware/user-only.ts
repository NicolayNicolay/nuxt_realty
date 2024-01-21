export default defineNuxtRouteMiddleware(async () => {
  const user = await useAuthUser()
  if (!user.value) {
    return navigateTo({ name: 'login' })
  }
})
