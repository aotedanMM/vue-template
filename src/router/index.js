import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login'),
      hidden: true
    },
    {
      path: '/404',
      name: 'Page404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    },
    {
      path: '/',
      component: () => import('@/views/layout'),
      redirect: '/home',
      hidden: true,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '/monitor',
      component: () => import('@/views/layout'),
      meta: {
        title: '实时监管',
        icon: ''
      },
      children: [
        {
          path: '/monitor',
          name: 'Monitor',
          component: () => import('@/views/monitor/index')
        }
      ]
    },

    // 信息发布
    {
      path: '/infoRelease',
      component: () => import('@/views/layout'),
      meta: {
        title: '信息发布',
        icon: ''
      },
      children: [
        {
          path: '/infoRelease',
          name: 'InfoRelease',
          component: () => import('@/views/infoRelease/index')
        }

      ]
    },
    // 语音广播
    {
      path: '/voiceBroadcast',
      meta: {
        title: '语音广播',
        icon: ''
      },
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/voiceBroadcast',
          name: 'VoiceBroadcast',
          component: () => import('@/views/voiceBroadcast/index')
        }
      ]
    },
    // 应急指挥
    {
      path: '/emeCommand',
      component: () => import('@/views/layout'),
      meta: {
        title: '应急指挥',
        icon: ''
      },
      children: [
        {
          path: '/emeCommand',
          name: 'EmeCommand',
          component: () => import('@/views/emeCommand/index')
        }
      ]
    },
    // 历史查询
    {
      path: '/historyQuery',
      component: () => import('@/views/layout'),
      meta: {
        title: '历史查询',
        icon: ''
      },
      children: [
        {
          path: '/historyQuery',
          name: 'HistoryQuery',
          component: () => import('@/views/historyQuery/index')
        }
      ]
    },
    // 设备管理
    {
      path: '/equipManage',
      component: () => import('@/views/layout'),
      meta: {
        title: '设备管理',
        icon: ''
      },
      children: [
        {
          path: '/equipManage',
          name: 'EquipManage',
          component: () => import('@/views/equipManage/index')
        }
      ]
    },
    // 系统设置
    {
      path: '/systemSet',
      component: () => import('@/views/layout'),
      meta: {
        title: '系统设置',
        icon: ''
      },
      children: [
        {
          path: '/systemSet',
          name: 'SystemSet',
          component: () => import('@/views/systemSet/index')
        }
      ]
    },
  ]
})
