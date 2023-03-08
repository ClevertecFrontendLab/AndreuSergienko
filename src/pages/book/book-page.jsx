import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchBook } from 'store';

import { BreadCrumbs, ErrorTooltip, GallerySwiper, Rating, Reviews, Sidebar } from 'components';

import styles from './book-page.module.css';

export const BookPage = () => {
  const { bookId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currBook = useSelector((state) => state.currentBook.book);
  const isBookError = useSelector((state) => state.error.currBookError);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      dispatch(fetchBook(bookId));
    } else {
      navigate('/auth');
    }
  }, [bookId, dispatch, navigate]);

  const setImage = (img) => setActiveImage(img);

  if (isBookError) {
    return <ErrorTooltip />;
  }

  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <BreadCrumbs title={currBook?.title} />
      <div className={styles.details}>
        <div className='app-container'>
          <div className={styles.detailsInner}>
            <div className={styles.intro}>
              <div className={styles.image}>
                <div className={`${styles.imageWrapper} ${currBook?.images.length > 2 ? styles.hidden : ''}`}>
                  <img src={activeImage ?? currBook?.images[0]?.url} alt={currBook?.title} />
                </div>
                <div className={styles.gallery}>
                  <GallerySwiper currBook={currBook} setImage={setImage} />
                </div>
              </div>
              <div className={styles.shortDesc}>
                <h2 className={styles.title} data-test-id='book-title'>
                  {currBook?.title}
                </h2>
                <p className={styles.author}>
                  {currBook?.authors.map((author) => `${author}, `)} {currBook?.issueYear}
                </p>
                <button
                  className={
                    currBook?.delivery?.dateHandedTo || currBook?.booking?.order
                      ? `${styles.order} ${styles.booked}`
                      : styles.order
                  }
                  type='button'
                >
                  {currBook?.delivery?.dateHandedTo
                    ? `Занята до 05.02`
                    : currBook?.booking?.order
                    ? 'Забронирована'
                    : 'Забронировать'}
                </button>
              </div>
              <div className={styles.about}>
                <h4 className={styles.subtitle}>О книге</h4>
                <p>{currBook?.description}</p>
              </div>
            </div>

            <div className={styles.rating}>
              <h3 className={styles.subtitle}>Рейтинг</h3>
              <div className={styles.estimation}>
                <div className={styles.stars}>
                  <Rating length={currBook?.rating} />
                </div>
                <span className={styles.estimationCount}>{currBook?.rating}</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.subtitle}>Подробная информация</h3>
              <div className={styles.lists}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <span className={styles.point}>Издательство</span>
                    <span className={styles.value}>{currBook?.publish}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Год издания</span>
                    <span className={styles.value}>{currBook?.issueYear}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Страниц</span>
                    <span className={styles.value}>{currBook?.pages}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Переплёт</span>
                    <span className={styles.value}>{currBook?.cover}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Формат</span>
                    <span className={styles.value}>{currBook?.format}</span>
                  </li>
                </ul>

                <ul className={styles.list}>
                  <li className={styles.item}>
                    <span className={styles.point}>Жанр</span>
                    <span className={styles.value}>{currBook?.categories.map((item) => item).join(', ')}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Вес</span>
                    <span className={styles.value}>{currBook?.weight} г</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>ISBN</span>
                    <span className={styles.value}>{currBook?.ISBN}</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Изготовитель</span>
                    <span className={styles.value}>{currBook?.producer}</span>
                  </li>
                </ul>
              </div>
            </div>

            <Reviews reviews={currBook?.comments} />
          </div>
        </div>
      </div>
    </section>
  );
};
