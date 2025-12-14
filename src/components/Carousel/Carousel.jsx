import { Carousel } from 'react-responsive-carousel';
import { img } from './images/data';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const CarouselEffect = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
        {img.map((imageItemLink, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={imageItemLink} alt={`carousel-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
