'use client';

import Image from "next/image";
import { useState } from "react";
import ImageError from '@/assets/images/cloud_error.jpg';

export const ImageWithFallback = ({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => {
                setImgSrc(ImageError);
            }}
        />
    );
};
