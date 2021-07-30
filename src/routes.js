import React from 'react'

// examples

const Colors = React.lazy(() => import('./views/components/places/Places'))
const Typography = React.lazy(() => import('./views/components/places/NewPlace'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const EditProfile = React.lazy(()=>import("./views/components/profile/EditProfile"))
const Users = React.lazy(()=>import("./views/components/users/Users"))
const NewUser = React.lazy(()=>import("./views/components/users/NewUser"))
const routes = [
  { path: process.env.REACT_APP_BASEPATH+'/', exact: true, name: 'Home' },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard', name: 'Dashboard', component: Dashboard ,exact: true },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/place', name: 'Lugares', component: Colors, exact: true },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/place/all', name: 'Speakers', component: Colors },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/place/new', name: 'Add new speaker', component: Typography  },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/profile', name: 'Profile', component: EditProfile  },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/users', name: 'Users', component: Users, exact: true },
  { path: process.env.REACT_APP_BASEPATH+'/dashboard/users/new', name: 'New user', component: NewUser  },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
]

export default routes
