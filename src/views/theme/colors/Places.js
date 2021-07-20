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
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import axios from "axios";
import {useSelector} from "react-redux";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-hot-toast";
import Typography from '../typography/Typography';

const Places = () => {
  const token = useSelector(state => state.user.token)
  const [places,setPlaces] = useState([]);
  const [placeToEdit, setPlaceToEdit] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState({})
  const [modalDeleteVisible, setModalDeteleVisible] = useState(false);
  
  useEffect(()=>{
    fetchPlaces()
  },[])

  const closeEditModal = () => {
    setPlaceToEdit({});
    fetchPlaces();
    setModalVisible(false);
  };

  const closeDeleteModal = () => {
    setPlaceToDelete({});
    fetchPlaces();
    setModalDeteleVisible(false);
  };

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
      let res = await axios.delete(`${process.env.REACT_APP_API_URI}/speaker/delete/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(res.status === 200){
        toast.success("Acción realizada con exito")
      }
    }catch (e){
      console.log(e)
    }
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
                  <CTableRow key={place._id}>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{place.name}</CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{place.longitude}</CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{place.latitude}</CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center" }}>
                      <audio controls={true} src={(place.sound.startsWith("/upload"))?`${process.env.REACT_APP_URI}${place.sound}`:place.sound} />
                    </CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{place.radius} m</CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center" }}>
                      <CButtonGroup role="group" aria-label="Basic example">
                        <CButton
                          onClick={()=>{
                            setPlaceToDelete(place)
                            setModalDeteleVisible(true)
                          }}
                          className={"text-white"} color="danger">Eliminar</CButton>
                        <CButton 
                          onClick = {()=>{
                            setPlaceToEdit(place);
                            setModalVisible(true);
                          }}
                          className={"text-white"} color="info">Editar</CButton>
                      </CButtonGroup>
                    </CTableDataCell>
                  </CTableRow>
                ))
              }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <CModal 
        visible={modalVisible} size="xl"
        onDismiss={()=> setModalVisible(false)}>
          <CModalHeader onDismiss={()=> closeEditModal()}> 
            <CModalTitle>Editar lugar</CModalTitle> 
          </CModalHeader>
          <CModalBody>
            <Typography place={placeToEdit} edit onClose = {()=> closeEditModal()}/>
          </CModalBody>
      </CModal>

      <CModal 
        visible={modalDeleteVisible} 
        onDismiss={()=> setModalDeteleVisible(false)}>
          <CModalHeader onDismiss={()=> closeDeleteModal()}> 
            <CModalTitle> Eliminar lugar </CModalTitle> 
          </CModalHeader>
          <CModalBody>
              <p> 
                ¿Estás seguro/a de eliminar {placeToDelete.name}? Esta acción es irreversible.
              </p>
          </CModalBody>
          <CModalFooter>
            <CButton 
              onClick={async ()=> {
                await deletePlace(placeToDelete._id); 
                closeDeleteModal();
              } } 
              color = "danger" className={"text-white"}>
              Confirmar
            </CButton>
          </CModalFooter>
      </CModal>
    </>
  )
}

export default Places
