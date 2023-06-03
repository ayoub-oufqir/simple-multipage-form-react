import Form1 from './components/Form1';
import Form2 from './components/Form2';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    name:"",
    age:""
  });

  const [currentPage, setCurrentPage] = useState(1);
  const handleSubmit = (event)=>{
    console.log("Form submitted")
    console.log(data)
    event.preventDefault();
  }

  return (
    <>
      <form>
        {currentPage===1 && <Form1 data={data} setData={setData} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        <br />
        {currentPage===2 && <Form2 data={data} setData={setData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        {/* {currentPage<2 && <button onClick={()=>setCurrentPage(currentPage+1)}>Next</button>}
        {currentPage===2 && <button onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>} */}
        {currentPage===2 && <button type='submit' onClick={(event)=>handleSubmit(event)}>Submit</button>}
      </form>
    </>
  );
}

export default App;
