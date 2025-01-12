import axiosInstanse from "@/Helper/axiosInstance";
import Link from "next/link";

export async function fetchInfos() {
  const response = await axiosInstanse.get("/infos");
  if(!response){
    return "something went wrong"
  }
  return response?.data.data;
}

export async function fetchNews() {
  const response = await axiosInstanse.get("/news/latest");
  if(!response){
    return "something went wrong "
  }
  return response?.data.data;
}
export function generateMetadata({params}){
  return{
    title: "vedic gyan",
    description:"vedic gyan koorm kshtriya vedic kshatriya rajput kamma patidar maratha kamboj ror",
    keywords: "koorm kshatriya, vedic kshatriya, rajput, patidar, maratha, kamboj, kamma, kapu, awadhiya, jaiswar, gangwar, katiyar, sainthwar, ror, singror, chandel, patanwar, rathor, gaharwar,",
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

      <Link href={`/info/${data[0].url}`}>
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
              <Link href={`/info/${el.url}`}>
                <div className="flex  shadow-xl lg:m-10 border-t-8" key={el._id}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3 iconimg" src={el.image1 || null} alt="" />
                </div>
              </Link>
            );
          })}
        <Link href={"/info"}>
          <h2 className="mt-4 mx-auto text-gray-50 bg-[#0080c9]  rounded-md w-20 text-center mb-14">
            View All
          </h2>
        </Link>
      </div>

      <h1 className=" text-center mb-8"> Latest News</h1>

      <Link href={`/latestnews/${latest[0].url}`}>
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
              <Link href={`/latestnews/${el.url}`}>
                {" "}
                <div className="flex  shadow-xl border-t-8 lg:m-10" key={el._id}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3 iconimg" src={el.image1 || null} alt="" />
                </div>
              </Link>
            );
          })}
        <Link href={"/latestnews"}>
          <h2 className="mt-4 mx-auto text-gray-50 bg-[#0080c9]  rounded-md shadow-xl w-20 text-center mb-14">
            View All
          </h2>
        </Link>
      </div>
    </div>
    </>
  );
}
