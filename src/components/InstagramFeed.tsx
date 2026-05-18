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
    <div className="flex w-full justify-center">
      <div className="elfsight-app-fc8cc1fb-ce0e-44db-a40d-255f326d400d min-h-[280px] w-full" />
    </div>
  );
}
