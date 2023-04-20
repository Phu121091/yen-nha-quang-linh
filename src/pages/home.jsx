import React from 'react';
import Banner from '../components/Banner';
import Introduce from '../components/Introduce';
import Product from '../components/Product';
import Post from '../components/Post';
import Review from '../components/Review';


const Home = () => {
  return (
    <div className='container'>
        <Banner/>
        <div className='main'>
            <Introduce/>
            <Product title='SẢN PHẨM TỔ YẾN' data={0} banner='./bnql.png'/>
            <Product title='SẢN PHẨM YẾN CHƯNG' data={1} banner='./bnql1.png'/>
            <Product title='HỘP QUÀ BIẾU TẶNG' data={2} banner='./bnql2.png'/>
            <Post/>
            <Review/>
        </div>
    </div>
  )
}

export default Home