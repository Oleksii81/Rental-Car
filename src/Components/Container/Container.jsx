import { Wrapper } from "./Container.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Container = () => {
    return (
        <Wrapper>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Wrapper>
    );
};

export default Container;