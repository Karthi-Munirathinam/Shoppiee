import React from 'react';
import CartCard from './cartCard';
export default function Cartblock(props) {
    return (
        <div className="Cartbox" style={{ width: props.status ? "20%" : '0', borderLeft: props.status ? '3px solid #e94560' : '' }}>
            <div className="container-fluid">
                <div className={props.items.length === 0 ? 'row noItemsrow' : 'row'}>
                    <div className={props.items.length === 0 ? 'col-12 noItems' : 'col-12'} >
                        <h4>{props.items.length === 0 ? 'No items in the cart' : props.items.length + 'items'}  </h4>
                    </div>
                </div>
                <div>
                    {props.items.map((obj) => {
                        return <CartCard key={obj.id} data={obj} handlecartclose={props.handleclose} calc={props.handlecalc()} />
                    })}
                </div>
                {props.items.length === 0 ? '' :
                    < div className="totalvalue row">
                        <div className="subtotalvalue">{props.items.length === 0 ? '' : 'Sub-total: '}<span className="subtotal">Rs. {props.finaltotal}</span></div>
                        <div className="checkoutbtn"><button className="btn btn-outline-danger">Check out</button></div>
                    </div>
                }
            </div>

        </div >
    )
}