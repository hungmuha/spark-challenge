import React  from "react";
import { Input, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';

const SearchBar = ({label, searchValue, searchChange}) => {
    return(
        <InputGroup className="container m-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{label}</InputGroupText>
          </InputGroupAddon>
          <Input type="text" value={searchValue} onChange={searchChange}/>
        </InputGroup>
    )
}

export default SearchBar;