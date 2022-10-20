import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import dataPhinCoffee from '~/pages/MenuPages/Coffee/PhinCoffee/DataPhinCoffee';
import classNames from 'classnames/bind';
import styles from './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CommonUtils } from '~/utils/common-utils';

const cx = classNames.bind(styles);

function Detail() {
    let { id } = useParams();
    let product;
    let products = [];

    dataPhinCoffee.forEach((item) => {
        const temp = item.products.find((product) => {
            if (product.productId === id) {
                return product;
            }
        });
        if (temp) {
            product = temp;
            products = item.products.filter((product) => product.productId !== id);
            return;
        }
    });

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
        console.log('123');
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
        <div className={cx('innerProduct')}>
            <div className={cx('LeftProduct')}>
                <div className={cx('topProduct')}>
                    <div className={cx('titleProduct')}>{product.drink} </div>
                    <div className={cx('bagProduct')}>
                        <div className={cx('imgStarProduct')}>
                            <img src={product.img} />
                        </div>
                        <div className={cx('contentProduct')}>
                            <div className={cx('textProduct')}>{product.text}</div>
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/65-dat-mua-kmk.png"></img>
                            <div className={cx('sizeProduct')}>
                                Size:
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                            </div>
                            <div className={cx('priceProduct')}>Giá: </div>
                        </div>
                    </div>

                    <div className={cx('buttonScroll')}>
                        <button onClick={() => handlePrev}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={() => handleNext}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                <div className={cx('botProduct')} ref={(el) => (sliderRef.current = el)}>
                    {products.map((duc, index) => {
                        return (
                            <div key={index} className={cx('cardProduct')} ref={(el) => (drinkRef.current[index] = el)}>
                                <div className={cx('cardImgProduct')}>
                                    <a href={`/detail/${duc.productId}`}>
                                        {!CommonUtils.isNullOrEmpty(`${duc.img}`) && <img src={duc.img} />}
                                    </a>
                                </div>
                                <div className={cx('nameDrink')}>
                                    <a href={`/detail/${duc.productId}`}>{duc.drink}</a>
                                </div>
                                <div>Giá: {duc.priceS}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('rightProduct')}></div>
        </div>
    );
}

export default Detail;
