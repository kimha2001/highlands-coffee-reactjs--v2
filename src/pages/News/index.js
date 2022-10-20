import React from 'react';
import styles from './News.scss';
import classNames from 'classnames/bind';
import dataNews from './DataNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const News = () => {
    return (
        <section className={cx('News')}>
            <div className={cx('News1')}>TIN TỨC</div>
            <div className={cx('row')}>
                {dataNews.map((news, index) => {
                    return (
                        <div className="cardNews" key={index}>
                            <img src={news.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: `var(--primary)` }} />{' '}
                                    {news.date}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default News;
