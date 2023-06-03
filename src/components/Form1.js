import { useForm } from 'react-hook-form';

const Form1 = ({data, setData, setCurrentPage, currentPage}) => {
    const {
        register,
        formState: { errors },
      } = useForm();
    return ( 
        <>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} type="text" onChange={(event)=>setData({...data, [event.target.name]:event.target.value })}/>
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
            <button onClick={()=>{
                setCurrentPage(currentPage+1);
                console.log(data);
            }}>Next</button>
        </>
     );
}
 
export default Form1;