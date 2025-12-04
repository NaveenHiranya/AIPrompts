import { useEffect } from "react";

export default function AdUnitNative() {
  const containerId = "container-156795e882446485cb5379ce3382344c";

  useEffect(() => {
    // Create script tag
    const script = document.createElement("script");
    script.src = "//pl28179829.effectivegatecpm.com/156795e882446485cb5379ce3382344c/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // Append script inside the container
    const container = document.getElementById(containerId);
    if (container) container.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div
      id={containerId}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "10px 0"
      }}
    ></div>
  );
}
