import React from 'react';
import { dataContent } from './DataContent';

import classNames from 'classnames/bind';
import styles from './Content.scss';

const cx = classNames.bind(styles);

const content = () => {
    return (
        <div className={cx('banner')}>
            {dataContent.map((banner, index) => {
                if (index % 2 === 0) {
                    <div
                        className={cx('bannerElement')}
                        key={index}
                        style={{
                            backgroundImage: `url(${banner})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('innerBanner')} style={{ marginRight: '0' }}>
                            <button>KHÁM PHÁ THÊM</button>
                        </div>
                    </div>;
                }
                return (
                    <div
                        className={cx('bannerElement')}
                        key={index}
                        style={{
                            backgroundImage: `url(${banner})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('innerBanner')} style={{ margin: '0 auto' }}>
                            <button>KHÁM PHÁ THÊM</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default content;
