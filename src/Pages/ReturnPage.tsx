import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReturnPage: React.FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate(-1); // Navega de volta para a página anterior
    }, 5000);

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen mbl:px-5 ">
      <div className="bg-product-purple p-12 rounded-lg text-white text-center">
        <p className="text-2xl mb-4">
          Redirecionando para a página anterior em {count} segundos...
        </p>
        <button
          className="bg-product-pink hover:bg-product-lightPink text-white font-bold py-3 px-7 rounded-full"
          onClick={() => navigate(-1)}
        >
          Voltar Agora
        </button>
      </div>
    </div>
  );
};

export default ReturnPage;
