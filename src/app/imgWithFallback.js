'use client';
import Image from "next/image";
import { useState } from "react";
import ImageError from '@/assets/images/404.jpg';

export const ImageWithFallback = ({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [errored, setErrored] = useState(false);

    // Function to check if the URL is HTTP
    const isHttpUrl = (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.protocol === 'http:';
        } catch {
            return false;
        }
    };

    // Determine if the image should be unoptimized
    const shouldUnoptimize = isHttpUrl(src);
    if(shouldUnoptimize === true) console.log(shouldUnoptimize);

    return (
        <Image
            {...props}
            src={errored ? ImageError : imgSrc}
            alt={alt}
            onError={() => {
                if (!errored) {
                    setImgSrc(ImageError);
                    setErrored(true);
                }
            }}
            unoptimized={shouldUnoptimize}
        />
    );
};