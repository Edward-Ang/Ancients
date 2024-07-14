'use client';

import Image from "next/image";
import { useState } from "react";

export const ImageWithFallback = ({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => {
                setImgSrc('/cloud_error.jpg'); // Replace with your actual placeholder image path
            }}
        />
    );
};
