import { useRouter } from "next/router"

export default function article() {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>Hello {id}</h1>
    )
}


export async function getStaticProps() {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
}