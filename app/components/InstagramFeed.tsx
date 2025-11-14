"use client";

import React from 'react'
import { useEffect } from "react";

export default function InstagramFeed() {
        useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute("data-use-service-core", "");
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            {/* Replace with your Elfsight widget ID */}
            <div className="elfsight-app-fc8cc1fb-ce0e-44db-a40d-255f326d400d"></div>
        </div>
    )
}