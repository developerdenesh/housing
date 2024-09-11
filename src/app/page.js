import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Welcome to the page for all housing needs

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/main"
            rel="noopener noreferrer"
          >
            Start
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="/examples"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
      </footer>
    </div>
  );
}
