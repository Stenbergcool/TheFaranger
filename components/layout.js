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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300&display=swap" rel="stylesheet" />

        </Head>
        <Hero/>
        <Navbar/>
        <main className="flex justify-center min-h-screen bg-gradient-to-b">
            <div className=" w-full max-w-7xl">
        {children}
        </div>
        </main>
        <Footer/>
        </>
    )
}