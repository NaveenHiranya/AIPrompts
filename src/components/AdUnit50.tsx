import { useEffect } from "react";

export default function AdUnit50() {
  useEffect(() => {
    // Create script 1
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '6dbd6110b5d6a717bf2afa1158e6c853',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

    // Create script 2 (external)
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src =
      "//www.highperformanceformat.com/6dbd6110b5d6a717bf2afa1158e6c853/invoke.js";

    // Append scripts inside the container
    const adContainer = document.getElementById("ad-slot-" + uniqueId);
    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    // Cleanup
    return () => {
      if (adContainer) {
        adContainer.innerHTML = "";
      }
    };
  }, []);

  // Unique ID so multiple AdUnit components don't conflict
  const uniqueId = Math.random().toString(36).substring(2, 9);

  return (
    <>
      <p className="text-red-600">Ad:</p>
      <div
        id={"ad-slot-" + uniqueId}
        style={{ width: 320, height: 50, margin: "10px auto" }}
      ></div>
    </>
  );
}
