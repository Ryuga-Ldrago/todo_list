
const RemoveAll =(props)=>{
 
    return <>
       <div className='remove-btn'>
            <button type='button' onClick={props.remove_all}>Remove All</button>
        </div>

    </>
}
export default RemoveAll;