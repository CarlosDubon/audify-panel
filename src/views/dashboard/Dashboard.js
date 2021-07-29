import React, {lazy, useEffect, useState} from 'react'

import {
  CCard,
  CCardBody,
  CContainer
} from '@coreui/react'
import {useSelector} from "react-redux";
import CMap from '../components/widgets/CMap.js';
import axios from "axios";
import {toast} from "react-hot-toast";

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))

const Dashboard = (props) => {
  const token = useSelector((state) => state.user.token)
  const [userCount,setUserCount]=useState(0)
  const [adminCount,setAdminCount]=useState(0)
  const [speakers,setSpeakers]=useState([])
  useEffect(()=>{
    if(!token){
      props.history.replace("/")
    }
  },[])
  useEffect(()=>{
    if(token){
      fetchUsers()
      fetchPlaces()
    }

  },[token])
  const fetchUsers=async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/user/find`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setUserCount(res.data.filter(user=>user.role ==="USER").length)
      setAdminCount(res.data.filter(user=>user.role ==="ADMIN").length)
    }catch (e){
      props.history.replace("/")
      console.log(e)

    }
  }
  const fetchPlaces=async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/speaker`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      setSpeakers(res.data)
    }catch (e){
      props.history.replace("/")

    }
  }

  return (
    <>
      <WidgetsDropdown users={userCount} admins={adminCount} speakers={speakers.length} />
      <CCard>
        <CCardBody>
          <CMap places={speakers} height={500} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
