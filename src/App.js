import './App.css';
import Input from './components/Input';

import {useState} from 'react';
function App() {
    const [inputdata, setInputdata] = useState('')
    
  return (
    <>
        <div className='App'>
            <div className='todo-contanier'>
                <h1>Todo List</h1>
                 
                <Input inputdata={inputdata} setInputdata={setInputdata}/>
            </div>
        </div>
    </>
  );
}

export default App;
