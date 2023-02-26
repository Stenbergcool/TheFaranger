import Navbar from "./navbar"
import Footer from "./footer"
import Head from 'next/head'
import Hero from "./hero"

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title>Thailand Guide</title>
        </Head>
        <Hero/>
        <Navbar/>
        <main className="flex justify-center min-h-screen pt-10">
        {children}
        </main>
        <Footer/>
        </>
    )
}