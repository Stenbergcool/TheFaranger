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
        </Head>
        <Hero/>
        <Navbar/>
        <main className="flex justify-center min-h-screen">
            <div className=" w-full max-w-7xl">
        {children}
        </div>
        </main>
        <Footer/>
        </>
    )
}