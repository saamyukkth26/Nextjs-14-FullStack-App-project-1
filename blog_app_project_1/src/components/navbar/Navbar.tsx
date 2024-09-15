import Link from "next/link";
import Links from "@/components/navbar/links/Links"
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <Image
                src="/samdevlogo.png"
                width={80}
                height={80}
                alt="Picture of the author"
            /> */}
            <div className={styles.logo}>
                SamDev.-
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
};
export default Navbar;