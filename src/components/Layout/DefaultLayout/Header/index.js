import classNames from 'classnames/bind';
import styles from './Header.Module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header-wrap')}>
            <div className={cx('inner')}>
                <a href="/">
                    <img
                        className={cx('logo')}
                        src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/1200px-Highlands_Coffee_logo.svg.png"
                        alt="Highlands Coffee"
                    ></img>
                </a>
                <div className={cx('navBar')}>
                    <div className={cx('topNav')}>
                        <div className={cx('rightNav')}>
                            <div className={cx('search')}>
                                <input placeholder="Từ khóa" />
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                                </button>
                            </div>
                            <div className={cx('language')}>
                                <ul>
                                    <li>
                                        <a>
                                            <img
                                                src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg"
                                                alt="VN"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img
                                                src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg"
                                                alt="EN"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('botNav')}>
                        <ul>
                            <li>
                                <a href="/address">QUÁN CÀ PHÊ</a>
                            </li>
                            <li>
                                <a href="/menu">THỰC ĐƠN</a>
                                <div className={cx('menuMega')}>
                                    <div className={cx('menuGrid')}>
                                        <div className={cx('col1')} style={{ justifyContent: 'space-between' }}>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="/coffee">CÀ PHÊ</a>
                                                </li>

                                                <li>
                                                    <a href="/phincoffee">Cà Phê Phin</a>
                                                </li>
                                                <li>
                                                    <a href="">PhinDi</a>
                                                </li>
                                                <li>
                                                    <a href="">Cà Phê Espresso</a>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="/freeze">FREEZE</a>
                                                </li>

                                                <li>
                                                    <a href="">Freeze Cà Phê Phin</a>
                                                </li>

                                                <li>
                                                    <a href="">Freeze Không Cà Phê</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="/tea">TRÀ</a>
                                                </li>

                                                <li>
                                                    <a href="">Trà Sen Vàng Mới</a>
                                                </li>
                                                <li>
                                                    <a href="">Trà Thạch Đào</a>
                                                </li>
                                                <li>
                                                    <a href="">Trà Thạch Vải</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="/other">KHÁC</a>
                                                </li>

                                                <li>
                                                    <a href="">Bánh Ngọt</a>
                                                </li>
                                                <li>
                                                    <a href="">Merchandise</a>
                                                </li>
                                                <li>
                                                    <a href="">Cà Phê Đóng Gói</a>
                                                </li>
                                                <li>
                                                    <a href="">Thực Đơn Giao Hàng</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx('col2')}>
                                            <div className={cx('col2_banner')}>
                                                <div className={cx('txt')}>
                                                    <a>Phin Sữa Đá Đậm Đà Chất Phin! 29.000đ</a>
                                                </div>
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/news">TIN TỨC</a>
                                <div className={cx('menuMega')}>
                                    <div className={cx('menuGrid')}>
                                        <div className={cx('col1')}>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">TIN TỨC & SỰ KIỆN</a>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">TIN KHUYẾN MẠI</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx('col2')}>
                                            <div className={cx('col2_banner')}>
                                                <div className={cx('txt')}>
                                                    <a>Tự hào sinh ra từ đất Việt, 1999!</a>
                                                </div>
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/community">CỘNG ĐỒNG</a>
                                <div className={cx('menuMega')}>
                                    <div className={cx('menuGrid')}>
                                        <div className={cx('col1')}>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">GIÁ TRỊ VĂN HÓA VIỆT</a>
                                                </li>
                                                <li>
                                                    <a>Đương Đại Hóa Tranh Đông Hồ</a>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">CỘNG ĐỒNG</a>
                                                </li>
                                                <li>
                                                    <a>Lớp Học Cho Em</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx('col2')}>
                                            <div className={cx('col2_banner')}>
                                                <div className={cx('txt')}>
                                                    <a>Đương Đại Hóa Tranh Đông Hồ</a>
                                                </div>
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/about">VỀ CHÚNG TÔI</a>
                                <div className={cx('menuMega')}>
                                    <div className={cx('menuGrid')}>
                                        <div className={cx('col1')}>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">KHỞI NGUỒN</a>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">DỊCH VỤ KHÁCH HÀNG</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className={cx('titleCol1')}>
                                                    <a href="">NGHỀ NGHIỆP</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx('col2')}>
                                            <div className={cx('col2_banner')}>
                                                <div className={cx('txt')}>
                                                    <a>Thương hiệu bắt nguồn từ cà phê Việt!</a>
                                                </div>
                                                <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
