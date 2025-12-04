import { useEffect } from "react";

interface AdUnitHPFProps {
  id?: string; // optional unique ID for container
  className?: string;
}

export default function AdUnitHPF({ id = "ad-hpf", className }: AdUnitHPFProps) {
  useEffect(() => {
    // Remove old script if exists
    const oldScript = document.getElementById(`${id}-script`);
    if (oldScript) oldScript.remove();

    // Clear container
    const container = document.getElementById(id);
    if (container) container.innerHTML = "";

    // Add global atOptions
    (window as any).atOptions = {
      key: "32b3e414aaf9ed182036eaf0658fad70",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create script element
    const script = document.createElement("script");
    script.id = `${id}-script`;
    script.type = "text/javascript";
    script.src = "//www.highperformanceformat.com/32b3e414aaf9ed182036eaf0658fad70/invoke.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = "";
      const s = document.getElementById(`${id}-script`);
      if (s) s.remove();
      delete (window as any).atOptions;
    };
  }, [id]);

  return <><p className="text-red-500">Ad HPF:</p><div id={id} className={className}></div></>;
}
