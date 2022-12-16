import './css/createquestion.css';
import { MENU_ITEMS } from '../dataset';
import DropdownComponent from './shared/dropdownComponent';

export default function CreateAssessment() {

    return (
        <>
            <div className="baseContainer">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-4 menu-section border">
                            <div className="heading-place mt-5">
                                <h3>Menu</h3>
                            </div>

                            <div className="items-section mt-5">
                                <ul className='mt-3'>
                                    {
                                        MENU_ITEMS.length > 0 && MENU_ITEMS.map(x=>(<li> {x.typeName} </li>))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg border">
                            {/* <div className="row">
                                <DropdownComponent data={MENU_ITEMS}/>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}