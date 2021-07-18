import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CContainer, CForm, CFormControl, CFormLabel} from '@coreui/react'
import CMap from "../../components/widgets/CMap";
import DropZone from "../../components/widgets/DropZone";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useSelector} from "react-redux";

const Typography = (props) => {
  const token = useSelector((state) => state.user.token)

  const [form,setForm] = useState({
    name:"",
    lat:"",
    lng:"",
    radius:0
  })
  const [file,setFile] =useState()

  const onSubmit=async ()=>{
    try {

      if(form.name!=="" && form.lat!=="" && form.lng!=="" && file && form.radius > 1){
        const fd = new FormData()
        fd.append("name",form.name)
        fd.append("latitude",form.lat)
        fd.append("longitude",form.lng)
        fd.append("sound",file)
        fd.append("radius", form.radius)

        let res = await axios.post(`${process.env.REACT_APP_API_URI}/speaker/register`,fd,{
          headers:{
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
          }
        })
        if(res.status === 201){
          props.history.replace("/dashboard")
        }
      }else {
        console.log(form)
        throw "Existen campos vacíos, por favor llena todo el formulario"
      }
    }catch (e){
      if(e){
        throw e
      }
      throw "Error interno, por favor intente más tarde."
    }

  }

  const triggerSubmit=()=>{
    toast.promise(
      onSubmit(),
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
        <CCardHeader> Agregar lugar </CCardHeader>
        <CCardBody>
          <CForm>
            <div className="row">
              <div className={"col-md-12 mb-3"}>
                <CFormLabel htmlFor="place-name">Nombre: </CFormLabel>
                <CFormControl
                  value={form.name}
                  onChange={event => setForm({...form,name:event.target.value})}
                  type={"text"}
                  id="place-name"
                  placeholder={"Ingresar nombre del lugar"}
                />
              </div>
              <div className="col-md-12 mt-3">
                <div>Selecciona el sonido a reproducir:</div>
                <div className={"mt-3"}>
                  <DropZone setFile={setFile} />
                </div>
              </div>
              <div className="col-md-12 mt-3">
                Selecciona la ubicación:
              </div>
              <div className="col-md-8 mt-3">
                <CContainer>
                  <CMap onSelect={handleLatLngSet}/>
                </CContainer>
              </div>
              <div className="col-md-4">
                <div className="col-md-12 mt-3">
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-lat">Latitud: </CFormLabel>
                    <CFormControl
                      value={form.lat}
                      type={"text"}
                      id="place-lat"
                      readOnly={true}
                    />
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-long">Longitud: </CFormLabel>
                    <CFormControl
                      readOnly={true}
                      value={form.lng}
                      type={"text"}
                      id="place-long"
                    />
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel htmlFor="place-long">Radio de acción (metros): </CFormLabel>
                    <CFormControl
                      value={form.radius}
                      onChange={event => setForm({...form,radius: parseFloat(event.target.value) })}
                      type={"number"}
                      min={1}
                      id="place-long"
                    />
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

export default Typography
