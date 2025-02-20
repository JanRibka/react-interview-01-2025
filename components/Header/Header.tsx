import Link from "next/link";
import React from "react";

import Container from "@/components/Container";

import Courses from "./Courses";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.base}>
    <Container>
      <div className={styles.logo}>Awesome project</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <Courses />
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
