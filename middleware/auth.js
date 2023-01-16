import { useAuth } from '~/store/auth'
const msg =
  `You can't view this page because you're not logged in...!`

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useAuth()

  if (!user.isLoggedIn) {
    if (process.client) {
      window.alert(msg)
    }
    console.log(msg)

    return navigateTo('/login')
  }
})
