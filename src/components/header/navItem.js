import Link from "next/link"

const InteoNavItem =({path, children})=>{
    return <li>
        <Link href={"#"}>{children}</Link>
    </li>
}

export default InteoNavItem