import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomeBot.scss';
import DataNews from './DataNews';
import DataNewAddress from './DataNewAddress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const homeBot = () => {
    return (
        <di className={cx('homeBotWrap')}>
            <div className={cx('newAddress')}>
                <h2>QUÁN MỚI</h2>
                <div className={cx('newAddressContent')}>
                    {DataNewAddress.map((address, index) => {
                        return (
                            <div>
                                <h3>{address.title} </h3>
                                <h4>{address.address}</h4>
                                <h4>
                                    {address.find} <FontAwesomeIcon icon={faChevronRight} />{' '}
                                </h4>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('news')}>
                <div className={cx('newsWrap')}>
                    <div className={cx('headNews')}>
                        <h2>TIN MỚI NHẤT</h2>
                        <a href="/news" className={cx('seeAll')}>
                            Xem toàn bộ &gt;
                        </a>
                    </div>

                    <div className={cx('listNews')}>
                        {DataNews.map((news, index) => {
                            return (
                                <div className={cx('newsElement')} key={index}>
                                    <img src={news.img} />

                                    <div className={cx('newsCaption')}>
                                        <h4 className={cx('newsTitle')}>{news.title} </h4>
                                        <p className={cx('newsDate')}>
                                            <FontAwesomeIcon icon={faCalendar} /> {news.date}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={cx('inputEmail')}>
                        <input placeholder="Nhập email của bạn để nhận thông tin..."></input>
                        <button>
                            <FontAwesomeIcon icon={faPaperPlane} className={cx('icon')} />
                            GỬI
                        </button>
                    </div>
                </div>
            </div>
        </di>
    );
};

export default homeBot;
