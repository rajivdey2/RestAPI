import React, {useState , useEffect} from 'react'

function App() {
  const [count , setCount] = useState()
  useEffect(()=>{
    const fetchServer = async() =>{
      const res= await fetch("http://localhost:5000/count")
      const data = await res.json();
      if (data){
        setCount(data.count);
      }
    };
    fetchServer();
  }, []);
  const add = async() => {
    const res = await fetch("http://localhost:5000/add",{
      method: "POST"
    });
    const data = await res.json();
    if (data){
      setCount(data.count);
    }
  };

  const subtract = async() =>{
    const res = await fetch("http://localhost:5000/subtract",{
      method: "POST"
    });
    const data = await res.json();
    if (data){
      setCount(data.count);
    }
  };
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={() => {add()}}>add</button>
        <button onClick={() => {subtract()}}>subtract</button>

    </>
     
  );
}

export default App