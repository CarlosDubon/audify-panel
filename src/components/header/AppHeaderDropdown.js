import React from 'react'
import {
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { BsPersonFill } from 'react-icons/all';

const AppHeaderDropdown = () => {
  const token = useSelector(state => state.user.token)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <div 
          style={{
            background:"#000",width:"30px",
            color: "#fff",
            height:"30px", display: "flex", 
            justifyContent: "center", alignItems: "center"
          }} 
          className={"avatar-img"}>
          <BsPersonFill/>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem onClick={()=>{
          history.replace("/dashboard/profile");
        }}>
          <CIcon name="cil-user" className="me-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem
          onClick={()=>{
            dispatch({ type: 'update_user',token:null })
            history.replace("/")
          }}
          style={{
           cursor:"pointer"
          }}
          >
          <CIcon name="cil-lock-locked" className="me-2" />
          Cerrar sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
