import { SigninButton } from '../SigninButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <text>New.Post</text>
        {/* <img src="/images/logo.svg" alt="news" /> */}
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <>Home</>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <>Posts</>
          </ActiveLink>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}