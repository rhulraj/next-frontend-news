import axiosInstanse from "@/Helper/axiosInstance";
import Head from "next/head";
import shield from '../assets/shield.png'
import Link from "next/link";

export async function fetchInfos() {
  const response = await axiosInstanse.get("/infos");
  return response.data.data;
}

async function fetchNews() {
  const response = await axiosInstanse.get("/news/latest");
  return response.data.data;
}
export function generateMetadata({params}){
  return{
    title: "vedic infos",
    description:"koorm kshtriya vedic kshatriya rajput kamma patidar maratha kamboj ror",
    openGraph: {
      title: "vedic infos",
      description: "koorm kshtriya vedic kshatriya rajput kamma patidar maratha kamboj ror",
      url: "https://www.vedicinfos.in", // Replace with your URL
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dyufylq1y/image/upload/v1736432155/shield_16449784_kjcpap.png", // Replace with your image URL
          width: 800,
          height: 600,
          alt: "Vedic Infos",
        },
      ],
    },
        
  }

}
export default async function Home() {
  let data = await fetchInfos();
  data = data.slice(0, 6);
  let latest = await fetchNews();
  latest = latest.slice(0, 6);

  return (
    <>
    <div className="container mt-9">
      
      <h1 className=" text-center mb-8"> Vedic Fact</h1>

      <Link href={`/info/${data[0]._id}`}>
        <div className="relative ">
        <h1 className=" text-black bottom-3 ">
            {data[0]?.title}
          </h1>
          <img
            src={data[0]?.image1 || null}
            alt=""
            className="m-auto lg:w-1/2"
          />
          
        </div>
      </Link>
      <div className="lg:w-3/4 m-auto my-8">
        {data &&
          data.slice(1).map((el) => {
            return (
              <Link href={`/info/${el._id}`}>
                <div className="flex  shadow-lg lg:m-10" key={el._id}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3 iconimg" src={el.image1 || null} alt="" />
                </div>
              </Link>
            );
          })}
        <Link href={"/info"}>
          <h2 className="mt-4 mx-auto bg-lime-500 w-20 text-center mb-14">
            View All
          </h2>
        </Link>
      </div>

      <h1 className=" text-center mb-8"> Latest News</h1>

      <Link href={`/latestnews/${latest[0]._id}`}>
        {" "}
        <div className="relative ">
        <h1 className="">
            {latest[0]?.title}
          </h1>
          <img
            src={latest[0]?.image1 || null}
            alt=""
            className="m-auto lg:w-1/2"
          />
          
        </div>
      </Link>
      <div className="lg:w-3/4 m-auto my-8">
        {latest &&
          latest.slice(1).map((el) => {
            return (
              <Link href={`/latestnews/${el._id}`}>
                {" "}
                <div className="flex  shadow-lg lg:m-10" key={el._id}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3 iconimg" src={el.image1 || null} alt="" />
                </div>
              </Link>
            );
          })}
        <Link href={"/latestnews"}>
          <h2 className="mt-4 mx-auto bg-lime-500 w-20 text-center mb-14">
            View All
          </h2>
        </Link>
      </div>
    </div>
    </>
  );
}
