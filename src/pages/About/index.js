import React from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';
import dataAbout from './DataAbout';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <div className={cx('aboutWrap')}>
            {dataAbout.map((pen, index) => {
                if (index % 2 === 0)
                    return (
                        <div className={cx('aboutElement')} style={{ backgroundColor: pen.bg }}>
                            <div className={cx('aboutInner')}>
                                <div className={cx('aboutBlog')}>
                                    <div className={cx('titleAbout')}>{pen.title} </div>
                                    <div className={cx('salutationAbout')}>{pen.salutation} </div>
                                    <div className={cx('contentAbout')}>{pen.content} </div>
                                    <button style={{ color: pen.color1, border: '1px solid' || pen.color1 }}>
                                        {pen.btn}
                                    </button>
                                </div>
                            </div>
                            <div className={cx('aboutImg')} style={{ marginLeft: '50%' }}>
                                <img src={pen.img} />
                            </div>
                        </div>
                    );
                return (
                    <div className={cx('aboutElement')} style={{ backgroundColor: pen.bg }}>
                        <div className={cx('aboutInner')}>
                            <div className={cx('aboutBlog')} style={{ marginLeft: '50%', textAlign: 'right' }}>
                                <div className={cx('titleAbout')}>{pen.title} </div>
                                <div className={cx('salutationAbout')}>{pen.salutation} </div>
                                <div className={cx('contentAbout')}>{pen.content} </div>
                                <button style={{ color: pen.color1, border: '1px solid' || pen.color1 }}>
                                    {pen.btn}{' '}
                                </button>
                            </div>
                        </div>
                        <div className={cx('aboutImg')}>
                            <img src={pen.img} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
