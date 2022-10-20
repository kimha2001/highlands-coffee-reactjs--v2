import React from 'react';
import classNames from 'classnames/bind';
import dataCommunity from './DataCommunity';
import styles from './Community.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const Community = () => {
    return (
        <div className={cx('innerCommunity')}>
            <div className={cx('titleCommunity')}>TRÁCH NHIỆM CỘNG ĐỒNG</div>
            <div className={cx('rowCommunity')}>
                {dataCommunity.map((ten, index) => {
                    return (
                        <div key={index} className={cx('cardCommunity')}>
                            <div>
                                <img src={ten.img} />
                                <div className={cx('card-title')}>{ten.title}</div>
                                <div>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: `var(--primary)` }} /> {ten.date}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Community;
