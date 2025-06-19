import { useMemo } from "react";

export function useTruncNumber(num?: number) {
    return useMemo(() => {
        return typeof num === "number" ? Math.trunc(num) : "Not found";
    }, [num]);
};