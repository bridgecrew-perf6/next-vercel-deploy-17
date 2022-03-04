import { FC } from "react";
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

interface MenuItems {
  text: string,
  href: string
}

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item, index) => {
        return <ActiveLink key={index} text={item.text} href={item.href} />;
      })}
    </nav>
  );
};
export default Navbar;
