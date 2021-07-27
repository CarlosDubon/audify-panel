import React from 'react'
import {CCol, CRow, CWidgetDropdown,} from '@coreui/react'

const WidgetsDropdown = (props) => {
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          className="mb-4 pb-3"
          color="primary"
          value={props.users}
          title="Users"
        />
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          className="mb-4 pb-3"
          color="info"
          value={props.admins}

          title="Administrators"

        />
      </CCol>
      <CCol sm="12" lg="4">
        <CWidgetDropdown
          className="mb-4 pb-3"
          color="warning"
          value={props.speakers}
          title="Speakers"
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
