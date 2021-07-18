import React, {useEffect, useState} from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'
import axios from "axios";
import {useSelector} from "react-redux";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-hot-toast";

const Places = () => {
  const token = useSelector(state => state.user.token)
  const [places,setPlaces] = useState([])
  useEffect(()=>{
    fetchPlaces()
  },[])

  const fetchPlaces=async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/speaker`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      setPlaces(res.data)
    }catch (e){

    }
  }
  const deletePlace=async (id)=>{
    try {
      let res = await axios.delete(`${process.env.REACT_APP_API_URI}/speaker/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(res.status === 200){
        fetchPlaces()
        toast.success("Acción realizada con exito")
      }
    }catch (e){
      console.log(e)
    }
  }
  const showDeleteConfirmation=(id)=>{
    confirmAlert({
      title:"¿Estás seguro de eliminar este lugar?",
      message:"Esta acción no se puede deshacer.",
      buttons:[{
        label:"Confirmar",
        onClick: ()=>deletePlace(id)
      },{
        label:"Cancelar"
      }]
    })
  }
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Todos los lugares</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Longitud</CTableHeaderCell>
                <CTableHeaderCell>Latitud</CTableHeaderCell>
                <CTableHeaderCell>Audio</CTableHeaderCell>
                <CTableHeaderCell>Radio de acción</CTableHeaderCell>
                <CTableHeaderCell>Opciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                places.map(place=>(
                  <CTableRow>
                    <CTableDataCell>{place.name}</CTableDataCell>
                    <CTableDataCell>{place.longitude}</CTableDataCell>
                    <CTableDataCell>{place.latitude}</CTableDataCell>
                    <CTableDataCell>
                      <audio controls={true} src={(place.sound.startsWith("/upload"))?`${process.env.REACT_APP_URI}${place.sound}`:place.sound} />
                    </CTableDataCell>
                    <CTableDataCell>{place.radius}</CTableDataCell>
                    <CTableDataCell>
                      <CButtonGroup role="group" aria-label="Basic example">
                        <CButton
                          onClick={()=>showDeleteConfirmation(place._id)}
                          className={"text-white"} color="danger">Eliminar</CButton>
                        <CButton className={"text-white"} color="info">Editar</CButton>
                      </CButtonGroup>
                    </CTableDataCell>
                  </CTableRow>
                ))
              }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Places
