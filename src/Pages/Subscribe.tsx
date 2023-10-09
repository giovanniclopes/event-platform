import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/classes");
  }

  return (
    <div className="flex flex-col items-center bg-no-repeat bg-cover">
      <div className="w-full max-w-[1100px] flex items-center justify-between my-20 mx-auto gap-8 mbl:flex-col mbl:my-5">
        <div className="max-w-[640px] mbl:max-w-[300px]">
          <h1 className="mt-8 text-[2.5rem] leading-tight font-bold mbl:text-2xl">
            Navegue com <strong className="text-product-pink">Segurança</strong>
            : <br /> Aulas Online para{" "}
            <strong className="text-product-pink">Todos</strong>!
          </h1>
          <p className="mt-4 font-normal leading-relaxed">
            Aprenda a usar a internet com responsabilidade e proteção! Nosso
            site oferece aulas divertidas e informativas para crianças,
            adolescentes e idosos, garantindo uma experiência online segura para
            todos.
          </p>
        </div>

        <div className="p-9 text-white bg-product-darkPurple rounded-lg mbl:mb-6">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full gap-2 text-black"
          >
            <input
              className="px-5 font-normal bg-white border-b-2 rounded rounded-b-none border-product-pink  h-14 focus:border-none focus:outline-none focus:ring-2 focus:ring-product-pink focus:rounded"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="px-5 font-normal bg-white border-b-2 rounded-b-none border-product-pink rounded h-14 focus:border-none focus:outline-none focus:ring-2 focus:ring-product-pink focus:rounded"
              type="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              className="py-4 mt-4 text-sm font-bold uppercase transition-colors bg-product-pink text-white rounded hover:brightness-90 disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
