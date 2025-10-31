"use client";

import { useEffect } from "react";

export default function CSSProvider() {
  useEffect(() => {
    const basePath = process.env.NODE_ENV === "production" ? "/dSign" : "";

    // Set CSS custom properties for background images
    document.documentElement.style.setProperty(
      "--banner-bg-image",
      `url('${basePath}/assets/banner/shapes.svg')`
    );
    document.documentElement.style.setProperty(
      "--clientsay-bg-image",
      `url('${basePath}/assets/clientsay/bgimage.svg')`
    );
  }, []);

  return null;
}
