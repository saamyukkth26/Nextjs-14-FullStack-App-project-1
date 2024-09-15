"use client";

import {useState} from 'react';
import styles from "./links.module.css"
import NavLinks from "@/components/navbar/links/NavLinks/NavLinks"

const links = [
  {
      title: "Homepage",
      path: "/",
  },
  {
      title: "About",
      path: "/about",
  },
  {
      title: "Contact",
      path: "/contact",
  },
  {
      title: "Blog",
      path: "/blog/saamyukkth",
  },
];


const Links = () => {


    const [open, setOpen] = useState(false); //defining a useState hook to make the navbar menu responsive


    const session = true;
    const isAdmin = false;

    return (
        <div className={styles.container}>
          <div className={styles.links}>
            {links.map((link) => (
              <NavLinks item={link} key={link.title} />
            ))}
            {session?(
              <>
                {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
                <button className={styles.logout}>Logout</button>
              </>
            ) : (
              <NavLinks item={{ title: "Login", path: "/login" }} />
            )}
          </div>
          <button className={styles.menuButton} onClick={() => setOpen((prev)=>!prev)}>Menu</button>
          {
            open && (
            <div className={styles.mobileLinks}>
              {links.map((link)=>(
                <NavLinks item = {link} key = {link.title} />
              ))}
            </div>
          )}
        </div>
    );
};

export default Links;