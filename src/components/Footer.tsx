import { Link } from "react-router-dom";
import logo from "../assets/svg/logo-intellion.svg";

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-gradient-to-b m-0 p-24 pb-5 from-product-darkPurple to-product-mediumPurple text-gray-400 mbl:p-12">
      <div className="grid grid-cols-4 mbl:flex mbl:flex-col mbl:gap-16">
        <div className="flex flex-col gap-6">
          <h4 className="text-white">Suporte</h4>
          <ul className="flex flex-col gap-3">
            <Link className="w-min" to="/contact">
              <ul>
                <li>Contato</li>
              </ul>
            </Link>
            <li>Centro de ajuda</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white">Comunidade</h4>
          <ul className="flex flex-col gap-3">
            <li>Guias</li>
            <li>Aprenda</li>
            <li>Parceria</li>
            <li>Parceiros</li>
            <li>Professores e Autores</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white">Empresa</h4>
          <ul className="flex flex-col gap-3">
            <Link className="w-min" to="about">
              <ul>
                <li className="w-max">Sobre Nós</li>
              </ul>
            </Link>
            <li>Carreiras</li>
            <li>Recursos</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-white">Newsletter</h4>
          <p>Inscreva-se para participar de nossas notícias e novidades.</p>
          <form className="flex flex-col gap-5" action="">
            <div className="flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
              id="footer-form-input"
                className="bg-product-lightPurple rounded p-2 text-white"
                type="text"
                aria-label="First Name"
              />
            </div>
            <div className="flex flex-crow gap-4">
              <input type="checkbox" name="receiveEmail" id="receiveEmail" aria-label="news from IntelliOn" />
              <span>Gostaria de receber emails da IntelliOn</span>
            </div>
            <input
              className="w-2/4 bg-product-pink text-white border cursor-pointer border-product-pink px-10 py-2 rounded transition-colors hover:brightness-90"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3 justify-center">
          <img
            src={logo}
            className="w-100 h-10 mr-2"
            alt="Logo"
            draggable="false"
          />
          <p className="mbl:text-xs">
            Copyright @ 2023 - {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="flex flex-col gap-3 mbl:text-xs">
          <div className="flex flex-row gap-8">
            <Link to="/termos-de-uso">Termos de uso</Link>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          </div>
          <div>
            Desenvolvido por{" "}
            <a
              className="text-white"
              href="https://giovannilopes.vercel.app"
              target="_blank"
            >
              Giovanni Lopes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
