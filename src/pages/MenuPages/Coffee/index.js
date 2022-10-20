import React from 'react';
import classNames from 'classnames/bind';
import styles from './Coffee.scss';
import dataCoffee from './DataCoffee';
const cx = classNames.bind(styles);

const Coffee = () => {
    return (
        <div>
            <div className={cx('wrapCoffee')}>
                <div className={cx('innerCoffee')}>
                    <div>
                        {dataCoffee.map((love, index) => {
                            return (
                                <div className={cx('coffeeElement')}>
                                    <div className={cx('title1')}>{love.title1}</div>
                                    <div className={cx('contentRow')}>
                                        <div className={cx('contentLeft')}>
                                            {love.img1 && <img src={love.img1} />}
                                            <div className={cx('content1')}>{love.content1} </div>
                                            <button>{love.btn}</button>
                                        </div>
                                        <div className={cx('contentRight')}>
                                            {love.products.map((product, idx) => {
                                                return (
                                                    <div className={cx('r1')} key={idx}>
                                                        {product.img2 && <img src={product.img2} />}
                                                        <div className={cx('r2')}>
                                                            <div className={cx('title2')}>{product.title2} </div>
                                                            <div className={cx('content2')}>{product.content2}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('refer')}>
                <div className={cx('innerCoffee')}></div>
            </div>
        </div>
    );
};

export default Coffee;
