import Navbar from "./navbar"
import Footer from "./footer"
import Head from 'next/head'
import Hero from "./hero"

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title>Thailand Guide</title>
            <meta name="description" content="thailand guide"></meta>
            <link rel="icon" type="image/x-icon" href="/favicon_io/favicon-32x32.png"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300&display=swap" rel="stylesheet" />

        </Head>
        <Hero/>
        <Navbar/>
        <main className="md:flex justify-center min-h-screen w-full">
            <div className=" w-full">
        {children}
        </div>
        </main>
        <Footer/>
        </>
    )
}