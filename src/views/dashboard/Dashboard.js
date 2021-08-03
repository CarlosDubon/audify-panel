import React, {lazy, useEffect, useState} from 'react'

import {
  CCard,
  CCardBody,
  CModal,
  CModalHeader,
  CModalBody
} from '@coreui/react'
import {useSelector,useDispatch} from "react-redux";
import CMap from '../components/widgets/CMap.js';
import axios from "axios";
import NewPlace from '../components/places/NewPlace.js';
import toast from 'react-hot-toast';

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))

const Dashboard = (props) => {
  const token = useSelector((state) => state.user.token);
  const [userCount,setUserCount]=useState(0);
  const [adminCount,setAdminCount]=useState(0);
  const [speakers,setSpeakers]=useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()

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
      if(e.response){
        if(e.response.status === 403){
          toast.error("Su sesión a expirado")
        }
        if(e.response.status === 500){
          toast.error("El servicio no se encuentra disponible.")
        }
        dispatch({ type: 'update_user',token:null })
        props.history.replace("/")
      }

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
      console.log(e)
    }
  }

  const onSelectPlaceHandler = (lat, lng) =>{
    setSelectedPlace({
      latitude: lat,
      longitude: lng,
    })
  } 

  const closeModal = () => {
    setSelectedPlace(null);
    fetchPlaces()
    setModalVisible(false)
  }

  return (
    <>
      <WidgetsDropdown users={userCount} admins={adminCount} speakers={speakers.length} />
      <CCard>
        <CCardBody>
          <CMap
            onInfoClick = {()=> {
              setModalVisible(true)
            }}
            dashboard
            onSelect={onSelectPlaceHandler} 
            places={speakers} height={500} />
        </CCardBody>
      </CCard>
      <CModal
        visible={modalVisible} size="xl"
        onDismiss={()=> setModalVisible(false)}>
          <CModalHeader onDismiss={()=> closeModal()}/>
          <CModalBody>
            <NewPlace 
              infoModal
              place={{
                latitude: selectedPlace?.latitude,
                longitude: selectedPlace?.longitude
              }} onClose = {()=> closeModal()}/>
          </CModalBody>
      </CModal>
    </>
  )
}

export default Dashboard
