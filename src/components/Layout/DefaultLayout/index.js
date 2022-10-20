import classNames from 'classnames/bind';
import Header from './Header';
import styles from './DefaultLayout.scss';
import Footer from './Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('main-wrap')}>
            <Header />
            <main className={cx('container')}>{children}</main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
