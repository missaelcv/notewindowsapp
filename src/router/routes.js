
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ordenar', component: () => import('pages/Ordenar.vue') },
      { path: '/agregar', component: () => import('pages/Agregar.vue') },
      { path: '/herramienta', component: () => import('pages/Herramienta.vue') },

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
