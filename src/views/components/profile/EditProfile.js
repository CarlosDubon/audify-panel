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
      setData(res.data)
    }catch (e){
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
            let res = await axios.patch(`${process.env.REACT_APP_API_URI}/user/update/password`,{
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
            throw "The password doesn't have at least one letter and one number"
          }
        }else {
          throw "The password length is not between 8 and 32 characters"
        }

      }else {
        throw "Passwords doesn't match"
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
        <CCardHeader>User info</CCardHeader>
        <CCardBody>
          <CRow className={"d-flex justify-content-center"}>
            <CCol md={4}>
              <div className={"mb-3"}>
                <h5>General information:</h5>
              </div>
              <div>
                <div>
                  <b>Email:</b>
                  <p>{data.email}</p>
                </div>
                <div>
                  <b>Username:</b>
                  <p>{data.username}</p>
                </div>
                <div>
                  <b>Role:</b>
                  <p>{data.role? (data.role.charAt(0).toUpperCase() + data.role.slice(1).toLowerCase()) : ""}</p>
                </div>
              </div>
            </CCol>
            <CCol md={4}>
              <div className={"mb-3"}>
                <h5>Update password:</h5>
              </div>
              <div>
                <CForm onSubmit={event => event.preventDefault()}>
                  <div className={"mb-3"}>
                    <CFormLabel>New password:</CFormLabel>
                    <CFormControl
                      value={form.password}
                      type={"password"}
                      onChange={event => setForm({...form,password: event.target.value})}
                      placeholder={"Nueva contraseña"} />
                    <CFormFeedback>
                      Password must have:
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      At least 8 characters
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      Least of 32 characters
                    </CFormFeedback>
                    <CFormFeedback className={"small"}>
                      One number and one letter
                    </CFormFeedback>
                  </div>
                  <div className={"mb-3"}>
                    <CFormLabel>Password confirmation:</CFormLabel>
                    <CFormControl
                      type={"password"}
                      value={form.confirm}
                      onChange={event => setForm({...form,confirm: event.target.value})}
                      placeholder={"Confirmar contraseña"} />
                  </div>
                  <div className={"d-flex justify-content-end"}>
                    <CButton type={"submit"} onClick={onSubmit}>
                      Update
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
