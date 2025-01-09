const { default: axiosInstanse } = require("@/Helper/axiosInstance");


async function fetchById(id){
    try{
        const response = await axiosInstanse.get(`/news/${id}`)
        return response.data.data
    }catch(err){
        console.log(err);
    }

}

export default async function fetchbyId ({params}){
    const resolvedParams = await params
    const id = resolvedParams.id
    const data = await fetchById(id)

    return (
        <div className="container text-black mx-10 mt-10 ">
           
           
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