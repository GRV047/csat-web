import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { dropdownObject } from '../constants/type';


export default function DropdownComponent(props:{data:dropdownObject[]}) {

    const [selectedType,setSelectedType] = useState('Dropdown Button');
    
    
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    {selectedType}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    {
                        props.data.map(x=>(<Dropdown.Item href='#' onClick={()=>{
                            setSelectedType(x.typeName)
                        }}>{x.typeName}</Dropdown.Item>))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}