import Image from "next/image";

export default function Banner() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2  md:mx-auto items-center md:px-24" style={{
      maxHeight: "1000px",
    }}>
      <div className="order-last xl:order-first mt-4  md:mt-32">
        <div className="p-4 text-5xl text-center md:text-left md:text-6xl text-purple-900 tracking-wide">Fatbridge</div>
        <div className=" text-center md:text-justify text-3xl text-purple-800">STEM + C program</div>
        <div className="text-left mx-2 mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ex tempore facilis delectus ducimus quam natus nam quae vitae voluptatem esse reprehenderit excepturi voluptatibus accusamus. Dolorum, ratione! Similique, quam quas.</div>
      </div>
      <div className="order-first xl:order-last mt-32">
      <Image
          src="/stem.svg"
          alt="Student Ambassador Image"
          width={500}
          height={400}
        />
      </div>

     

    </div>
  );
}
