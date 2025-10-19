import React, { use, useState } from 'react'
import Container from './Container'
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';
import Card from './Card';

const IssuesManagement = ({fetchPromises}) => {
    const initialData = use(fetchPromises);
    const [toggleStatus, setToggleStatus] = useState("All");  
    const [data, setData] = useState(initialData);
    
    const filteredData = 
        toggleStatus === "All" 
            ? data
            : data.filter(element => element.status === toggleStatus);

    return (
        <div>
            <CountBox data={data} />
            
            <Toggles_Btns 
                toggleStatus={toggleStatus} 
                setToggleStatus={setToggleStatus} 
            />

            <Container>
                {filteredData.length === 0 
                    ? (<h2 className='flex justify-center items-center font-bold text-4xl text-purple-500 text-shadow-2xs my-6'>No Data Found</h2>)
                    : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6'>
                        {filteredData.map((issue, index) => (
                            <Card key={index} issue={issue} data={data} setData={setData} />
                        ))}
                    </div>)}
            </Container>
    </div>
        
    )
}

export default IssuesManagement