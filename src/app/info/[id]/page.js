const { default: axiosInstanse } = require("@/Helper/axiosInstance");


async function fetchById(id){
    try{
        const response = await axiosInstanse.get(`/infos/${id}`)
        return response.data.data
    }catch(err){
        console.log(err);
    }

}
export async function generateMetadata({params}){
    const reslovedParams = await params
    const id  = reslovedParams.id
    const data = await fetchById(id)
    return{
      title: data.title,
      description:data.body1,
      openGraph: {
        title: data.title,
        description: data.body1,
        url: `https://www.vedicinfos.in/info/${data._id}`, // Replace with your URL
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
 }

export default async function fetchbyId ({params}){
    const resolvedParams = await params
    const id = resolvedParams.id
    const data = await fetchById(id)

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
} 