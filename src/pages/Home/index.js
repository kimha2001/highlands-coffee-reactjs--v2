import classNames from 'classnames/bind';
import styles from './Home.scss';
import Slider from './Slider';
import Content from './Content';
import HomeBot from './HomeBot';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-container')}>
            <Slider />
            <Content />
            <HomeBot />
        </div>
    );
}

export default Home;
