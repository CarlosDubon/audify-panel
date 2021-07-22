import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
const AppHeaderDropdown = () => {
  const token = useSelector(state => state.user.token)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <div style={{background:"#000",width:"30px",height:"30px"}} className={"avatar-img"}></div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="/dashboard/profile">
          <CIcon name="cil-user" className="me-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem
          onClick={()=>{
            dispatch({ type: 'update_user',token:null })
            history.replace("/")
          }}
          href="#">
          <CIcon name="cil-lock-locked" className="me-2" />
          Cerrar sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
