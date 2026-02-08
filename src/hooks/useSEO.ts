import { useEffect } from 'react';
import seoData from '../data/seo.json';

export function useSEO() {
    useEffect(() => {
        // Update Title
        document.title = seoData.title;

        // Update Meta Tags
        const updateMeta = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        const updateOGMeta = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMeta('description', seoData.description);
        updateMeta('keywords', seoData.keywords);
        updateMeta('author', seoData.author);

        // Update OG Tags
        updateOGMeta('og:title', seoData.og.title);
        updateOGMeta('og:description', seoData.og.description);
        updateOGMeta('og:type', seoData.og.type);
        updateOGMeta('og:locale', seoData.og.locale);

    }, []);
}
