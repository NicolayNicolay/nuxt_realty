export default defineNuxtPlugin(async () => {
  // Получаем текущую авторизацию пользователя для последующей проверки доступа
  const { checkAuth } = useAuth()
  await checkAuth()
})
