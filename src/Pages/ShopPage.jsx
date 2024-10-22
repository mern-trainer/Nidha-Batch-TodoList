import React, { Fragment } from 'react'
import { products } from '../Constants/products'
import { FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'
import { useCart } from '../Providers/CartProvider'
import toast from 'react-hot-toast'

const ShopPage = () => {

    const { cartList, setCartList } = useCart()
    
    const handleGrandTotal = () => {
        const sum = cartList.reduce((total, product) => {
            const discountPrice = (product.price - (product.price * (product.discountPercentage/100))).toFixed(2)
            const totalPrice = discountPrice * product.quantity
            return total + totalPrice
        }, 0)
        return sum
    }

    const handleAddToCart = (product) => {
        const index = cartList.findIndex(cartListItem => cartListItem.id == product.id)
        if (index == -1) {
            product.quantity = 1
            setCartList([product, ...cartList])
        } else {
            const res = cartList.map(item => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            setCartList(res)
        }
        return toast.success("Product added successfully")
    }

    const handleRemoveFromCart = (removeId) => {
        const res = cartList.filter(product => product.id != removeId)
        setCartList(res)
        return toast.success("Product removed successfully")
    }

    const handleQuantityUpdate = (op, productId) => {
        const product = cartList.find((item) => item.id == productId)
        if (op == "-" && product.quantity == 1) {
            return handleRemoveFromCart(productId)
        }
        const res = cartList.map(product => {
            if (product.id == productId) {
                if (op == "+") {
                    return {...product, quantity: product.quantity + 1}
                } else {
                    return {...product, quantity: product.quantity - 1}
                }
            }
            return product
        })
        setCartList(res)
    }

    return (
        <Fragment>
            <div className='d-flex justify-content-center gap-2 flex-wrap mt-3'>
                {
                    products.map(product => {
                        return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
                            <div>
                                <img src={product.images[0]} alt={product.title} style={{width: "15rem"}}/>
                            </div>
                            <div className='text-center'>
                                <h6>{product.title}</h6>
                                <div className='w-100 d-flex justify-content-between'>
                                    <div><FaStar /> {product.rating}</div>
                                    <div><s className='text-muted'>${product.price}</s> ${(product.price - (product.price * (product.discountPercentage/100))).toFixed(2)}</div>
                                </div>
                                <button onClick={() => handleAddToCart(product)} className='bg-success p-1 w-100 mt-2 border-0 text-light rounded'><FaShoppingCart /> Add To Cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <h3 className='text-center my-5'>Cart List</h3>
            <div className='d-flex justify-content-center gap-2 flex-wrap mt-3'>
                {
                    cartList.map(product => {

                        const discountPrice = (product.price - (product.price * (product.discountPercentage/100))).toFixed(2)

                        return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
                            <div>
                                <img src={product.images[0]} alt={product.title} style={{width: "15rem"}}/>
                            </div>
                            <div className='text-center'>
                                <h6>{product.title}</h6>
                                <div className='w-100 d-flex justify-content-between'>
                                    <div><FaStar /> {product.rating}</div>
                                    <div><s className='text-muted'>${product.price}</s> ${discountPrice}</div>
                                </div>
                                <div className='mt-3 d-flex justify-content-between align-items-center'>
                                    <button className='btn btn-sm btn-success w-25 fs-4 ' onClick={() => handleQuantityUpdate("-", product.id)}> - </button>
                                    <div>{product.quantity}</div>
                                    <button className='btn btn-sm btn-success w-25 fs-4 ' onClick={() => handleQuantityUpdate("+", product.id)} > + </button>
                                </div>
                                <div className="d-flex align-items-center justify-content-between my-2">
                                    <div>Total: </div>
                                    <div>${(discountPrice * product.quantity).toFixed(2)}</div>
                                </div>
                                <button onClick={() => handleRemoveFromCart(product.id)} className='bg-danger p-1 w-100 mt-2 border-0 text-light rounded'><FaTrash /> Remove</button>
                            </div>
                        </div>
                    })
                }
            </div>

            <h3 className='text-center my-3'>Grand Total: ${handleGrandTotal().toFixed(2)}</h3>
        </Fragment>
    )
}

export default ShopPage
