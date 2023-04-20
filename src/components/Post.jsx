import React from 'react';
import './style.scss';

const ListPost = [
    {
        title:'Làm đẹp da bằng yến',
        link:'/',
        img:'./tv1.png'
    },
    {
        title:'Tác dụng của yến với mẹ bầu',
        link:'/',
        img:'./tv2.png'
    },
    {
        title:'Yến cho phụ nữ sau sinh',
        link:'/',
        img:'./tv3.png'
    },
    {
        title:'Yến cho người điều trị ung thư',
        link:'/',
        img:'./tv4.png'
    },
    {
        title:'Yến cho người già',
        link:'/',
        img:'./tv5.png'
    },
    {
        title:'Yến cho người bệnh ốm dậy',
        link:'/',
        img:'./tv6.png'
    }
]

const Post = () => {
  return (
    <div className='product'>
        <h2 className='title-product'>TƯ VẤN SẢN PHẨM</h2>
        <div className='hr'/>
        <div className='list-post'>
            {ListPost.map((d,i)=>
            <div className='post-card'>
                <img src={d.img} alt='cong-dung-to-yen'/>
                <p>{d.title}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default Post