import { Outlet } from "react-router-dom"
import DefaultHeader from "./DefeaultHeader"

const DefaultLayout = () => {
    return (
        <>
            <DefaultHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout;