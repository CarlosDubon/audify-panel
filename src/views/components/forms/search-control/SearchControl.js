import React, { useState } from "react"; 

import { CButton, CFormControl} from "@coreui/react"
import { FaSearch } from 'react-icons/all';

const SearchControl = ({onSubmit}) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div style={Style.group}>
      <CFormControl
        style={{borderStartEndRadius: 0, borderEndEndRadius: 0}}
        id="search-bar" 
        placeholder="Search..."
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(e)=> {
          if(e && e.key === "Enter") {
            onSubmit(searchValue)
          }
        }}
        value={searchValue}/>
      <CButton 
        style={{borderStartStartRadius: 0, borderEndStartRadius: 0}}
        onClick={()=>{ onSubmit(searchValue) }}> 
        <FaSearch/> 
      </CButton>
    </div>
  );
}

const Style = {
  group: {
    margin: "0 0 0 16px",
    display: "flex"
  }
};

export default SearchControl;