import React from 'react';
import './style.scss';

const Introduce = () => {
  return (
    <div className='introduce'>
        <div className='intro-item'>
            <img src='./icon1.png' alt='icon-introduce'/>
            <h6>CAM KẾT CHẤT LƯỢNG</h6>
            <p>Bồi hoàn gấp 10 lần giá trị sản phẩm nếu phát hiện hàng giả.</p>
        </div>
        <div className='intro-item'>
            <img src='./icon2.png' alt='icon-introduce'/>
            <h6>ĐẢM BẢO VỆ SINH ATTP</h6>
            <p>Quy trình sản xuất khép kín, theo tiêu chuẩn về VSATP của bộ y tế.</p>
        </div>
        <div className='intro-item'>
            <img src='./icon3.png' alt='icon-introduce'/>
            <h6>ĐỔI TRẢ SẢN PHẨM</h6>
            <p>Đổi trả sản phẩm trong vòng 24h kể từ thời điểm nhận nếu không hài lòng với bất kỳ lý do gì</p>
        </div>
        <div className='intro-item'>
            <img src='./icon4.png' alt='icon-introduce'/>
            <h6>GIAO HÀNG</h6>
            <p>Giao hàng toàn quốc, thanh toán COD ngay tại nơi nhận hàng.</p>
        </div>
    </div>
  )
}

export default Introduce