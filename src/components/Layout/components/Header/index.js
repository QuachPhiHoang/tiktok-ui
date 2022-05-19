import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faArrowRightFromBracket,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuitem) => {
        console.log(menuitem);
    };

    const MENU_ITEMS = [
        {
            title: 'English',
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            children: {
                title: 'language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            title: 'Feedback and Help',
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            to: '/feedback',
        },
        {
            title: 'Keyboard shortcuts',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
        },
    ];

    const userMenu = [
        {
            title: 'View Profile',
            icon: <FontAwesomeIcon icon={faUser} />,
            to: '/@hoaa',
        },
        {
            title: 'Get coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/getcoins',
        },
        {
            title: 'Setting',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('inbox-info')}>19</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/38cadbe1e0a54cc0bdb8530d2f2c8978~c5_100x100.jpeg?x-expires=1652673600&x-signature=qb279MR1aOaegWAM9sp%2BWalx8fk%3D"
                                alt="Nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
