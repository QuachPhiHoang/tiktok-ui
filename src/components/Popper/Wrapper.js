import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrapper({ children, classNames }) {
    return <div className={cx('wrapper', 'menu-poper')}>{children}</div>;
}

export default Wrapper;
