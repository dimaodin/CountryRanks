import Link from "next/link"
import Head from "next/head"
import styles from './Layout.module.css'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { useEffect, useState } from "react"

const Layout = ({children}) => {
    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme")
        )
        setTheme(localStorage.getItem("theme"))
    })

    const switchTheme = ()=>{
        if(theme === 'light'){
           saveTheme('dark')
        }else{
            saveTheme('light')
        }
    }

    const saveTheme = (theme)=>{
        setTheme(theme)
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute('data-theme', theme)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>🌍 Country Ranks</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <header className={styles.header}>
                <Link href="/">
                🗺️ Country Ranks
                </Link>
                <div className={styles.switcher}>
                <FlashOnIcon onClick={switchTheme}></FlashOnIcon>
                </div>

            </header>

            <main className={styles.main}>
            {children}
            </main>

            <footer className={styles.footer}>
            Made with ❤️ by <Link href="https://dimaodin.com">Dima Odinsov</Link>.
            </footer>
    </div>
    )
}

export default Layout
