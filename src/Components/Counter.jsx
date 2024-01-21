import { useState } from "react"


const Counter = () => {
  
  let [count , setCount] = useState(0)
  let increment = ()=>{
    console.log("number" , count)
    // setCount(count + 1)
    setCount((prev)=>{
      console.log(prev)
      return count + 1
    })
  }


  return (
    <>
    <div>Counter</div>
    <div>{count}</div>
    <button onClick={increment} className="btn btn-success">counter</button>


    </>
  )
}

export default Counter