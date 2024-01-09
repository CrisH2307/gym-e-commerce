import React from "react";

export default function HeaderSection() {
  return (
    <div className="relative flex flex-col min-h-[calc(85vh-48px)] lg:min-h-[calc(75vh-48px)] none none">
      <div className="absolute inset-0 flex -z-100">
        <div className="relative flex-1 overflow-hidden"></div>
      </div>
      <div className="relative w-full flex flex-1">
        <div className="relative flex flex-col flex-1 justify-end">
          <div className="absolute inset-0 flex -z-100">
            <div className="relative flex-1 overflow-hidden"></div>
          </div>
          <div className="z-10 pointer-events-none absolute top-10 bottom-10 left-6 right-6 md:top-14 md:bottom-14 md:left-14 md:right-14 lg:top-20 lg:bottom-20 lg:left-20 lg:right-20">
            <div className="w-full relative px-6 pt-28 pb-10 md:pt-28 md:pb-14 md:px-14 lg:pt-30 lg:pb-20 lg:px-20 flex flex-col gap-y-7 md:gap-y-10">
              <div className="flex flex-col gap-y-4 md:gap-y-5">
                <div className="w-full relative px-6 pt-28 pb-10 md:pt-28 md:pb-14 md:px-14 lg:pt-30 lg:pb-20 lg:px-20 flex flex-col gap-y-7 md:gap-y-10">
                  <p>Introducing</p>
                  <h1 className="font-bold text-h-3xl md:text-h-5xl lg:text-h-4xl xl:text-h-4xl 2xl:text-h-5xl max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-white">
                    Eleiko Cable
                  </h1>
                  <div className="flex">
                    <button className=" bg-slate-50 text-white" style={{ borderRadius: "10px" }}>
<<<<<<< Updated upstream
                      {" "}
=======
>>>>>>> Stashed changes
                      Contact Sale
                    </button>
                    <button style={{ border: "2px solid white", borderRadius: "10px" }}> Explore Eleiko Cable</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="https://imgs.search.brave.com/6-xlDDSc4KAKN2z4k8muT-oR8-O3Ua2EOsuiph1m8j4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTI4/NzU4NDE2L3Bob3Rv/L21vZGVybi1neW0t/aW50ZXJpb3Itd2l0/aC1lcXVpcG1lbnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV9PSHZkdjZnbVVf/eVI0VnlVNElCem8z/eXlReTB5Q3BJdFVj/bVNKQzFvMEk9" />
        </div>
        <div className="relative flex flex-col flex-1 justify-end">
          <img src="https://imgs.search.brave.com/o2NxSu6wYG8KDhYiPtfYMEBaNgT9skPu1BIG9ayj52Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDky/MDYxNDc3L3Bob3Rv/L21vZGVybi1neW0u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXIyaTI5T3pBRGF2/ekVrOVRteVQwaFF2/N3dzQ3RVRExiSmw2/dllIaEc3OTQ9" />
        </div>
      </div>
    </div>
  );
}
