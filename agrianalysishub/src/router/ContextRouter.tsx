import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import OperateurLayout from "../components/layouts/OperateurLayout";

const ratio = 0.1;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
        if (entry.intersectionRatio > ratio) {
            console.log("Intersection ratio");
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    });
};

export const DefaultLayout = () => {


    return (
        <OperateurLayout>
            <Outlet />
        </OperateurLayout>
    );
}

