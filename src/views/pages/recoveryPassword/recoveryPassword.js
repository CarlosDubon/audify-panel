import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormControl,
  CFormFeedback,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Logo from "../../../assets/icons/audify-negativo.png";
import Toast, {toast} from 'react-hot-toast'
import axios from "axios";

const RecoveryPassword = (props) => {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  useEffect(()=>{
    if(props.history.location.search.replace("?t=","")===""){
      props.history.push("/")
    }
  },[])
  const onSubmit=()=>{
    toast.promise(fetchEdit(),{
      loading:"Proccesing...",
      success:"Password recovered",
      error:(e)=>e
    })
  }

  const fetchEdit=async ()=>{
    try {
      if(confirm ===  password){
        if(password.length > 8 &&   password.length < 32){
          if(password.match(/^(?=.*\d)+/)){
            const params = new URLSearchParams(props.history.location.search);
            let res = await axios.post(`${process.env.REACT_APP_API_URI}/auth/password-recovery`,{
              password:password,
              token: params.get("t")
            })
            if(res.status===200){
              props.history.replace("/")
            }
          }else{
            throw "Password needs at least a letter and number"
          }
        }else {
          throw "Password length needs at least 8 characters"
        }

      }else {
        throw "Password not match"
      }
    }catch (e){
      console.log(e)
      if(e.response){
        if(e.response.status===400){
          props.history.replace("/")
          throw "Expired"
        }
      }
      if(e.message){
        throw e.message
      }
      throw e
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e) => e.preventDefault()}>
                    <h1>Password recovery</h1>
                    <p className="text-medium-emphasis">Enter your new passwords</p>
                    <CInputGroup>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked"/>
                      </CInputGroupText>
                      <CFormControl
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type={"password"}
                        placeholder="Password"/>
                    </CInputGroup>
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
                    <CInputGroup className="mb-4 mt-3">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked"/>
                      </CInputGroupText>
                      <CFormControl
                        value={confirm}
                        onChange={event => setConfirm(event.target.value)}
                        type="password"
                        placeholder="Confirm password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <CButton onClick={onSubmit} type={"submit"} color="primary" className="px-4">
                          Change password
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center d-flex justify-content-center">
                  <div className={"col-md-6"}>
                    <img style={{width: "100%"}} src={Logo}/>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>

      </CContainer>
    </div>
  );
};

export default RecoveryPassword;
