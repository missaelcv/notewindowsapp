
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/agregar', component: () => import('pages/Agregar.vue') },
      { path: '/historia', component: () => import('pages/Historia.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
