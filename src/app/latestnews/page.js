import axiosInstanse from "@/Helper/axiosInstance";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

async function fetchInfo (){
   try{
       const response = await axiosInstanse.get('/news/latest')
       if(!response){
        return "something went wrong "
      }
       return response?.data.data
   }catch(err){
        console.log(err)
   }
}


export function generateMetadata({params}){
   return{
     title: "latest news",
     description:"latest news of internation local news",
     keywords: "koorm kshatriya, vedic kshatriya, rajput, patidar, maratha, kamboj, kamma, kapu, awadhiya, jaiswar, gangwar, katiyar, sainthwar, ror, singror, chandel, patanwar, rathor, gaharwar,",
     openGraph: {
       title: "latest news",
       description: "koorm kshtriya vedic kshatriya rajput kamma patidar maratha kamboj ror",
       url: "https://www.vedicinfos.in/latestnews", // Replace with your URLś
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



async function Latest(){

   const data = await fetchInfo();

   //  const [initial, setIntial] = useState(0);
   //  const [end, setEnd] = useState(20);
   //  const [page, setPage] = useState(1)
   //  const router = useRouter();
   //  const [data , setInfo] = useState([]);
 
    


   // function next(){
   //      setEnd( end + 20 );
   //      setIntial( initial + 20 );
   //      setPage(page + 1)
   //   }

   //   async function handleFetchId(id){
   //      try{
   //          router.push(`/infos/${id}`)
   //      }catch(error){
   //          console.error("fetching infos by id")
   //      }
           
   //      }

   //   function previous(){
   //      setEnd( end - 2 );
   //      setIntial( initial - 2 );
   //      setPage(page - 1)
   //   }

   //   useEffect(()=>{
   //    const fetchInfo = async ()=>{
   //    try{
         
   //       const response = await axiosInstanse.get('/infos')
         
   //       console.log("API Response", response.data);
   //       setInfo(response.data)
   //       }catch(error){
   //            console.error("Error fetching info", error)
   //       };
   //    }

   //    fetchInfo();
   //   },[])

    return(<>
      <div className="container font-serif shadow-lg ">
         
      {/* <HemlmetMeta url={'https://vedicinfos.in/info'} image={logo || null} title={'vedic kshatriya'} description={'vedic information of kshatriyas and news keep you update '}/> */}
         <h1 className="text-center ">Latest News</h1>
         {data && data.map(el=>{
            return(
              <div className="flex  shadow-lg border-t-8" key={el.url} >
                <Link href={`/info/${el.url}`}> 
                  <h1 className="mx-2 m-3">{el.title}</h1>
                  <img className="w-40 m-3 iconimg" src={el.image1 || null} alt="" />
                  </Link>
                </div>
                
            )
         })}
      </div>
    
       </>
    )
}

export default Latest