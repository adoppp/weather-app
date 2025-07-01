export function useTruncNumber(num?: number) {
    return  typeof num === "number" ? Math.trunc(num) : "Not found";
};