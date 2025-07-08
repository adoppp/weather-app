import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

import { errorSelector } from "@/store/selectors/errorSelector";

type ErrorStateTypes = {
    title: string | number,
    message: string
};

const defaultError = { 
    title: "Unknown Error",
    message: "Something went wrong."
};

export const useErrorPage = () => {
    const [hookError, setHookError] = useState<ErrorStateTypes>(defaultError);
    const routeError = useRouteError();
    const reduxError = useSelector(errorSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (isRouteErrorResponse(routeError)) {
            setHookError({
                title: routeError.status,
                message: routeError.statusText,
            });
        } else if (routeError instanceof Error) {
            setHookError({
                title: routeError.name,
                message: routeError.message,
            });
        } else if (reduxError) {
            setHookError({
                title: reduxError.cod,
                message: reduxError.message,
            });
        } else {
            setHookError(defaultError);
        }
    }, [routeError, reduxError]);
    
    return { hookError };
};