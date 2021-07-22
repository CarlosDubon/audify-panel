import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormControl,
  CFormFeedback,
  CFormLabel,
  CRow
} from "@coreui/react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useSelector} from "react-redux";

const EditProfile = (props) => {
  const [data,setData] = useState({})
  const [form,setForm] = useState({
    password:"",
    confirm:""
  })
  const token = useSelector(state => state.user.token)

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData =async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/user/whoami`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res.data)
      setData(res.data)
    }catch (e){
      console.log(e)
      toast.error("Error al obtener datos, intente nuevamente más tarde")
      props.history.replace("/")
    }
  }
  const onSubmit=()=>{
    toast.promise(fetchEdit(),{
      loading:"Actualizando...",
      success:"Credenciales actualizadas",
      error:(e)=>e
    })
  }
  const fetchEdit=async ()=>{
    try {
      if(form.confirm === form.password){
        if(form.password.length > 8 && form.password.length < 32){
          if(form.password.match(/^(?=.*\d)+/)){
            let res = await axios.put(`${process.env.REACT_APP_API_URI/user}`,{
              password:form.password
            },{
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
            if(res.status===200){
              props.history.replace("/")
            }
          }else{
            throw "La contraseña no contiene un numero o una letra como mímino"
          }
        }else {
          throw "La contraseña contiene menos de 8 o mas de 32 caracteres"
        }

      }else {
        throw "Las contraseñas no coinciden"
      }
    }catch (e){
      console.log(e)
      if(e.message){
        throw e.message
      }
      throw e
    }
  }
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Actualizar contraseña</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md={6}>
              <div className={"mb-3"}>
                <h5>Información general:</h5>
              </div>
              <div>
                <div>
                  <b>Correo eléctronico:</b>
                  <p>{data.email}</p>
                </div>
                <div>
                  <b>Nombre de usuario:</b>
                  <p>{data.username}</p>
                </div>
                <div>
                  <b>Role:</b>
                  <p>{data.role}</p>
                </div>
              </div>
            </CCol>
            <CCol md={6}>
              <div className={"mb-3"}>
                <h5>Actualizar contraseña:</h5>
              </div>
              <div>
                <CForm onSubmit={event => event.preventDefault()}>
                  <div className={"mb-3"}>
                    <CFormLabel>Nueva contraseña:</CFormLabel>
                    <CFormControl
                      value={form.password}
                      type={"password"}
                      onChange={event => setForm({...form,password: event.target.value})}
                      placeholder={"Nueva contraseña"} />
                    <CFormFeedback>
                      La contraseña debe contener:
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      Un minímo de 8 caracteres
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      Un maximo de 32 caracteress
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      Un número y una letra
                    </CFormFeedback>
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel>Confirmar contraseña:</CFormLabel>
                    <CFormControl
                      type={"password"}
                      value={form.confirm}
                      onChange={event => setForm({...form,confirm: event.target.value})}
                      placeholder={"Confirmar contraseña"} />
                  </div>
                  <div className={"d-flex justify-content-end"}>
                    <CButton type={"submit"} onClick={onSubmit}>
                      Actualizar
                    </CButton>
                  </div>
                </CForm>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default EditProfile;
