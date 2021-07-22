import React from 'react'

// examples

const Colors = React.lazy(() => import('./views/components/places/Places'))
const Typography = React.lazy(() => import('./views/components/places/NewPlace'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const EditProfile = React.lazy(()=>import("./views/components/profile/EditProfile"))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard ,exact: true },
  { path: '/dashboard/place', name: 'Lugares', component: Colors, exact: true },
  { path: '/dashboard/place/all', name: 'Todos', component: Colors },
  { path: '/dashboard/place/new', name: 'Agregar', component: Typography  },
  { path: '/dashboard/profile', name: 'Perfil', component: EditProfile  },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
]

export default routes
