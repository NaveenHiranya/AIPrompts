import { useEffect } from "react";

interface AdUnit2Props {
  id?: string; // optional unique ID
  className?: string;
}

export default function AdUnitSocial({ id = "ad-script-2", className }: AdUnit2Props) {
  useEffect(() => {
    // Remove old script if exists
    const oldScript = document.getElementById(id);
    if (oldScript) oldScript.remove();

    // Clear container
    const container = document.getElementById(id);
    if (container) container.innerHTML = "";

    // Create script element
    const script = document.createElement("script");
    script.id = id;
    script.type = "text/javascript";
    script.src = "//pl28185165.effectivegatecpm.com/8e/d9/e0/8ed9e0d494732c88c49514fe24b93a32.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = "";
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [id]);

  return <div id={id} className={className}></div>;
}
