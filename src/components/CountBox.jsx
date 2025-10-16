import React from 'react'
import Container from './Container'

const CountBox = ({data}) => {
    const pendingData = data.filter(element => element.status === "Pending");
    const submittedData = data.filter(element => element.status === "Submitted");
    const reviewedData = data.filter(element => element.status === "Reviewed");
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
                <div className="rounded-md p-7 text-white h-64 bg-gray-500 flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl">Pending</h2>
                    <p className="font-semibold text-2xl">{pendingData.length}</p>
                </div>
                <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl">Submitted</h2>
                    <p className="font-semibold text-2xl">{submittedData.length}</p>
                </div>
                <div className="rounded-md p-7 text-white h-[250px] bg-teal-500 flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl">Reviewed</h2>
                    <p className="font-semibold text-2xl">{reviewedData.length}</p>
                </div>
            </div>
        </Container>
    )
}

export default CountBox