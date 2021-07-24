import React, {useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CFormControl,
  CFormFeedback,
  CFormLabel
} from "@coreui/react";
import {toast} from "react-hot-toast";
import axios from "axios";

const NewUser = (props) => {
  const [form,setForm] = useState({
    username:"",
    email:"",
    password:"",
    confirm:""
  })
  const fetchNewUser=async ()=>{
    const {email,username,password,confirm} = form
    try {
      if(email!==""&&username!==""&&password!==""&&confirm!==""){
        if(confirm === password){
          if(password.length > 8 && password.length < 32){
            if(password.match(/^(?=.*\d)+/)){
              let res = await axios.post(`${process.env.REACT_APP_API_URI}/auth/signup`,{
                username,
                email,
                password,
              })
              if(res.status===201){
                props.history.replace("/dashboard/users")
              }
            }else{
              throw "Password required at least a numeric and alphabetic character"
            }
          }else {
            throw "Password length is invalid"
          }

        }else {
          throw "Password not match"
        }
      }else {
        throw "Empty fields"
      }
    }catch (e){
      if(e.response){
        throw e.response.data.errors
      }
      if(e.message){
        throw e.message
      }
      throw e
    }
  }
  const trigger=()=>{
    toast.promise(fetchNewUser(),{
      loading:"Processing...",
      success:"User created successfully",
      error:(e)=>e
    })
  }
  return (
    <>
      <CCard>
        <CCardHeader>Create new user</CCardHeader>
        <CCardBody>
          <CForm onSubmit={event => event.preventDefault()}>
            <div className="mb-3">
              <CFormLabel>Username</CFormLabel>
              <CFormControl
                onChange={e=>setForm({...form,username: e.target.value})}
                placeholder={"Username"} />
            </div>
            <div className="mb-3">
              <CFormLabel>Email</CFormLabel>
              <CFormControl
                onChange={e=>setForm({...form,email: e.target.value})}
                placeholder={"Email"} />
            </div>
            <div className="mb-3">
              <CFormLabel>Password</CFormLabel>
              <CFormControl
                onChange={e=>setForm({...form,password: e.target.value})}

                type={"password"} placeholder={"Password"} />
              <CFormFeedback>
                Password needs the follow requiriments:
              </CFormFeedback>
              <CFormFeedback className={"small"}>
                At least 8 characters
              </CFormFeedback>
              <CFormFeedback className={"small"}>
                Least of 32 characteres
              </CFormFeedback>
              <CFormFeedback className={"small"}>
                At least a number and a alphabetic character
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel>Confirm password</CFormLabel>
              <CFormControl
                onChange={e=>setForm({...form,confirm: e.target.value})}

                type={"password"} placeholder={"Confirm password"} />
            </div>
            <div className={"d-flex justify-content-end"}>
              <CButton type={"submit"} onClick={trigger}>Create</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default NewUser;
