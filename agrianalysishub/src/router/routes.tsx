import { lazy } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    defer,
} from "react-router-dom";
import AddFichePage from "../pages/AddFichePAge";
import CollecteFichePage from "../pages/CollecteFichePage";
import DashboardPage from "../pages/DashBoardPage";


import { RequiredAuthenticationContext, DefaultLayout } from "./ContextRouter";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route element={<DefaultLayout />} >
                <Route path="/" element={<DashboardPage />} />
                <Route path="/collecte" element={<CollecteFichePage />} />
                <Route path="/add-new-fiche" element={<AddFichePage />} />
            </Route>
            <Route path="*" element={<div> Not found</div>} />
        </Route>
    )
);