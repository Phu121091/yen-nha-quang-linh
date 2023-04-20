import React from 'react';
import './style.scss';
import Productcard from './Productcard';

const ListToyen = [
    {
        title:'Yến tinh chế',
        img:'./toyen4.jpg',
        cost:'3.200.000 đ'
    },
    {
        title:'Yến thô',
        img:'./toyen6.jpg',
        cost:'2.800.000 đ'
    },
    {
        title:'Chân yến thô',
        img:'./toyen3.jpg',
        cost:'3.000.000 đ'
    }
]

const ListYenchung = [
    {
        title:'Yến chưng sẵn 100 ml',
        img:'./yenchung1.jpg',
        cost:'100.000 đ'
    },
    {
        title:'Yến chưng sẵn 75 ml',
        img:'./yenchung2.jpg',
        cost:'75.000 đ'
    },
    {
        title:'Yến chưng sẵn 60 ml',
        img:'./yenchung3.jpg',
        cost:'60.000 đ'
    }
]

const ListHopqua = [
    {
        title:'Set hộp quà yến tinh',
        img:'./hopqua0.jpg',
        cost:'3500.000 đ'
    },
    {
        title:'Set hộp quà yến chưng 1',
        img:'./hopqua1.jpg',
        cost:'600.000 đ'
    },
    {
        title:'Set hộp quà yến chưng 2',
        img:'./hopqua2.jpg',
        cost:'500.000 đ'
    }
]

const Product = ({title,data,banner}) => {
  return (
    <div className='product'>
        <h2 className='title-product'>{title}</h2>
        <div className='hr'/>
        <img src={banner} alt='to-yen' className='banner-product'/>
        <div className='list-product'>
            {data === 0 && ListToyen.map((d,i)=>
            <Productcard data={d}/>
            )}
            {data === 1 && ListYenchung.map((d,i)=>
            <Productcard data={d}/>
            )}
            {data === 2 && ListHopqua.map((d,i)=>
            <Productcard data={d}/>
            )}
            
        </div>

    </div>
  )
}

export default Product