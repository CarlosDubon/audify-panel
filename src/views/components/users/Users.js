import React, {useEffect, useState} from 'react';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useSelector} from "react-redux";
import SearchControl from '../forms/search-control/SearchControl';

const Users = (props) => {
  const token = useSelector(state => state.user.token)
  const [data,setData] = useState([])
  const [searchValue, setSearchValue] = useState("");

  const [userToDelete,setUserToDelete]=useState(null)
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async ()=>{
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URI}/user/find`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setData(res.data)
    }catch (e){
      props.history.goBack()
      console.log(e)
      toast.error("Error al obtener usuarios, por favor intente nuevamente.")
    }
  }
  const updateUser=async (id,role)=>{
    try {
      if(role ==="ADMIN"){
        let res = await axios.patch(`${process.env.REACT_APP_API_URI}/user/promote/touser/${id}`,{},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
      }else{
        let res = await axios.patch(`${process.env.REACT_APP_API_URI}/user/promote/toadmin/${id}`,{},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
      }
      fetchData()
      setUserToDelete(null)
    }catch (e){
      if(e.response){
        throw e.response.data.errors
      }
      throw e
    }
  }
  const handleSearch = (value) => {
    setSearchValue(value);
  }
  const triggerUpdate=(id,role)=>{
    toast.promise(updateUser(id,role),{
      loading:"Processing...",
      success:"Changes successfully",
      error:(e)=>e
    })
  }

  const usersFiltered = data.filter(user => user.username.includes(searchValue));

  return (
    <>
      <CCard>
        <CCardHeader className={"d-flex justify-content-between align-items-center"}>
          All users
          <SearchControl onSubmit={handleSearch}/>
        </CCardHeader>
        <CCardBody>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>
                  Username
                </CTableHeaderCell>
                <CTableHeaderCell>
                  Email
                </CTableHeaderCell>
                <CTableHeaderCell>
                  Permissions
                </CTableHeaderCell>
                <CTableHeaderCell>
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                usersFiltered.map((user,i)=>(
                  <CTableRow key={i}>
                    <CTableDataCell>{user.username}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.role==="ADMIN"?"Administrator":"User"}</CTableDataCell>
                    <CTableDataCell>
                      <CButtonGroup style={{width: "100%"}} role="group" aria-label="Basic example">
                        <CButton
                          onClick={()=>{
                            setUserToDelete(user)
                          }}
                        >{user.role==="ADMIN"?"Upgrade to user":"Upgrade to administrator"}</CButton>
                      </CButtonGroup>
                    </CTableDataCell>
                  </CTableRow>
                ))
              }
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CModal
        visible={userToDelete}
        onDismiss={()=> setUserToDelete(null)}>
        <CModalHeader onDismiss={()=> setUserToDelete(null)}>
          <CModalTitle> Update user </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            {`Are you sure to update the user ${userToDelete?.username} to ${userToDelete?.role==="ADMIN"?"user":"administrator"}?`}
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton
            onClick={()=>triggerUpdate(userToDelete._id,userToDelete.role)}
            className={"text-white"}>
            Confirm
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Users;
