import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
  const { slug } = useParams<{ slug:string }>()
  
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd ' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug
  
  return(
    <div>
      {isLessonAvailable ? (
        <Link to={`/event/lesson/${props.slug}`} className="group">
          <span className="text-gray-300">
            {availableDateFormatted}
          </span>
          <div 
            className={classNames("rounded border border-gray-500 p-4 mt-2 flex flex-col gap-4 group-hover:border-green-500 transition-colors",{
              'bg-green-500': isActiveLesson
            }
            )}
          >
            <header className="flex items-center justify-between">
              <span className={classNames("text-sm  font-medium flex items-center gap-2", {
                "text-white" :isActiveLesson,
                "text-blue-500": !isActiveLesson,
              })}>
                <CheckCircle size={20}/>
                Conteúdo Liberado
              </span>
              
              <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold", {
                'border-white': isActiveLesson
              })}>
                {props.type === 'live' ? 'LIVE AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <span className={classNames("font-bold leading-relaxed", {
              "text-white": isActiveLesson
            })}>
              {props.title}
            </span>
          </div>
        </Link>
      ) : (
        <>
          <span className="text-gray-300">
            {availableDateFormatted}
          </span>
          <div className="flex flex-col gap-4 rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors hover:cursor-not-allowed">
            <header className="flex items-center justify-between">
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2 group-hover:cursor-not-allowed">
                <Lock size={20}/>
                Em breve
              </span>
              <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                {props.type === 'live' ? 'LIVE AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <span className="font-bold leading-relaxed">
              {props.title}
            </span>
          </div>
        </>
      )}
    </div>
    
  )
}