import React from 'react';
import classNames from 'classnames/bind';
import styles from './Address.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faDisplay, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Address = () => {
    return (
        <div className={cx('wrapAddress')}>
            <div className={cx('title')}>TÌM QUÁN CÀ PHÊ</div>
            <div>
                <ul className={cx('grid')}>
                    <li>
                        <button>
                            Việt Nam <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </li>
                    <li>
                        <button>
                            Chọn Thành Phố <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </li>
                    <li>
                        <button>
                            Chọn Quận/Huyện <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </li>
                    <li>
                        <button>
                            Tiện ích <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </li>
                    <li>
                        <input placeholder="Nhập tên đường, hoặc quán..."></input>
                    </li>
                    <li>
                        <button className={cx('search1')} style={{ width: '120px', padding: '11px 20px' }}>
                            <FontAwesomeIcon icon={faSearch} style={{}} />
                            Tìm kiếm
                        </button>
                    </li>
                </ul>
            </div>

            <div className={cx('map')}>
                <div className={cx('resultInfo')}>
                    <div className={cx('headerResultInfo')}>Tìm được 0 quán </div>
                    <div className={cx('contentResultInfo')}></div>
                </div>
                <div className={cx('ggMap')}>
                    <iframe
                        className={cx('ggMap1')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6460870848778!2d105.79240685867708!3d21.006819269595223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad209647410b%3A0xf138df688bc6f857!2sHighlands%20Coffee%20Vincom!5e0!3m2!1svi!2s!4v1665047956382!5m2!1svi!2s"
                    ></iframe>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Address;
