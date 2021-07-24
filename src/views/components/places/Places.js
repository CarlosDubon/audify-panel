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
  CModalFooter, CFormCheck
} from '@coreui/react'
import axios from "axios";
import {useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import NewPlace from './NewPlace';
import SearchControl from '../forms/search-control/SearchControl';

const Places = () => {
  const token = useSelector(state => state.user.token)
  const [places,setPlaces] = useState([]);
  const [placeToEdit, setPlaceToEdit] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState({})
  const [modalDeleteVisible, setModalDeteleVisible] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [selectedPlaces,setSelectedPlaces] = useState([])
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
  const handleSelectAll=(e) => {
    if(e.target.checked === true){
      setSelectedPlaces(places.map(place => place._id))
    }else{
      setSelectedPlaces([])
    }

    setDeleteAll(e.target.checked)
  }
  const handleSelect=(e,id)=>{
    if(e.target.checked === true){
      setSelectedPlaces([...selectedPlaces,id])
    }else{

      setSelectedPlaces(selectedPlaces.filter(p=>p!==id))
    }
  }
  const handleSearch=(value)=> {
    setSearchValue(value);
  }
  const onDeleteMany=()=>{
    toast.promise(fetchDeleteMany(),{
      loading:"Procesando ...",
      success:"Registros eliminados con exito",
      error:(e)=>e
    })
  }
  const fetchDeleteMany=async ()=>{
    try {
      let res = await axios.delete(`${process.env.REACT_APP_API_URI}/speaker/delete/many`,{
        headers:{
          Authorization:`Bearer ${token}`
        },
        data: {speakers:selectedPlaces}
      })
      if(res.status === 200){
        fetchPlaces()
        setDeleteAll(false)
        setSelectedPlaces(selectedPlaces.filter(function (e) {
          return this.indexOf(e) < 0
        },selectedPlaces))
      }
    }catch (e){
      if(e.response){
        throw e.response.data.errors
      }
      throw e.message
    }
  }

  const filteredPlaces = places.filter(place => place.name.includes(searchValue));

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className={"d-flex justify-content-between align-items-center"}>
          Speaker's list
          <div style={{display:"flex"}}>
          {selectedPlaces.length > 0 &&(
            <CButton
              onClick={onDeleteMany}
              size={"sm"} className={"text-white"} color={"danger"}>Delete selected</CButton>
          )}
          <SearchControl onSubmit={handleSearch}/>
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>
                <CFormCheck
                    checked={deleteAll}
                    style={Style.cell}
                    onChange={handleSelectAll}
                    id="All" />
                </CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Longitude</CTableHeaderCell>
                <CTableHeaderCell>Latitude</CTableHeaderCell>
                <CTableHeaderCell>Audio</CTableHeaderCell>
                <CTableHeaderCell>Radius</CTableHeaderCell>
                <CTableHeaderCell>Type</CTableHeaderCell>
                <CTableHeaderCell>Options</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                filteredPlaces.map(place=>(
                  <CTableRow key={place._id}>
                    <CTableDataCell style={Style.cell} >
                      <CFormCheck
                        checked={selectedPlaces.findIndex(p => p === place._id) < 0 ? false : true}
                        onChange={(e)=>handleSelect(e,place._id)}
                        id={place._id} />
                    </CTableDataCell>
                    <CTableDataCell style={Style.cell}>{place.name}</CTableDataCell>
                    <CTableDataCell style={Style.cell}>{place.longitude}</CTableDataCell>
                    <CTableDataCell style={Style.cell}>{place.latitude}</CTableDataCell>
                    <CTableDataCell style={{ verticalAlign: "middle", textAlign: "center" }}>
                      <audio controls={true} src={(place.sound.startsWith("/upload"))?`${process.env.REACT_APP_URI}${place.sound}`:place.sound} />
                    </CTableDataCell>
                    <CTableDataCell style={Style.cell}>{place.radius} m</CTableDataCell>
                    <CTableDataCell style={Style.cell}>{place.type.name}</CTableDataCell>
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
            <CTableBody>

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
            <NewPlace place={placeToEdit} edit onClose = {()=> closeEditModal()}/>
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

const Style={
  cell:{
    verticalAlign: "middle", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap"
  }
}
export default Places
