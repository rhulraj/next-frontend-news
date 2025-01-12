const { default: axiosInstanse } = require("@/Helper/axiosInstance");


async function fetchById(url){
    try{
        const response = await axiosInstanse.get(`/infos/${url}`)
        if(!response){
          return "something went wrong "
        }
        return response?.data.data
    }catch(err){
      return "something went wrong"
        console.log(err);
    }

}
export async function generateMetadata({params}){
  try{
    const reslovedParams = await params
    const url  = reslovedParams.url
    const data = await fetchById(url)
    if(!data){
      return {
          title : "Not Found",
          description : "The page you are looking for does not exist."
      }
    }
  
    return{
      title: data.title || "vedic gyan",
      description:data.body1,
      alternates:{
          canonical : `https://www.vedicinfos.in/${data.url}`
      },
      keywords: "koorm kshatriya, vedic kshatriya, rajput, patidar, maratha, kamboj, kamma, kapu, awadhiya, jaiswar, gangwar, katiyar, sainthwar, ror, singror, chandel, patanwar, rathor, gaharwar,",
      openGraph: {
        title: data.title,
        description: data.body1,
        url: `https://www.vedicinfos.in/info/${data.url}`, // Replace with your URL
        type: "website",
        images: [
          {
            url: data.image1, // Replace with your image URL
            width: 800,
            height: 600,
            alt: "Vedic Infos",
          },
        ],
      },
          
    }
   } catch(error){
      console.log(error)
      return{
        title : "Not Found",
            description : "The page you are looking for does not exist."
      }
    }
 }

export default async function fetchbyId ({params}){
  try{
    const resolvedParams = await params
    const url = resolvedParams.url
    const data = await fetchById(url)
  

    return (
        <div className="container text-black mx-20 mt-10 ">
           
           
        <h1 className="page">{data.title}</h1>
        {data.image1 && <img src={data.image1 || null} alt="" className="mx-auto my-6" />}
        <p className="page">{data.body1}</p>
        {data.image2 && <img src={data.image2 || null} alt="" className="mx-auto my-6" />}
        <p className="page">
            {data.body2}
        </p>
        {data.image3 && <img src={data.image3 || null} alt="" className="mx-auto my-6"/>}
        <p className="page">{data.body3}</p>
        
    </div>
    )
  }catch(error){
    return "something went wrong"
  }
} 
