import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const { replace: pushRoute } = useHistory();

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute?.name
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes),
        active: index + 1 === array.length ? true : false,
      })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation);

  const manageRedirect = (e, route) => {
    e.preventDefault();
    pushRoute(route);
  }

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem 
        onClick={(e)=> {manageRedirect(e, "/")}}
        href={process.env.REACT_APP_BASEPATH + "/"}>Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            onClick={(e)=> { breadcrumb.active || manageRedirect(e, breadcrumb.pathname)}}
            {...(breadcrumb.active ? { active: true } : { href:process.env.REACT_APP_BASEPATH + breadcrumb.pathname })}
            key={index}>
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
