import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CForm,
  CFormControl,
  CFormLabel,
  CFormSelect
} from '@coreui/react'
import CMap from "../widgets/CMap";
import DropZone from "../widgets/DropZone";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';

const NewPlace = ({place = {_id: "", name: "", latitude: 0, longitude: 0, radius: 0}, ...props}) => {
  const token = useSelector((state) => state.user.token)
  const history = useHistory();
  const [types,setTypes] = useState([])
  const [form,setForm] = useState({
    name: place.name || "",
    lat: place.latitude || 0,
    lng: place.longitude || 0,
    radius: place.radius || 1,
    type:place.type?.id
  })
  const [file,setFile] =useState()
  const [speakers,setSpeakers] = useState([])
  useEffect(()=>{
    fetchTypes()
    fetchPlaces()
  },[])
  const fetchTypes=async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/speaker/types`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setTypes(res.data)
    }catch (e) {
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
  const onSubmit=async ()=>{
    try {

      if(form.name!=="" && form.lat!==0 && form.lng!==0 && file && form.radius >= 1 && form.type !==""){
        const fd = new FormData()
        fd.append("name",form.name)
        fd.append("latitude",form.lat)
        fd.append("longitude",form.lng)
        fd.append("type",form.type)
        fd.append("sound",file)
        fd.append("radius", form.radius)

        let res = await axios.post(`${process.env.REACT_APP_API_URI}/speaker/register`,fd,{
          headers:{
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
          }
        })
        if(res.status === 201){
          history.replace("/dashboard")
          if(props.onClose) {
            props.onClose();
          }
        }
      }else {
        throw "Empty fields, please complete the form"
      }
    }catch (e){
      if(e){
        if(e.response){
          throw e.response.data.errors
        }
        throw e.message
      }
      throw "Internal Error, Please try it later"
    }

  };

  const onEdit=async ()=>{
    try {
      const fd = new FormData()
      form.name && fd.append("name",form.name);
      form.lat  && fd.append("latitude",form.lat);
      form.lng  && fd.append("longitude",form.lng);
      form.type && fd.append("type",form.type)
      file      && fd.append("sound",file);
      (form.radius >= 1) && fd.append("radius", form.radius);

      let res = await axios.put(`${process.env.REACT_APP_API_URI}/speaker/update/${place._id}`,fd,{
        headers:{
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`
        }
      })
      if(res.status !== 200){
        throw "Hubo un error al actualizar"
      } else {
        props.onClose()
      }
    }catch (e){
      if(e){
        if(e.response){
          throw e.response.data.errors
        }
        throw e.message
      }
      throw "Internal Error, Please try it later"
    }

  }

  const triggerSubmit=()=>{
    toast.promise(
      props.edit ? onEdit() : onSubmit(),
      {
        loading:"Guardando...",
        success:"Guardado exitosamente",
        error:(e)=>e
      }
    )
  }

  const handleLatLngSet=(lat,lng)=>{
    setForm({
      ...form,
      lat,
      lng
    })
  }
  return (
    <>
      <CCard className="mb-4">
        {props.edit ? <CCardHeader> New speaker </CCardHeader> : <></>}
        <CCardBody>
          <CForm>
            <div className="row">
              <div className={"col-md-12 mb-3"}>
                <CFormLabel htmlFor="place-name">Name: </CFormLabel>
                <CFormControl
                  value={form.name}
                  onChange={event => setForm({...form,name:event.target.value})}
                  type={"text"}
                  id="place-name"
                  placeholder={"Type a speaker name"}
                />
              </div>
              <div className="col-md-12 mt-3">
                <div>Audio source:</div>
                <div className={"mt-3"}>
                  <DropZone setFile={setFile} />
                </div>
              </div>
              <div className="col-md-12 mt-3">
                Pick a ubication
              </div>
              <div className="col-md-8 mt-3 col-sm-12">
                <CContainer>
                  <CMap
                    places={speakers}
                    place={ (props.edit || props.infoModal) && place }
                    onSelect={handleLatLngSet} radius={form.radius}/>
                </CContainer>
              </div>
              <div className="col-md-4">
                <div className="col-md-12 mt-3">
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-lat">Latitude: </CFormLabel>
                    <CFormControl
                      value={form.lat}
                      type={"text"}
                      id="place-lat"
                      readOnly={true}
                    />
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-long">Longitude: </CFormLabel>
                    <CFormControl
                      readOnly={true}
                      value={form.lng}
                      type={"text"}
                      id="place-long"
                    />
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-long">Action radios (meters): </CFormLabel>
                    <CFormControl
                      value={form.radius}
                      onChange={event => setForm({...form,radius: parseFloat(event.target.value) })}
                      type={"number"}
                      min={1}
                      id="place-radius"
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Aproximation function</CFormLabel>
                    <CFormSelect
                      value={form.type}
                      onChange={event => setForm({...form,type:event.target.value})} aria-label="Default select example">
                      <option value={""}>Select a option</option>
                      {
                        types.map((type,i)=>(
                          <option  key={i} value={type.id}>{type.name}</option>
                        ))
                      }
                    </CFormSelect>
                  </div>
                </div>
              </div>

            </div>
            <div className={"d-flex justify-content-end"}>
              <CButton onClick={triggerSubmit}>
                Guardar
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default NewPlace
