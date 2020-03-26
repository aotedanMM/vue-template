import router from './router'
router.beforeEach((to, from, next) => {
  const flag = localStorage.getItem('userName')
  const whiteList = ['/login']
  if (flag) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
