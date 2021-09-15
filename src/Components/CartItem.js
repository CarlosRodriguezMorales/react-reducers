const CartItem = ({data, delFromCart}) => {
    let {id,name,price,quantity} = data
    return (
        <div style={{borderBottom:"thin solid gray", padding:"1rem"}}>
            <h4>{name}</h4>
            <h5>${price}.00 * {quantity} = ${price*quantity}.00</h5>
            <button onClick={()=>delFromCart(id)}>Eliminar uno</button>
            <br/>
            <button onClick={()=>delFromCart(id,true)}>Eliminar todos</button>
            <br/>            
        </div>
    )
}

export default CartItem