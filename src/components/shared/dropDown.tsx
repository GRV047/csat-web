import { useState } from 'react';
import '../css/dropdown.css';


const typeArr: string[] = ["RADIO", "CHECKBOX", "BOOLEAN", "TEXT"]

export default function DropDown(props: { selected: string, setSelected: any }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="dropdown">
                <div className="dopdown_btn" onClick={e => {
                    setIsActive(!isActive)
                }}>
                    {props.selected}
                    <span className='fas fa-caret-down'></span>
                </div>
                {
                    isActive && (
                        <div className="dropdown_content">
                            {
                                typeArr.map((option: string) => (
                                    <div className="dropdown_item" onClick={((e: any) => {
                                        props.setSelected(option);
                                        setIsActive(false);
                                    })}>
                                        {option}
                                    </div>
                                ))
                            }

                        </div>
                    )
                }
            </div>

        </>
    )
}