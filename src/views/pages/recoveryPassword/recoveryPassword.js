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
import Toast from 'react-hot-toast'

const RecoveryPassword = (props) => {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const onSubmit = () => {
    props.history.push("/")
    Toast.success("Email sended")
  }
  useEffect(()=>{
    console.log(props.history.location.search.replace("?t=",""))
  },[])
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
