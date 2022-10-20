import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tea.scss';
import dataTea from './DataTea';
const cx = classNames.bind(styles);

const Tea = () => {
    return (
        <div>
            <div className={cx('wrapTea')}>
                <div className={cx('innerFreeze')}>
                    <div>
                        {dataTea.map((love, index) => {
                            return (
                                <div className={cx('teaElement')}>
                                    <div className={cx('title1')}>{love.title1}</div>
                                    <div className={cx('contentRow')}>
                                        <div className={cx('contentLeft')}>
                                            {love.img1 && <img src={love.img1} />}
                                            <div className={cx('content1')}>{love.content1} </div>
                                            <button>{love.btn}</button>
                                        </div>
                                        <div className={cx('contentRight')}>
                                            <div className={cx('r1')}>
                                                {love.img2 && <img src={love.img2} />}
                                                <div className={cx('r2')}>
                                                    <div className={cx('title2')}>{love.title2} </div>
                                                    <div className={cx('content2')}>{love.content2}</div>
                                                </div>
                                            </div>
                                            <div className={cx('r1')}>
                                                {love.img3 && <img src={love.img3} />}
                                                <div className={cx('r2')}>
                                                    <div className={cx('title2')}>{love.title3} </div>
                                                    <div className={cx('content2')}>{love.content3} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('refer')}>
                <div className={cx('innerFreeze')}></div>
            </div>
        </div>
    );
};

export default Tea;
