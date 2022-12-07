
const  Listfields= (props) =>{
        const data = props.inputdata
    return <>
        {
                data.map((value,id)=>{
                        return <div key={id} className='show-data'>
                                  <h4>{id + 1}.  {value.charAt(0).toUpperCase()+value.slice(1)}</h4>
                                  <button type='button' onClick={(e)=>{props.remove_handle(id)}}>Remove</button>
                               </div>
                })
        }
    </>
           


}
export default Listfields;