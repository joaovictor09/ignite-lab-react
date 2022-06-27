import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/types";

import codeMockup from "../assets/code-mockup.png"
import { Footer } from "../components/Footer";

export function Subscribe(){
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, {loading}] = useCreateSubscriberMutation()



  async function handleSubscribe(event: FormEvent){
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate("/event")
    
  }
  
  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      {/* CONTENT DIV */}

      <div className="w-full max-w-[1180px] flex flex-col items-center justify-between mt-10 px-28 mx-auto gap-6 md:flex-row sm:px-14 2xl:px-0 lg:mt-20">

        {/* TEXT AND LOGO DIV */}
        
        <div className="max-w-[640px] flex flex-col items-center px-6 text-center md:items-start md:text-left ">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight text-3xl lg:text-4xl">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-5 text-gray-200 leading-relaxed text-sm lg:text-base">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        {/* FORM DIV */}

        <div className="p-8 w-screen bg-gray-700 border-y border-gray-500 sm:rounded sm:w-full sm:border">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img className="mt-10" src={codeMockup} alt="" />

      <Footer />
    </div>
  )
}