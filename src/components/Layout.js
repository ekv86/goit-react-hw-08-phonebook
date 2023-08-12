import { Suspense } from "react"
import { AppBarEl } from "./AppBar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <AppBarEl />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}