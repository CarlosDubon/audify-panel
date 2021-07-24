import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import Logo from '../../../assets/icons/audify-negativo.png'
const Login = (props) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(token){
      props.history.replace("/dashboard")
    }
  },[])

  const makeRequest=async()=>{
    try {
      if(user!=="" && password !==""){
        let res = await axios.post(`${process.env.REACT_APP_API_URI}/auth/signin`,{
          username:user,
          password
        })

        if(res.status === 200){
          dispatch({ type: 'update_user', token: res.data.token })
          props.history.push("/dashboard")
        }


      }else{
        throw "Campos vacíos, por favor verificar los campos."
      }
    }catch (e){
      if(e.response){
        if(e.response.status === 404 || e.response.status === 401){
          throw "Credenciales invalidas"
        }
      }
      throw e
    }
  }
  const triggerReq=()=>{
    toast.promise(makeRequest(),{
      error:(e)=>e,
      success:"Bienvenido!",
      loading:"Verificando datos..."
    })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e)=>e.preventDefault()}>
                    <h1>Audify</h1>
                    <p className="text-medium-emphasis">Login with your credentials</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                      <CFormControl
                        onChange={event => setUser(event.target.value)}
                        placeholder="Username"
                        autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                      <CFormControl
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type={"submit"} onClick={triggerReq} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>

                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div >
                    <img style={{width:"50%"}}  src={Logo} />
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
