import { RocketLogo } from "./RocketLogo";

export function Footer() {
  return(
    <div className="flex w-auto items-center justify-between py-6 mx-6 border-t border-gray-600">
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
  )
}