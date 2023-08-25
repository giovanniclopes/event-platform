import { ArrowUpRight } from "phosphor-react";

export default function Form() {
  return (
    <form className="flex flex-col w-full" action="">
      <div className="w-full h-56 grid grid-cols-2 grid-rows-2 gap-x-12 mbl:flex mbl:flex-col mbl:h-auto mbl:gap-y-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-lg font-normal mb-3" htmlFor="userName">
              Seu nome <span className="text-red-500">*</span>
            </label>
            <input
              className="p-3 rounded-lg rounded-b-none bg-gray-50 font-normal border border-gray-100 border-b-product-pink transition-all placeholder:text-gray-300 focus:ring-1 focus:ring-product-purple focus:rounded focus:outline-0 focus:border-0"
              type="text"
              name="userName"
              id="userName"
              placeholder="Ex.: John Dee"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-normal mb-3" htmlFor="userInterest">
              No que está interessado? <span className="text-red-500">*</span>
            </label>
            <select
              className="p-3 rounded-lg rounded-b-none bg-gray-50 font-normal border border-gray-100 border-b-product-pink transition-all placeholder:text-gray-300 focus:ring-1 focus:ring-product-purple focus:rounded focus:outline-0 focus:border-0"
              id="interests"
              required
            >
              <option className="text-gray-300" value="none" selected>
                Selecione uma opção...
              </option>
              <option value="ciberseguranca">Cibersegurança</option>
              <option value="introducao-a-internet">
                Introdução a Internet
              </option>
              <option value="o-que-e-intellion">O que é IntelliOn</option>
              <option value="como-usar-redes-sociais">
                Como usar redes sociais
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-lg font-normal mb-3" htmlFor="userEmail">
              Seu email <span className="text-red-500">*</span>
            </label>
            <input
              className="p-3 rounded-lg rounded-b-none bg-gray-50 font-normal border border-gray-100 border-b-product-pink transition-all placeholder:text-gray-300 focus:ring-1 focus:ring-product-purple focus:rounded focus:outline-0 focus:border-0"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Ex.: exemplo@exemplo.com"
              required
            />
          </div>
          <div className="flex flex-col gap-5 p-3 rounded-lg rounded-b-none bg-gray-50 font-normal border border-gray-100 border-b-product-pink transition-all placeholder:text-gray-300 focus:ring-1 focus:ring-product-purple focus:rounded focus:outline-0 focus:border-0">
            <label className="text-lg font-normal mb-3" htmlFor="userLikeTech">
              Gosta de tecnologia?
            </label>
            <div className="flex items-center justify-start gap-3">
              <input type="radio" id="yes" name="userResponse" value="Sim" />
              <label className="text-lg font-normal -ml-2" htmlFor="yes">
                Sim
              </label>
              <input type="radio" id="nao" name="userResponse" value="Não" />
              <label className="text-lg font-normal -ml-2" htmlFor="Não">
                Não
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mbl:mt-7">
        <label className="text-lg font-normal mb-3" htmlFor="message">
          Sua mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          className="p-3 rounded-lg rounded-b-none bg-gray-50 font-normal border border-gray-100 border-b-product-pink transition-all placeholder:text-gray-300 focus:ring-1 focus:ring-product-purple focus:rounded focus:outline-0 focus:border-0"
          name="message"
          id="message"
          placeholder="Escreva sua mensagem"
          cols={30}
          rows={7}
          required
        />
      </div>
      <div>
        <button
          aria-label="Enviar mensagem"
          className="flex flex-row items-center gap-2 justify-center w-full mt-4 px-4 py-5 border-none bg-product-pink text-white font-bold cursor-pointer rounded transiton-all hover:opacity-75"
        >
          Enviar mensagem
          <ArrowUpRight size={22} weight="bold" />
        </button>
      </div>
    </form>
  );
}
