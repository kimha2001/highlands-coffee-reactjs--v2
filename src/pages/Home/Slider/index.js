import React, { useEffect, useState } from 'react';
import { dataSlider } from './DataSlider';
import classNames from 'classnames/bind';
import styles from './Slider.scss';

const cx = classNames.bind(styles);

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((preValue) => {
                let newValue = preValue + 1;
                if (newValue >= dataSlider.length) {
                    newValue = 0;
                }
                return newValue;
            });
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);

   

    return (
        <div className={cx('slideRow')}>
            {dataSlider.map((slide, index) => (
                <div
                    style={{ backgroundImage: `url('${slide}')` }}
                    className={`bg-item${index == activeIndex ? ' show' : ''}`}
                    key={index}
                ></div>
            ))}
            <div className="dots-wrap">
                {dataSlider.map((item, index) => {
                    return (
                        <span
                            onClick={() => setActiveIndex(index)}
                            className={`dot-item${index == activeIndex ? ' active' : ''}`}
                            key={index}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
