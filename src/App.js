import Navbar from "./navbar";
import { BsLightningFill } from "react-icons/bs";
import './App.css';
import Card from "./Card"
import React, { useState } from 'react';
import Cartblock from './cartblock';


function App() {
  // const data = ;

  const [dataitems, setdataitems] = useState([
    {
      id: 1,
      title: 'Airpods Pro',
      imgurl: 'https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2019/10/airpods-pro-render.png',
      companyName: 'Apple',
      originalPrice: '24900.00',
      isDiscountAvailable: true,
      discount: '24%',
      finalPrice: '18999.00',
      reviewStars: 4.5,
      totalReviews: '4245',
      count: 1
    },
    {
      id: 2,
      title: 'Beats Pro Over-Ear',
      imgurl: 'https://www.pngkit.com/png/full/87-874796_beats-headphones-png-beats-by-dr-dre-studio.png',
      companyName: 'Beats',
      originalPrice: '27999.00',
      isDiscountAvailable: true,
      discount: '10%',
      finalPrice: '25200.00',
      reviewStars: 4,
      totalReviews: '3142',
      count: 1
    },
    {
      id: 3,
      title: 'Sony Bravia (43W6600)',
      imgurl: 'https://cdn.bajajelectronics.com/product/BEProduction-19066.png',
      companyName: 'Sony',
      originalPrice: '44900.00',
      isDiscountAvailable: true,
      discount: '4%',
      finalPrice: '42900.00',
      reviewStars: 4.5,
      totalReviews: '4535',
      count: 1
    },
    {
      id: 4,
      title: 'Apple Watch 6',
      imgurl: 'https://cdn.bajajelectronics.com/product/BEProduction-22705.png',
      companyName: 'Apple',
      originalPrice: '43900.00',
      isDiscountAvailable: true,
      discount: '9%',
      finalPrice: '39900.00',
      reviewStars: 4.5,
      totalReviews: '1430',
      count: 1
    },
    {
      id: 5,
      title: 'One Plus Watch',
      imgurl: 'https://image01.oneplus.net/ebp/202106/30/1-m00-27-82-rb8lb2dcuk-auubiaajukv08kds644.png',
      companyName: 'OnePlus',
      originalPrice: '14999.00',
      isDiscountAvailable: true,
      discount: '2%',
      finalPrice: '14699.00',
      reviewStars: 4,
      totalReviews: '5423',
      count: 1
    },
    {
      id: 6,
      title: 'Apple iPad Air 2020',
      imgurl: 'http://freebiescloud.com/wp-content/uploads/2020/10/1-48.png',
      companyName: 'Apple',
      originalPrice: '54900.00',
      isDiscountAvailable: true,
      discount: '13%',
      finalPrice: '47900.00',
      reviewStars: 5,
      totalReviews: '1036',
      count: 1
    },
    {
      id: 7,
      title: 'iPhone 12',
      imgurl: 'https://www.o2.co.uk/documents/456036/456101/blue-iphone-12-mini-2x1-131020.png/6805ecc8-1545-5bca-5417-7898b5ade713?t=1615794542365',
      companyName: 'Apple',
      originalPrice: '84900.00',
      isDiscountAvailable: true,
      discount: '14%',
      finalPrice: '72999.00',
      reviewStars: 4.5,
      totalReviews: '4965',
      count: 1
    },
    {
      id: 8,
      title: 'Samsung S21 Ultra',
      imgurl: 'https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21/gallery/in-galaxy-s21-ultra-5g-g988-sm-g998bzkginu-thumb-368340071',
      companyName: 'Samsung',
      originalPrice: '128999.00',
      isDiscountAvailable: true,
      discount: '18%',
      finalPrice: '105999.00',
      reviewStars: 4,
      totalReviews: '559',
      count: 1
    }
  ]);
  const [opencart, setopencart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalvalues, settotalvalues] = useState(0);

  let openCart = () => {
    // console.log(opencart)
    return setopencart(!opencart);
  }

  let incrementItemsCount = (id) => {
    let findincindex = dataitems.findIndex(obj => obj.id === id);
    dataitems[findincindex].count = dataitems[findincindex].count + 1;
    setdataitems([...dataitems]);
  }
  let decrementItemsCount = (id) => {
    let finddecindex = dataitems.findIndex(obj => obj.id === id);
    dataitems[finddecindex].count = dataitems[finddecindex].count - 1;
    dataitems[finddecindex].count > 0 ? setdataitems([...dataitems]) : dataitems[finddecindex].count = 1;
  }
  let totalcalc = () => {
    // console.log(arr)
    let ftotal = cartItems.reduce((acc, obj) => {
      return acc + (obj.count * obj.finalPrice);
    }, 0);
    settotalvalues(ftotal);
  }
  let addcartItems = (id) => {
    let finddataIndex = dataitems.findIndex(obj => obj.id === id);
    let findcartIndex = cartItems.findIndex(obj => obj.id === id);
    cartItems[findcartIndex] = dataitems[finddataIndex];
    let finaldata = findcartIndex >= 0 ? [...cartItems] : [...cartItems, dataitems[finddataIndex]];
    setcartItems(finaldata);
    // totalcalc();
  }



  let cartitemclose = (id) => {
    let finditemIndex = cartItems.findIndex(obj => obj.id === id);
    cartItems.splice(finditemIndex, 1);
    setcartItems([...cartItems]);
    totalcalc();
  }
  return (
    <div className="App" >

      <div className="mainnav">
        <div className="container-fluid " >
          <Navbar handleCart={openCart} count={cartItems.length} />
        </div>
      </div>
      <span>
        <Cartblock status={opencart} items={cartItems} finaltotal={totalvalues} handleclose={cartitemclose} handlecalc={totalcalc} />
      </span>
      <div className="container mt-3">
        <h4 className="flashSales"><span className="flash-icon">
          <BsLightningFill style={{ color: "#e94560" }} />
        </span>Flash Deals</h4>
        <div className="row">
          {dataitems.map((obj) => {
            return <Card key={obj.id} Data={obj} handleinc={incrementItemsCount} handledec={decrementItemsCount} handleCart={addcartItems} handletotal={totalcalc} />
          })
          }
        </div>
      </div>

    </div >
  );
}

export default App;
