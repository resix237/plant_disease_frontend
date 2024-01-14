import { Outlet, Navigate } from "react-router-dom";
import OperateurLayout from "../components/layouts/OperateurLayout";



export const RequiredAuthenticationContext = () => {
    // const [token, setToken] = useLocalStorage("token", null);
    return (
        <>
            {/* {token !== null ? <Outlet /> : <Navigate to="/" />} */}
        </>
    );
}
export const DefaultLayout = () => {

    return (
        <OperateurLayout>
            <Outlet />
        </OperateurLayout>
    );
}

