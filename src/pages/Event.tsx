import { useNavigate, useParams, Navigate} from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetFirstLessonSlugQuery } from "../graphql/types"

export function Event(){
  const { slug } = useParams<{ slug:string }>()
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  const { data } = useGetFirstLessonSlugQuery()


  return(
    <div>
      {slug
        ? (<div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 flex-col xl:flex-row">
              { slug 
                ? <Video lessonSlug={slug}/> 
                : <div className="flex-1"></div> 
              }
              <Sidebar />
            </main>
          </div>)
        : data 
          ? <Navigate to={`lesson/${data?.lessons[0].slug}`} replace={true} />
          : <div className="flex-1">Carregando</div>
      }
      <Footer />
    </div>
    
  )
}