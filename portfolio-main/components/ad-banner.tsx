"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot?: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
};

const AdBanner = ({
  dataAdSlot = "4663635900",
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="w-full my-8 sm:my-12">
      <div className="mx-auto max-w-4xl">
        <div className="relative min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] w-full rounded-lg border border-border/50 bg-muted/20 p-4 overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: "block", minHeight: "250px", borderRadius: "10px" }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive.toString()}
          ></ins>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;