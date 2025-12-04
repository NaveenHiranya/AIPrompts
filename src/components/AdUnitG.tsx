import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdUnitG() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense error:", e);
    }
  }, []);

  return (
    <>
    <p className="text-red-600">Google Ad:</p>
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "10px 0" }}
      data-ad-client="ca-pub-3901778993624487"
      data-ad-slot="2762322298"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    </>
  );
}
