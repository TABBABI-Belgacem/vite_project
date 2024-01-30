
import { useState } from "react"
import Counter from "./Counter"
import Product from "./product"

import { v4 as uuid } from 'uuid';

function Products() {
let app = "leran how to create app with reactjs"
let showList = true
const [title , setTitle] = useState("")
const [price , setPrice] = useState("")
const titleInput = (e)=>{
setTitle(e.target.value)
localStorage.setItem("tit", e.target.value)
}
const priceInput = (e)=>{
  setPrice(e.target.value)
}
const [products, setProducts] = useState([
  { id: 1,
    name: "Samsung",
    price: 3000
 
  },
  { id: 2,
   name: "Iphone",
   price: 2000
 },
 { id: 3,
  name: "redmi",
  price: 1800
}
]

)
function addProduct(e){
  e.preventDefault()
 console.log(title, price)
 let myProducts = {
     id:uuid(),
     name:title,
     price

 }
//  console.log(myProducts)
setProducts([...products, myProducts]) 
}

const  deleteProduct = (id) =>{
  let myList = products.filter((product)=>product.id !== id)
  setProducts((prev)=>{
console.log(prev)
return myList

  })
  
  
  
  // let mylist = products.filter( product => product.id !== id )
  
  
  // setProducts(mylist) 
  setProducts(myList)
}




  return (
    <div>
      <h1>{app}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, distinctio ut earum excepturi nobis voluptatibus cupiditate ullam cum sapiente ducimus atque blanditiis, facilis modi accusamus illo maiores, non voluptate optio!</p>
      <Counter />
      <form action="" onSubmit={addProduct}>
        <div className="form-group my-2"  >
          <label htmlFor="" className="form-label">Title</label>
          <input onChange={titleInput} id="title" type="text" className="form-control" />
        </div>
        <div className="form-group my-2" >
          <label  htmlFor="" className="form-label">Price </label>
          <input onChange={priceInput} type="text" className="form-control" />
        </div>
        
        <button className="btn btn-warning">Save</button>
      </form>
      {title} <br />
      {price}
      {showList && (
  <div>
    {products.map((product)=>(
    <div key={ product.id }>
    
       {/* <Product data={product}/>  */}
       {/* <Product label={product.name} price={product.price}/>  */}
      
       <Product id={product.id} onDeleteProduct={deleteProduct}>
  <div className="card-body">
    <h4 className="card-title">{product.name}</h4>
    <p className="card-text"><button className='btn btn-danger'>{product.price}</button>
    </p>
  </div>
      </Product>

    </div>
    
    ))}
    
  </div>
  
  ) 
  }

    </div>
  )
}

export default Products