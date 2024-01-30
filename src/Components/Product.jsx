
import PropTypes from 'prop-types'
const Product = ({ children , onDeleteProduct , id} ) => {
  return (
    <div className='my-3'>
    {/* <h1> {label} </h1> */}
    {/* <button className="btn btn-info">{price}</button> */}

    <div className="card border-success mb-3" >
   {children}
     
</div>
<button  onClick={()=> {onDeleteProduct(id)} }  className='btn btn-danger'>Delete </button>
    </div>
  
  )
}
Product.propTypes = {
  name: PropTypes.string,
  price:PropTypes.number,

} 
export default Product