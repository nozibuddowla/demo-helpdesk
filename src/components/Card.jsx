const Card = ({issue, data, setData}) => {
    
    const handleClick = () => {
        const currentData = data.find(element => element.ticketId === issue.ticketId);
        if (currentData.status === "Pending") {
            currentData.status = "Submitted";
        } else if (currentData.status === "Submitted") {
            currentData.status = "Reviewed";
        }
        const restData = data.filter(element => element.ticketId !== issue.ticketId);
        setData([currentData, ...restData])
        
    }
    return (
        <div className='shadow-md rounded-md cursor-pointer bg-slate-100 p-4' onClick={handleClick}>
            <div>
                <img src={issue.userImg} alt={issue.requestedBy} className='h-20 w-20 rounded-full' />
                <h2 className='font-semibold text-lg'>{issue.requestedBy}</h2>
            </div>
            <div className='flex justify-between my-2'>
                <h2 className='font-bold text-2xl'>{issue.subject}</h2>
                <div>
                    <span className={`font-semibold py-1 px-2 shadow rounded mx-2 ${issue.priority === "High" 
                        ? "text-red-500 bg-red-100" 
                        : issue.priority === "Medium" 
                        ? "text-yellow-500 bg-yellow-100" 
                        : "text-green-500 bg-green-100"}`}>{issue.priority}</span>

                    <span className={`font-semibold py-1 px-2 shadow rounded ${issue.status === "Pending" 
                        ? "text-red-500 bg-red-100" 
                        : issue.status === "Submitted" 
                        ? "text-yellow-500 bg-yellow-100" 
                        : "text-green-500 bg-green-100"}`}>{issue.status}</span>
                </div>
            </div>
            <p className='text-[17px] text-slate-700'>{issue.description}</p>
        </div>
    )
}

export default Card