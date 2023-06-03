import { useForm } from 'react-hook-form';


const Form2 = ({data, setData, setCurrentPage, currentPage}) => {
    return ( 
        <>
            <label htmlFor="age">Age</label>
            <input id="age" name="age" type="text" onChange={(event)=>setData({...data, [event.target.name]:event.target.value })} />
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
            <button onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>
            
        </>
     );
}
 
export default Form2;