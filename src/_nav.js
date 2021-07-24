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
    anchor: 'Speaker Management',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Speakers',
    to: '/dashboard/place/all',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'New Speaker',
    to: '/dashboard/place/new',
    icon: <CIcon name="cil-plus" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavTitle',
    anchor: 'User Management',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Users',
    to: '/dashboard/users',
    icon: <CIcon name="cil-people" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'New User',
    to: '/dashboard/users/new',
    icon: <CIcon name="cil-user-follow" customClassName="nav-icon" />,
  },
]

export default _nav
