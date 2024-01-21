import Counter from "./Counter"


function Products() {
let app = "leran how to create app with reactjs"
let showList = true

let products = [
 { id: 1,
   name: "Samsung",
   price: 3000

 },
 { id: 2,
  name: "Iphone",
  price: 2000
},
]
  return (
    <div>
      <h1>{app}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, distinctio ut earum excepturi nobis voluptatibus cupiditate ullam cum sapiente ducimus atque blanditiis, facilis modi accusamus illo maiores, non voluptate optio!</p>
      <Counter />
      
      {showList && (
  <div>
    {products.map((product, index)=>(
    <li key={product.id}>{ product.name }</li>
    
    ))}
  
  </div>
  ) 
  }
    </div>
  )
}

export default Products