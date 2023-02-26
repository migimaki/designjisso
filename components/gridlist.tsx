import Image from "next/image";
import React from "react";

const GridList = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/cover_a.png"
              alt="cover"
              width={480}
              height={270}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="my-2">
            <p className="text-base">Japan Stories</p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/cover_a.png"
              alt="cover"
              width={480}
              height={270}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="my-2">
            <p className="text-base">Japan Stories</p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/cover_a.png"
              alt="cover"
              width={480}
              height={270}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="my-2">
            <p className="text-base">Japan Stories</p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/cover_a.png"
              alt="cover"
              width={480}
              height={270}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="my-2">
            <p className="text-base">Japan Stories</p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/cover_a.png"
              alt="cover"
              width={480}
              height={270}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="my-2">
            <p className="text-base">Japan Stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridList;
