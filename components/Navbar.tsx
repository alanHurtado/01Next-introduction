import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import { menuItems } from "./data/menuItems";
export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({href, text}) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </nav>
  );
};
