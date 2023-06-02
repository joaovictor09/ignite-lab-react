import { RocketLogo } from "./RocketLogo";

export function Footer() {
  return(
    <div className="w-full bg-gray-700 flex items-center px-6 xl:px-0 border-t border-gray-600">
      <div className="w-full mx-auto max-w-[1180px] flex flex-col sm:flex-row gap-6 justify-between items-center py-6 self-center text-sm md:text-base">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <RocketLogo />
          <span className="text-gray-300">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>

        <span className="text-gray-300">
          Políticas de privacidade
        </span>
      </div>
    </div>
  )
}