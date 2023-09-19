import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={classnames(styles['container'], 'mb-20')}>
        <div
          className={classnames(
            styles['footer-row'],
            styles['footer-row--margin-bottom'],
          )}
        >
          <div className={styles['footer-row__icon']}>
            <a
              className={styles['footer-row__icon--link']}
              href="https://www.linkedin.com/in/michael-caley-132245a9/"
              title="Michael Caleys LinkedIn page"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div
            className={classnames(
              styles['footer-row__icon'],
              styles['footer-row__icon--padded'],
            )}
          >
            <a
              className={styles['footer-row__icon--link']}
              href="https://github.com/michaelCaleyWhaley"
              title="Michael Caleys GitHub"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          </div>
          <div className={styles['footer-row__icon']}>
            <a
              className={styles['footer-row__icon--link']}
              href="https://www.facebook.com/SirCaley"
              title="Michael Caleys facebook page"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
        <div className={styles['footer-row']}>
          <p className={styles['footer-row__signature']}>
            Michael Caley &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
