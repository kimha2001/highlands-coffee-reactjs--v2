import styles from './Menu.scss';
import classNames from 'classnames/bind';
import dataMenu from './DataMenu';

const cx = classNames.bind(styles);

const Menu = () => {
    return (
        <div className={cx('menuWrap')}>
            {dataMenu.map((drink, index) => {
                if (index % 2 === 0) {
                    return (
                        <div
                            className={cx('menuElement')}
                            style={{
                                backgroundImage: `url(${drink.bg})`,
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className={cx('innerMenu')}>
                                <div className={cx('rowLeft')}>
                                    <div className={cx('title')} style={{ color: drink.font_color }}>
                                        {drink.title}
                                    </div>
                                    <div className={cx('content')} style={{ color: drink.font_color }}>
                                        {drink.content}{' '}
                                    </div>
                                    <button className={cx('btn')} style={{ color: drink.font_color }}>
                                        {drink.btn}
                                    </button>
                                </div>
                                <img className={cx('img')} src={drink.img}></img>
                            </div>
                        </div>
                    );
                }
                return (
                    <div
                        className={cx('menuElement')}
                        style={{
                            backgroundImage: `url(${drink.bg})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={cx('innerMenu')} style={{ textAlign: 'right' }}>
                            <img className={cx('img')} src={drink.img}></img>
                            <div className={cx('rowLeft')}>
                                <div className={cx('title')} style={{ color: drink.font_color }}>
                                    {drink.title}
                                </div>
                                <div className={cx('content')} style={{ color: drink.font_color }}>
                                    {drink.content}{' '}
                                </div>
                                <button className={cx('btn')} style={{ color: drink.font_color }}>
                                    {drink.btn}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
