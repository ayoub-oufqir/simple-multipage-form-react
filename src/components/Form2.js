const Form2 = ({data, setData}) => {
    return ( 
        <>
            <label htmlFor="age">Age</label>
            <input id="age" name="age" type="text" onChange={(event)=>setData({...data, [event.target.name]:event.target.value })} />
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
        </>
     );
}
 
export default Form2;