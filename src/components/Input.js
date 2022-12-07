import Listfields from './List_fields';
import { useState } from 'react';
import RemoveAll from './Remove_All';

const Input = (props) =>{

    const [listdata,setListdata] = useState([])
    //---------
    const handlerInput = (e) =>{
          props.setInputdata(e.target.value)
    }
    //---------
    const set_data = () =>{
        console.log('ADD Clicked')
        if (props.inputdata != ''){
            listdata.push(props.inputdata)
        }
        else{
            alert('Please enter data')
        }
        props.setInputdata('')
       
    }  
    //---------
    const handle_remove =(id) =>{
        console.log('Button Removed')
        const newlist = listdata.filter((item,index)=>{return index !== id})
        setListdata(newlist)
    }
    //---------
    const remove_all= () =>{
        console.log('Button Removed All')
        setListdata([])
    }

    // ------ JSX ----
    return <>
            <div className='enter-field'>
                  <input type='text' name='Names' value={props.inputdata} onChange={handlerInput} placeholder='Enter your routine....'/>
                  <button type='button' className='btn' onClick={set_data} >Add</button>
            </div>
             
            <Listfields  inputdata={listdata} remove_handle={handle_remove}/>  

            <RemoveAll remove_all={remove_all}/>                    
              
            

    </>
    // ------ JSX END ----
 
}
export default Input;