import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {ImLocation2} from 'react-icons/im';
import {IoIosArrowDown} from 'react-icons/io';
import './style.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
         <BsFillTelephoneFill/> <p>098 592 44 95</p>
         <span>|</span>
         <ImLocation2/> <p>số 27 ngõ 651/26 Minh Khai</p>

      </div>
      <div className='header-bot'>
        <div className='logo-ql'>
        <img src='./logo-ql.png' alt='logo-ql'/>
        <div className='logo-name'>
        <span>YẾN NHÀ</span>
        <p>QUANG LINH</p>
        </div>
        </div>

        <div className='header-menu'>
          {Menu.map((d,i)=>
          <div className='header-item'>
          <p key={i} className='header-menu-item'>{d.title} {d.list && <IoIosArrowDown/>}</p>
          {d.list &&
          <div className='menu-hover'>
          {d.list.map((item,index)=>
          <p key={index}>{item}</p>
          )}
          </div>
          }
          </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Header


const Menu = [
 {title:'GIỚI THIỆU'} ,
 {title:'SẢN PHẨM',
  list:[
    'SẢN PHẨM TỔ YẾN',
    'SẢN PHẨM YẾN CHƯNG',
    'HỘP QUÀ BIẾU TẶNG'
  ]
} ,
 {title:'ƯU ĐÃI'} ,
 {title:'LIÊN HỆ'} ,
]