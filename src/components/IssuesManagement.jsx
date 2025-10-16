import React, { use, useState } from 'react'
import Container from './Container'
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';
import Card from './Card';

const IssuesManagement = ({fetchPromises}) => {
    const [toggleStatus, setToggleStatus] = useState("All");  
    const initialData = use(fetchPromises);

    const [data, setData] = useState(initialData);    

    return (
        <div>
            <CountBox data={data}></CountBox>
            
            
            <Toggles_Btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggles_Btns>

            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                    {
                    data.map((issue, index) => {
                        return <Card key={index} issue={issue}></Card>;}
                    )
                }
            </div>
        </Container>
    </div>
        
    )
}

export default IssuesManagement