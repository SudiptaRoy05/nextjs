import Link from "next/link"

const page = () => {
    return (
        <div>
            User

            <div className="flex flex-col gap-2">
                <Link href="/dashboard/users/1">user-1</Link>
                <Link href="/dashboard/users/2">user-2</Link>
                <Link href="/dashboard/users/3">user-3</Link>
                <Link href="/dashboard/users/4">user-4</Link>

            </div>
        </div>
    )
}

export default page
