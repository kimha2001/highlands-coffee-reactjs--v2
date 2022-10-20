import React from 'react';
import styles from './Footer.Module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const footerMain = () => {
    return (
        <footer className={cx('footerWrap')}>
            <div className={cx('inner')}>
                <div className={cx('icon')}></div>
                <div className={cx('licence')}>© 2018 Highlands Coffee. All rights reserved</div>
                <div className={cx('registerLicence')}>
                    <FontAwesomeIcon icon={faPaperPlane} /> Đăng ký để nhận bản tin
                </div>
                <div className={cx('email')}>
                    <FontAwesomeIcon icon={faEnvelope} /> customerservice@highlandscoffee.com.vn
                </div>
            </div>
        </footer>
    );
};

export default footerMain;
