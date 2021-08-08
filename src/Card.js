import React from 'react'
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function Card(props) {
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 maincard">
                <div className="card">
                    <div className="card-body">
                        <div className="badge rounded-pill bg-danger">{props.Data.discount} off</div>
                        <div className="productimgcontainer"><img src={props.Data.imgurl} className=" productimage" width='200' height='200' alt="product" /></div>
                        <h5 className="card-title title">{props.Data.title}</h5>
                        <p className="review"><Rating name="half-rating-read" defaultValue={props.Data.reviewStars} precision={0.5} readOnly /><span className="number">({props.Data.totalReviews})</span></p>
                        <p className="price"><span className="finalprice">Rs. {props.Data.finalPrice}</span><span className="originalprice">{props.Data.originalPrice}</span></p>
                        <div className="numberofitems">
                            <IconButton className="decreasebtn" aria-label="decrease item" onClick={() => { props.handledec(props.Data.id) }}><RemoveRoundedIcon style={{ color: '#e94560' }} /></IconButton>
                            <span className="count">{props.Data.count}</span>
                            <IconButton className="increasebtn" aria-label="increase item" onClick={() => { props.handleinc(props.Data.id) }}><AddRoundedIcon style={{ color: '#e94560' }} /></IconButton>
                        </div>
                        <div className="cartadd"><button className="btn btn-outline-danger" onClick={() => props.handleCart(props.Data.id)}>Add to cart</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}