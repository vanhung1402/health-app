
import classNames from 'classnames';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

type FooterNavLink = {
  title: string;
  to: string;
}

const footerNavLinks: FooterNavLink[] = [
  { title: '会員登録', to: '#' },
  { title: '運営会社', to: '#' },
  { title: '利用規約', to: '#' },
  { title: '個人情報の取扱について', to: '#' },
  { title: '特定商取引法に基づく表記', to: '#' },
  { title: 'お問い合わせ', to: '#' }
];

const Footer = () => {
  return (
    <footer className={classNames('bg-dark-600', styles.footer)}>
      <nav className='container'>
        <ul className={classNames('menu-list', styles.navLinks)}>
          {footerNavLinks.map((navLink: FooterNavLink) => (
            <li key={navLink.title}>
              <Link to={navLink.to} className={styles.navItem}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
