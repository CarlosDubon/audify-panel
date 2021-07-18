import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Mantenimiento de lugares',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Ver lugares',
    to: '/dashboard/place/all',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Agregar Lugar',
    to: '/dashboard/place/new',
    icon: <CIcon name="cil-plus" customClassName="nav-icon" />,
  },
]

export default _nav
