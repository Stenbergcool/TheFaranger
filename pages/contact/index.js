import { useRouter } from "next/router"

export default function contact() {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>Hello {id}</h1>
    )
}