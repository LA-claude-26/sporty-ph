import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clutchph.vercel.app"
  const routes = ["", "/article/ai-predictions", "/article/suns-vs-magic", "/league/pba", "/odds", "/newsletter"]
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: r === "" ? 1 : 0.8,
  }))
}
