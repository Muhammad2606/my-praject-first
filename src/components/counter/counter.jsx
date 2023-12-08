
const Counter = ({plusHandler, setCount, item}) => {
    const inkHandler = () =>{
        setCount(prev => prev +1)
        plusHandler(item)
      }
    return (
        <>
            <div className="btn__container">
                <button style={{ padding: '7px 15px', fontSize: '1.3rem', borderRadius: '20px' }} onClick={inkHandler} >plus</button>
                <button style={{ padding: '7px 15px', fontSize: '1.3rem', borderRadius: '20px' }}   >minus</button>
                <button style={{ padding: '7px 15px', fontSize: '1.3rem', borderRadius: '20px' }}  >reset</button>

            </div>
        </>
    )
}

export default Counter