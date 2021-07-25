import React, {lazy, useEffect, useState} from 'react'

import {
  CCard,
  CCardBody,
  CContainer
} from '@coreui/react'
import {useSelector} from "react-redux";
import CMap from '../components/widgets/CMap.js';

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))

const Dashboard = (props) => {
  const token = useSelector((state) => state.user.token)
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(()=>{
    if(!token){
      props.history.replace("/")
    }
  },[])

  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CMap height={500} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
