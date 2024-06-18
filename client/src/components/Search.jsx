import React, { useEffect , useState} from 'react'
import axios from 'axios';
const Search = () => {
    const [alldata , setAlldata] = useState([]);

    const [data , setData] = useState([]);

    const array = [{nam : 'harsh',pata:'shaitan gali'},{nam : 'harshbhadauriya',pata:'shaitan gali'},{nam:'utkarsh' , pata:'gumnam gali'},{nam:'manu',pata:'badmash gali'}]
    
    const handlesearch = async()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setAlldata(res.data);
      // setAlldata(array);
// setAlldata(array);
      console.log("this is our all data " + alldata);
    }
    useEffect(()=>{
      try {
        handlesearch();
      } catch (error) {
console.log(err)        
      }
    },[])
    const handlefilter = (value)=>{
    const res = alldata.filter(f => f.name.toLowerCase().includes(value));
    setData(res);
    if(value===''){
      setData([]);
    }
    }
    console.log(JSON.stringify(data));
  return (
    <>
    <input className='border-2 w-full p-2' type='text' placeholder='search' onChange={e => handlefilter(e.target.value)}/>

    <div className='h-[80vh] p-2 border-2 w-full'>
    {data.map(e =>
    <>
    <h2>{e.name}</h2>
    </>
    )}
    </div>
    </>
  )
}

export default Search