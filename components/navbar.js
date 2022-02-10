import Link from 'next/link'
import  styles from './navbar.module.css'

export default function Navbar() {
    return(
        <>
            <nav className={styles.container}>
                <Link href='/'>
                    <a>Home</a>
                </Link>

                <Link href='/add-word'>
                    <a>Add word</a>
                </Link>

                <Link href='/remove-word'>
                    <a>Remove word</a>
                </Link>

                <Link href='/high-score'>
                    <a>High score</a>
                </Link>
            </nav>
        </>
    )
}