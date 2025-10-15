import React, { use, useState } from 'react'
import Container from './Container'
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';

const IssuesManagement = ({fetchPromises}) => {
    const [toggleStatus, setToggleStatus] = useState("All");  
    const initialData = use(fetchPromises);
    console.log(initialData);
    

    return (
        <div>
            <CountBox></CountBox>
            
            
            <Toggles_Btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggles_Btns>
        </div>
        
    )
}

export default IssuesManagement