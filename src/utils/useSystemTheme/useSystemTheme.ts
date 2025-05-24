import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '@/storage/reducers/themeSlice';

export const useSystemTheme = () => {
const dispatch = useDispatch();

useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    dispatch(setTheme(mediaQuery.matches ? 'dark' : 'light'));

    const handler = (e: MediaQueryListEvent) => {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    }, [dispatch]);
};