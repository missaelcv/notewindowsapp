
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '', component: () => import('pages/Index.vue'),
      meta : {
        title : 'Inicio'
      } ,
    },

      { path: '/agregar', component: () => import('pages/Agregar.vue'),
      meta: {
        title : 'Agregar Nota'
      }
     },

      { path: '/historia', component: () => import('pages/Historia.vue'),
      meta: {
          title : 'Historia'
      } },

      { path: '/settings', component: () => import('pages/Settings.vue'),
      meta : {
        title : 'Settings'
      } },

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
