import React, { useRef } from 'react';
import dataPhinCoffee from './DataEspressoCoffee';
import classNames from 'classnames/bind';
import styles from './EspressoCoffee.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CommonUtils } from '~/utils/common-utils';

const cx = classNames.bind(styles);

const PhinCoffee = () => {
    const sliderRef = useRef([]);
    const drinkRef = useRef([]);

    const handlePrev = (index) => {
        const maxScrollLeft = sliderRef.current[index].scrollWidth - sliderRef.current[index].clientWidth;
        if (maxScrollLeft > 0) {
            CommonUtils.myScroll(
                sliderRef.current[index],
                300,
                -drinkRef.current[index].clientWidth,
                sliderRef.current[index].scrollLeft,
            );
        }
    };

    const handleNext = (index) => {
        const maxScrollLeft = sliderRef.current[index].scrollWidth - sliderRef.current[index].clientWidth;
        if (sliderRef.current[index].scrollLeft < maxScrollLeft) {
            CommonUtils.myScroll(
                sliderRef.current[index],
                300,
                drinkRef.current[index].clientWidth,
                sliderRef.current[index].scrollLeft,
            );
        }
    };
    return (
        <div className={cx('wrapPhinCoffee')}>
            <div className={cx('innerPhinCoffee')}>
                <div>
                    {dataPhinCoffee.map((phin, index) => {
                        return (
                            <div className={cx('phinCoffeeElement')} key={index}>
                                <div className={cx('left')}>
                                    <div className={cx('title1')}>{phin.title}</div>
                                    <div className={cx('contentLeft')}>{phin.content} </div>
                                    {phin.products.length > 3 && (
                                        <>
                                            <div className={cx('buttonPhinCoffee')}>
                                                <button onClick={() => handlePrev(index)}>
                                                    <FontAwesomeIcon icon={faChevronLeft} />
                                                </button>
                                                <button onClick={() => handleNext(index)}>
                                                    <FontAwesomeIcon icon={faChevronRight} />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                    <div className={cx('cardPhinCoffee')} ref={(el) => (sliderRef.current[index] = el)}>
                                        {phin.products.map((product, idx) => {
                                            return (
                                                <div
                                                    key={idx}
                                                    className={cx('cardPhinElement')}
                                                    ref={(el) => (drinkRef.current[index] = el)}
                                                >
                                                    <div className={cx('cardImg')}>
                                                        <a href={product.link}>
                                                            {!CommonUtils.isNullOrEmpty(`${product.img}`) && (
                                                                <img src={product.img} />
                                                            )}
                                                        </a>
                                                    </div>
                                                    <div className={cx('cardDrink')}>
                                                        <a href={product.link}>{product.drink}</a>
                                                    </div>
                                                    <div>Giá: {product.priceS}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className={cx('right')}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PhinCoffee;
