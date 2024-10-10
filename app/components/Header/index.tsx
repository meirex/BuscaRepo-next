import Logo from "../../assets/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image src={Logo} height={48} width={223} alt="logo" quality={80} />
            </Link>
        </header>
    );
}