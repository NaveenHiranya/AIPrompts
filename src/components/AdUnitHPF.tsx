import { useEffect } from "react";

interface AdUnitHPFProps {
  id?: string;
  className?: string;
  showLabel?: boolean;
}

export default function AdUnitHPF({
  id = "ad-hpf",
  className = "",
  showLabel = false,
}: AdUnitHPFProps) {
  useEffect(() => {
    const oldScript = document.getElementById(`${id}-script`);
    if (oldScript) oldScript.remove();

    const container = document.getElementById(id);

    (window as any).atOptions = {
      key: "32b3e414aaf9ed182036eaf0658fad70",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.id = `${id}-script`;
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/32b3e414aaf9ed182036eaf0658fad70/invoke.js";
    script.async = true;

    // 🔥 IMPORTANT: append inside the container, not body
    container?.appendChild(script);

    return () => {
      const s = document.getElementById(`${id}-script`);
      if (s) s.remove();
      delete (window as any).atOptions;
    };
  }, [id]);

  return (
    <div className={className}>
      {showLabel && (
        <p className="text-red-500 text-sm mb-1">Sponsored Ad:</p>
      )}
      <div id={id}></div>
    </div>
  );
}
