import { fetchInfos, fetchNews } from "./page"

export default async function sitemap() {
  const baseUrl = "https://vedicinfos.in"
  const infos = await fetchInfos();
  const infosUrl = infos?.map((info)=>{
    return {
      url : `${baseUrl}/info/${info.url}`,
      lastModified: new Date(),
    }
  }) || [];
  const news = await fetchNews();
  const newsurl = news?.map((el)=>{
    return{
      url: `${baseUrl}/latestnews/${el.url}`,
      lastModified: new Date(),
    }

  }) || []
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://vedicinfos.in/info',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: 'https://vedicinfos.in/acme.com/latestnews',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.5,
      },
      ...infosUrl,
      ...newsurl
    ]
  }