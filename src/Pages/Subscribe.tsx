import { useState,FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import codeMockup from "../assets/code-mockup.png";

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto sm:flex-col gap-8">
                <div className="max-w-[640px] sm:max-w-[300px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight sm:text-2xl">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500 ">React JS</strong>
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-200">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded sm:mb-6">
                    <strong className="block mb-6 text-2xl">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col w-full gap-2">
                        <input 
                        className="px-5 bg-gray-900 rounded h-14"
                        type="text" 
                        placeholder="Seu nome completo" 
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="px-5 bg-gray-900 rounded h-14"
                        type="email"
                        placeholder="Digite seu email" 
                        onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                        className="py-4 mt-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700 disabled:opacity-50"
                        disabled={loading}
                        type="submit">
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src={codeMockup} className="mt-10 sm:hidden" alt="" />
        </div>
    );
}