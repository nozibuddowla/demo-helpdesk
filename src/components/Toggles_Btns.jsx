import Container from './Container'

const Toggles_Btns = ({toggleStatus, setToggleStatus}) => {
    const btns = ["All", "Pending", "Submitted", "Reviewed"];
    return (
        <div>
            <Container>
                <div className="text-right my-12">
                    {
                        btns.map((btn, id) => {                        
                            return <button 
                                        key={id} 
                                        className={`toggle-btn ${(id === 0) && "rounded-l-md"} ${(id === btns.length - 1) && "rounded-r-md"} ${toggleStatus === btn && "!bg-purple-500 !text-purple-100"} `} onClick={() => setToggleStatus(btn)}>
                                            {btn}
                                    </button>
                        })
                    }
                </div>
            </Container>

            
        </div>

    )
}

export default Toggles_Btns