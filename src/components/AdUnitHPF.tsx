import { useEffect } from "react";

interface AdUnitHPFProps {
  id?: string; // unique ID for container
  className?: string; // optional Tailwind / CSS classes
  showLabel?: boolean; // optional label above the ad
}

export default function AdUnitHPF({
  id = "ad-hpf",
  className,
  showLabel = false,
}: AdUnitHPFProps) {
  useEffect(() => {
    // Remove old script if exists
    const oldScript = document.getElementById(`${id}-script`);
    if (oldScript) oldScript.remove();

    // Clear container
    const container = document.getElementById(id);
    if (container) container.innerHTML = "";

    // Define global atOptions for this ad
    (window as any).atOptions = {
      key: "32b3e414aaf9ed182036eaf0658fad70",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create and append the script
    const script = document.createElement("script");
    script.id = `${id}-script`;
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/32b3e414aaf9ed182036eaf0658fad70/invoke.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      if (container) container.innerHTML = "";
      const s = document.getElementById(`${id}-script`);
      if (s) s.remove();
      delete (window as any).atOptions;
    };
  }, [id]);

  return (
    <div className="w-full flex flex-col items-center">
      {showLabel && <p className="text-red-500 mb-2">Sponsored Ad:</p>}
      <div id={id} className={className}></div>
    </div>
  );
}
