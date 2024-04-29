import Image from "next/image";

export default function Apparel() {
  return (
    <div className="flex mx-16 mt-7">
      <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-3">
        <div className="flex relative overflow-hidden ">
          <div className="relative overflow-hidden bg-blue-950">
            <Image
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F3d0804702c32f89bca4e7276e87af61b.webp&w=3840&q=75"
              alt="T-shirts"
              width={3840}
              height={2160}
              className="object-cover transition-opacity duration-200 group-hover:opacity-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <h1 className="text-white font-bold text-4xl pl-10 pb-8">T-shirts</h1>
            <div className="flex flex-wrap gap-4 items-center pl-10">
              <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                  Shop Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-3 ">
        <div className="flex relative overflow-hidden ">
          <div className="relative overflow-hidden bg-blue-950">
            <Image
              alt="Sweatshirts"
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Fe348ed50000ccc92ccf622cda94c1cb4.webp&w=3840&q=75"
              width={3840}
              height={2160}
              className="object-cover transition-opacity duration-200 group-hover:opacity-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <h1 className="text-white font-bold text-4xl pl-10 pb-8">Sweatshirts</h1>
            <div className="flex flex-wrap gap-4 items-center pl-10">
              <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                  Shop Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-3">
        <div className="flex relative overflow-hidden ">
          <div className="relative overflow-hidden bg-blue-950">
            <Image
              alt="Hoodies"
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F76658b4da584e6fe953c15f453e12c10.webp&w=3840&q=75"
              className="object-cover transition-opacity duration-200 group-hover:opacity-75"
              width={3840}
              height={2160}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <h1 className="text-white font-bold text-4xl pl-10 pb-8">Hoodies</h1>
            <div className="flex flex-wrap gap-4 items-center pl-10">
              <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                  Shop Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-3">
        <div className="flex relative overflow-hidden ">
          <div className="relative overflow-hidden bg-blue-950">
            <Image
              alt="Bottoms"
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F58f66d6b7d210ffe849af9f7edcbd40e.webp&w=3840&q=75"
              width={3840}
              height={2160}
              className="object-cover transition-opacity duration-200 group-hover:opacity-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <h1 className="text-white font-bold text-4xl pl-10 pb-8">Bottoms</h1>
            <div className="flex flex-wrap gap-4 items-center pl-10">
              <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                  Shop Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
