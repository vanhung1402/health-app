import { useEffect, useState } from "react";
import classNames from "classnames";

import styles from './index.module.scss';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  });

  return (
    <button className={classNames(styles.btnBackToTop, {'d-none': !visible})} onClick={handleScrollToTop}>
      <img src="/icons/component_scroll.png" alt="Back to top button" />
    </button>
  );
};

export default BackToTopButton;
