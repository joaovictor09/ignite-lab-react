import { RocketLogo } from "./RocketLogo";

export function Footer() {
  return(
    <div className="w-full bg-gray-700 flex items-center">
      <div className="w-full mx-auto max-w-[1180px] flex justify-between items-center py-6 border-t border-gray-600 self-center">
        <div className="flex items-center gap-6">
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