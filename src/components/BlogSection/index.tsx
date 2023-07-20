import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { getDateStringFromDate, getTimeStringFromDate } from 'utils/common';

import styles from './index.module.scss';
import { Button } from 'components/common/Button';

const PAGE_SIZE_DEFAULT = 8;

const blogsData = Array(100).fill(0).map((_, index) => ({
  id: index,
  title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
  imageUrl: `/images/column-${(index % 8) + 1}.jpg`,
  tags: ['#魚料理', '#和食', '#DHA'],
  updatedAt: '2023-07-19T14:01:59.366Z'
}));

type Props = {
  className?: string;  
};

export const BlogSection = ({ className }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const blogs = useMemo(() => {
    const itemCount = (currentPage + 1) * PAGE_SIZE_DEFAULT;
    return blogsData.slice(0, itemCount);
  }, [currentPage]);

  const isLastPage = blogs.length >= blogsData.length;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <Link to="/#" key={blog.id} className={styles.blogItem}>
            <div className={styles.imageWrapper}>
              <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
              <p className={styles.blogTime}>
                <span>{getDateStringFromDate(new Date(blog.updatedAt))}</span>
                <span>{getTimeStringFromDate(new Date(blog.updatedAt))}</span>
              </p>
            </div>
            <p className={styles.blogTitle}>{blog.title}</p>
            <div className={styles.blogTags}>
              {blog.tags.map((tag) => (
                <Link to={`/tag/${tag}`} key={`${blog.id}-${tag}`} className={styles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {!isLastPage && (
        <Button className={styles.btnLoadMore} onClick={() => setCurrentPage(currentPage + 1)}>コラムをもっと見る</Button>
      )}
    </div>
  );
};

export default BlogSection;
