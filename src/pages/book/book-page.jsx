import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { BOOKS as books } from 'mocks';

import { defaultBg } from 'assets/images/main-page';

import { Rating, Reviews, BreadCrumbs, Sidebar, GallerySwiper } from 'components';

import styles from './book-page.module.css';

export const BookPage = () => {
  const { bookId } = useParams();
  const book = books.find((item) => item.id === bookId);
  const { title, author, poster, category, rating = 0, isBooked, bookedTill, reviews = [] } = book;
  const [activeImage, setActiveImage] = useState(poster);

  const setImage = (img) => setActiveImage(img);

  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <BreadCrumbs title={title} category={category} />
      <div className={styles.details}>
        <div className='app-container'>
          <div className={styles.detailsInner}>
            <div className={styles.intro}>
              <div className={styles.image}>
                <div className={`${styles.imageWrapper} ${book.images ? styles.hidden : ''}`}>
                  <img src={activeImage ?? defaultBg} alt={title} />
                </div>
                <div className={styles.gallery}>
                  <GallerySwiper currBook={book} setImage={setImage} />
                </div>
              </div>
              <div className={styles.shortDesc}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.author}>{author}</p>
                <button
                  className={bookedTill || isBooked ? `${styles.order} ${styles.booked}` : styles.order}
                  type='button'
                >
                  {bookedTill ? `Занята до ${bookedTill}` : isBooked ? 'Забронирована' : 'Забронировать'}
                </button>
              </div>
              <div className={styles.about}>
                <h4 className={styles.subtitle}>О книге</h4>
                <p>
                  Алгоритмы&nbsp;&mdash; это всего лишь пошаговые алгоритмы решения задач, и&nbsp;большинство таких
                  задач уже были кем-то решены, протестированы и&nbsp;проверены. Можно, конечно, погрузится
                  в&nbsp;глубокую философию гениального Кнута, изучить многостраничные фолианты с&nbsp;доказательствами
                  и&nbsp;обоснованиями, но&nbsp;хотите&nbsp;ли вы&nbsp;тратить на&nbsp;это свое время?
                </p>
                <p>
                  Откройте великолепно иллюстрированную книгу и&nbsp;вы&nbsp;сразу поймете, что алгоритмы&nbsp;&mdash;
                  это просто. А&nbsp;грокать алгоритмы&nbsp;&mdash; это веселое и&nbsp;увлекательное занятие.
                </p>
              </div>
            </div>

            <div className={styles.rating}>
              <h3 className={styles.subtitle}>Рейтинг</h3>
              <div className={styles.estimation}>
                <div className={styles.stars}>
                  <Rating length={rating} />
                </div>
                <span className={styles.estimationCount}>{rating}</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.subtitle}>Подробная информация</h3>
              <div className={styles.lists}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <span className={styles.point}>Издательство</span>
                    <span className={styles.value}>Питер</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Год издания</span>
                    <span className={styles.value}>2019</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Страниц</span>
                    <span className={styles.value}>288</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Переплёт</span>
                    <span className={styles.value}>Мягкая обложка</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Формат</span>
                    <span className={styles.value}>70х100</span>
                  </li>
                </ul>

                <ul className={styles.list}>
                  <li className={styles.item}>
                    <span className={styles.point}>Жанр</span>
                    <span className={styles.value}>Компьютерная литература</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Вес</span>
                    <span className={styles.value}>370 г</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>ISBN</span>
                    <span className={styles.value}>978-5-4461-0923-4</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.point}>Изготовитель</span>
                    <span className={styles.value}>
                      <p>
                        <nobr>ООО &laquo;Питер Мейл&raquo;</nobr>. РФ, 198&#8239;206, г.&nbsp;
                        <nobr>Санкт-Петербург</nobr>, Петергофское ш, д. 73, лит. А29
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Reviews reviews={reviews} />
          </div>
        </div>
      </div>
    </section>
  );
};
