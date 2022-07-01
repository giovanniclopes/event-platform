import { FooterLogo } from "./FooterLogo";

export function Footer() {
    return (
        <div className="w-full mt-5 flex flex-1 items-center gap-6 p-5 border-t border-gray-500">
            <FooterLogo />
            <div className="flex flex-1 justify-between text-gray-200">
                <div>
                    <p className="select-none">
                        Rocketseat - Todos os direitos reservados
                    </p>
                </div>
                <div>
                    <a 
                    href="#"
                    className="select-none hover:text-green-700 transition-colors">
                        Políticas de Privacidade
                    </a>
                </div>
            </div>
        </div>
    )
}