const Form1 = ({data, setData}) => {
    return ( 
        <>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={(event)=>setData({...data, [event.target.name]:event.target.value })}/>
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
        </>
     );
}
 
export default Form1;