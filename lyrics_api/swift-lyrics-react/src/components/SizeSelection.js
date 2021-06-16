import React from "react";
import { Button, ButtonGroup} from 'reactstrap';

const SizeSelection = ({sizeList, sizeSelected, setSize}) => {
    let buttonList = sizeList.map((size, index) => {
        return (
            <Button color="primary" key={index} onClick={() => setSize(size)} active={sizeSelected === size}> {size} </Button>
        )
    });
    return(
        <ButtonGroup className="mb-3">
            {buttonList}
        </ButtonGroup>
    )
}

export default SizeSelection;