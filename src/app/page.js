import axiosInstanse from "@/Helper/axiosInstance";
import Image from "next/image";
import Link from "next/link";

export async function fetchInfos() {
  const response = await axiosInstanse.get("/infos");
  return response.data.data;
}

async function fetchNews() {
  const response = await axiosInstanse.get("/news/latest");
  return response.data.data;
}

export default async function Home() {
  let data = await fetchInfos();
  data = data.slice(0, 6);
  let latest = await fetchNews();
  latest = latest.slice(0, 6);

  return (
    <div className="container mt-9">
      <h1 className=" text-center mb-8"> Vedic Fact</h1>

      <Link href={`/info/${data[0]._id}`}><div className="relative ">
        <img src={data[0]?.image1 || null} alt="" className="m-auto lg:w-1/2" />
        <h1 className="absolute left-1/2 bottom-3 text-white">
          {data[0]?.title}
        </h1>
      </div>
      </Link>
      <div className="lg:w-3/4 m-auto">
        {data &&
          data.slice(1).map((el) => {
            return (
              <Link href={`/info/${el._id}`}><div className="flex m-10 shadow-lg" key={el._id}>
                <h1 className="mx-6  m-3">{el.title}</h1>
                <img className="w-40 m-3" src={el.image1 || null} alt="" />
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

     <Link href={`/latestnews/${latest[0]._id}`}> <div className="relative ">
        <img src={latest[0]?.image1 || null} alt="" className="m-auto lg:w-1/2" />
        <h1 className="absolute left-1/2 bottom-3 text-white">
          {latest[0]?.title}
        </h1>
      </div>
      </Link>
      <div className="lg:w-3/4 m-auto">
        {latest &&
          latest.slice(1).map((el) => {
            return (
             <Link href={`/latestnews/${el._id}`}> <div className="flex m-10 shadow-lg" key={el._id}>
                <h1 className="mx-6  m-3">{el.title}</h1>
                <img className="w-40 m-3" src={el.image1 || null} alt="" />
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
  );
}
