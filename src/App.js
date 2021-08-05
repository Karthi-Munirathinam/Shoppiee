import Navbar from "./navbar";
import { BsLightningFill } from "react-icons/bs";
import './App.css';
import Card from "./Card"
import React, { useState } from 'react'

function App() {
  const data = [
    {
      id: 1,
      title: 'Airpods Pro',
      imgurl: 'https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2019/10/airpods-pro-render.png',
      companyName: 'Apple',
      originalPrice: '24,900.00',
      isDiscountAvailable: true,
      discount: '24%',
      finalPrice: '18,999.00',
      reviewStars: '4.5',
      totalReviews: '4245'
    },
    {
      id: 2,
      title: 'Beats Pro Over-Ear',
      imgurl: 'https://www.pngkit.com/png/full/87-874796_beats-headphones-png-beats-by-dr-dre-studio.png',
      companyName: 'Beats',
      originalPrice: '27,999.00',
      isDiscountAvailable: true,
      discount: '10%',
      finalPrice: '25,200.00',
      reviewStars: '4',
      totalReviews: '3142'
    },
    {
      id: 3,
      title: 'Sony Bravia (43W6600)',
      imgurl: 'https://cdn.bajajelectronics.com/product/BEProduction-19066.png',
      companyName: 'Sony',
      originalPrice: '44,900.00',
      isDiscountAvailable: true,
      discount: '4%',
      finalPrice: '42,900.00',
      reviewStars: '4.5',
      totalReviews: '4535'
    },
    {
      id: 4,
      title: 'Apple Watch 6',
      imgurl: 'https://cdn.bajajelectronics.com/product/BEProduction-22705.png',
      companyName: 'Apple',
      originalPrice: '43,900.00',
      isDiscountAvailable: true,
      discount: '9%',
      finalPrice: '39,900.00',
      reviewStars: '4.5',
      totalReviews: '1430'
    },
    {
      id: 5,
      title: 'One Plus Watch',
      imgurl: 'https://image01.oneplus.net/ebp/202106/30/1-m00-27-82-rb8lb2dcuk-auubiaajukv08kds644.png',
      companyName: 'OnePlus',
      originalPrice: '14,999.00',
      isDiscountAvailable: true,
      discount: '2%',
      finalPrice: '14,699.00',
      reviewStars: '4',
      totalReviews: '5423'
    },
    {
      id: 6,
      title: 'Apple iPad Air 2020',
      imgurl: 'http://freebiescloud.com/wp-content/uploads/2020/10/1-48.png',
      companyName: 'Apple',
      originalPrice: '54,900.00',
      isDiscountAvailable: true,
      discount: '13%',
      finalPrice: '47,900.00',
      reviewStars: '5',
      totalReviews: '1036'
    },
    {
      id: 7,
      title: 'iPhone 12',
      imgurl: 'https://www.o2.co.uk/documents/456036/456101/blue-iphone-12-mini-2x1-131020.png/6805ecc8-1545-5bca-5417-7898b5ade713?t=1615794542365',
      companyName: 'Apple',
      originalPrice: '84,900.00',
      isDiscountAvailable: true,
      discount: '14%',
      finalPrice: '72,999.00',
      reviewStars: '4.5',
      totalReviews: '4965'
    },
    {
      id: 8,
      title: 'Samsung S21 Ultra',
      imgurl: 'https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21/gallery/in-galaxy-s21-ultra-5g-g988-sm-g998bzkginu-thumb-368340071',
      companyName: 'Samsung',
      originalPrice: '1,28,999.00',
      isDiscountAvailable: true,
      discount: '18%',
      finalPrice: '1,05,999.00',
      reviewStars: '4',
      totalReviews: '559'
    }
  ];
  const [itemsCount, setitemsCount] = useState(1);

  let incrementItemsCount = (id) => {
    return setitemsCount(itemsCount + 1);
  }
  let decrementItemsCount = (id) => {
    return itemsCount > 0 ? setitemsCount(itemsCount - 1) : '1';
  }
  return (
    <div className="App">

      <div className="container-fluid mainnav">
        <Navbar />
      </div>

      <div className="container mt-3">
        <h4 className="flashSales"><span className="flash-icon">
          <BsLightningFill style={{ color: "#e94560" }} />
        </span>Flash Deals</h4>
        <div className="row">
          {data.map((obj) => {
            return <Card Data={obj} itemscounthandle={itemsCount} handleinc={incrementItemsCount} handledec={decrementItemsCount} />
          })
          }
        </div>
      </div>

    </div >
  );
}

export default App;
