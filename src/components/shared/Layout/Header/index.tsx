import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

type NavLink = {
  title: string;
  to: string;
  iconUrl: string;
  notificationCount?: number;
};

type MenuLink = {
  title: string;
  to: string;
}

const navLinks: NavLink[] = [
  { title: '自分の記録', to: 'my-record', iconUrl: '/icons/icon_memo.png' },
  { title: 'チャレンジ', to: 'challenge', iconUrl: '/icons/icon_challenge.png' },
  { title: 'お知らせ', to: 'info', iconUrl: '/icons/icon_info.png', notificationCount: 1 },
];

const menuLinks: MenuLink[] = [
  { title: '自分の記録', to: 'my-record' },
  { title: '体重グラフ', to: '#' },
  { title: '目標', to: '#' },
  { title: '選択中のコース', to: '#' },
  { title: 'コラム一覧', to: 'column' },
  { title: '設定', to: '#' },
]; 

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <header className={classNames('bg-dark-600', styles.header)}>
      <nav className={classNames('container', styles.headerContainer)}>
        <Link to="/" className='d-inline-flex' >
          <img src='/images/logo.png' alt='Logo' className={styles.logo} />
        </Link>
        <div className={styles.navLinksWrapper}>
          <ul className={classNames('menu-list', styles.navLinks)}>
            {navLinks.map((navItem: NavLink) => (
              <li key={navItem.title}>
                <Link to={navItem.to} className={styles.navItem}>
                  <div className={styles.navIconWrapper}>
                    <img src={navItem.iconUrl} alt={navItem.title} className={styles.navIcon} />
                    {typeof navItem.notificationCount !== 'undefined' && (
                      <span className={classNames('english-text', styles.countBadge)}>{navItem.notificationCount}</span>
                    )}
                  </div>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.dropdownMenu}>
            <button className={styles.btnToggleMenu} onClick={toggleMenu}>
              <img src={isOpenMenu ? "/icons/icon_close.png" : "/icons/icon_menu.png"} alt='Toggle menu' />
            </button>
            {isOpenMenu && (
              <ul className={classNames('menu-list', styles.dropdownMenuContent)}>
                {menuLinks.map((menuItem: MenuLink) => (
                  <li key={menuItem.title}>
                    <Link to={menuItem.to} className={styles.menuItem}>
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
