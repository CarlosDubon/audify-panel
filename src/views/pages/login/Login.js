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
  CInputGroupText, CLink, CModal, CModalBody, CModalHeader,
  CRow,
  CAlert, CFormLabel
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

  const [modal,setModal]=useState(null)
  const [email,setEmail]=useState("")
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
          if(res.data.role === "ADMIN") {
            dispatch({type: 'update_user', token: res.data.token})
            props.history.push("/dashboard")
          }else{
            throw "Does not have admin permissions"
          }
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
      if(e.message){
        throw e.message
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
  const onRecovery=async ()=>{
    if(email!==""){
      try {
        let res = await axios.post(`${process.env.REACT_APP_API_URI}/auth/forgot-password`,{
          username:email
        })
        if(res.status===200){
          toast.success("Email sent")
          setModal(false)
          setEmail("")
        }
      }catch (e){
        toast.error("Internal error, try again later")
      }
    }else {
      toast.error("Empy field")
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
                      <CCol xs={6}>
                        <CLink
                          onClick={()=>setModal(true)}
                          style={{
                          cursor:"pointer"
                        }}>Forgot your password?</CLink>
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
        <CModal
          onDismiss={()=> {
            setEmail("")
            setModal(false)
          }}
          visible={modal}>
          <CModalHeader onDismiss={()=> {
            setModal(false)
            setEmail("")
          }}>
            Forgot password?
          </CModalHeader>
          <CModalBody>
            <CAlert color="dark">Enter your user or email and we will send you a email with reset password instructions!</CAlert>
            <CForm onSubmit={event => event.preventDefault()}>
              <div className="mb-3">
                <CFormLabel>Username / email</CFormLabel>
                <CFormControl
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  placeholder={"Type your username or email"} />
              </div>
              <div className="d-flex justify-content-end">
                <CButton onClick={onRecovery } type={"submit"}>
                  Recovery
                </CButton>
              </div>
            </CForm>
          </CModalBody>
        </CModal>
      </CContainer>
    </div>
  )
}

export default Login
