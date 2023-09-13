import React from 'react'

import style from "./footer.module.css"
import Fb from "../assets/fb.png"
import Zl from "../assets/zl.png"
import Ig from "../assets/ig.png"
import Yt from "../assets/yt.png"
 
function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
          <div className={style.footerItem}>
            <p className={style.title}>Tổng đài hỗ trợ miễn phí</p>
              <div className={style.footerItemList}>
                  <p>Gọi mua hàng <strong>1800.2097</strong> (7h30 - 22h00)</p>
                  <p>Gọi mua hàng <strong>1800.2063</strong> (8h00 - 21h30)</p>
                  <p>Gọi mua hàng <strong>1800.2064</strong> (8h00 - 21h00)</p>
              </div>
              
          </div>

          <div className={style.footerItem}>
             <p className={style.title}>Thông tin và chính sách</p>
             <div className={style.footerItemList}>
                 <p>Mua hàng và thanh toán Online</p>
                 <p>Mua hàng trả góp Online</p>
                 <p>Chính sách giao hàng</p>
                 <p>Tra điểm Smember</p>
                 <p>Xem ưu đãi Smember</p>
                 <p>Tra thông tin bảo hành</p>
                 <p>Tra cứu hóa đơn điện tử</p>
                 <p>Thông tin hóa đơn mua hàng</p>
                 <p>Trung tâm bảo hành chính hãng</p>
                 <p>Quy định về việc sao lưu dữ liệu</p>
              </div>
            
          </div>

          <div className={style.footerItem}>
             <p className={style.title}>Dịch vụ và thông tin khác</p>
             <div className={style.footerItemList}>
                 <p>Khách hàng doanh nghiệp (B2B) </p>
                 <p>Ưu đãi thanh toán</p>
                 <p>Quy chế hoạt động</p>
                 <p>Chính sách Bảo hành</p>
                 <p>Liên hệ hợp tác kinh doanh</p>
                 <p>Tra thông tin bảo hành</p>
                 <p>Tra cứu hóa đơn điện tử</p>
                 <p>Thông tin hóa đơn mua hàng</p>
                 <p>Trung tâm bảo hành chính hãng</p>
                 <p>Quy định về việc sao lưu dữ liệu</p>
              </div>
            
          </div>

          <div className={style.footerItem}>
             <p className={style.title}>Kết nối với DVP</p>
             <div className={style.listImg}>
                <img src={Fb} alt="fds"/>
                <img src={Zl} alt="fds"/>
                <img src={Ig} alt="fds"/>
                <img src={Yt} alt="fds"/>
             </div>
          </div>
      </div>
          <div className={style.address}>
            <p>Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
          </div>
    </div>
  )
}

export default Footer