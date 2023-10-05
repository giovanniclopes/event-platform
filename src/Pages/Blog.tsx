import { BlogPost } from "../components/blog/BlogPost";

export default function Blog() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            IntelliBlog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Aprenda a Utilizar a Internet de Forma Correta e Segura
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <BlogPost
            post={{
              title: "Dicas para proteger sua privacidade online",
              imageUrl:
                "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              href: "/protect-online-privacy-article",
              description:
                "Proteja-se na web com senhas fortes e ajustes de privacidade, evitando vazamentos de dados pessoais. 🛡️",
              author: {
                name: "Giovanni Lopes",
                imageUrl:
                  "https://avatars.githubusercontent.com/u/92595678?v=4",
              },
              date: "15/07/2023",
            }}
          />

          <BlogPost
            post={{
              title: "Como identificar e evitar golpes na internet",
              imageUrl:
                "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              href: "/identify-and-avoid-scams-on-internet-article",
              description:
                "Aprenda a identificar e evitar golpes virtuais, como phishing e esquemas fraudulentos, mantendo-se seguro na web. 🚫",
              author: {
                name: "Giovanni Lopes",
                imageUrl:
                  "https://avatars.githubusercontent.com/u/92595678?v=4",
              },
              date: "15/07/2023",
            }}
          />

          <BlogPost
            post={{
              title:
                "Gerenciando o tempo na internet: produtividade versus procrastinação",
              imageUrl:
                "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
              href: "/managing-time-online",
              description:
                "Equilibre seu tempo na internet para ser mais produtivo, aproveitando ao máximo sem cair em distrações. ⏳💻",
              author: {
                name: "Giovanni Lopes",
                imageUrl:
                  "https://avatars.githubusercontent.com/u/92595678?v=4",
              },
              date: "24/09/2023",
            }}
          />

          <BlogPost
            post={{
              title:
                "O guia definitivo para pais: mantendo seus filhos seguros na internet",
              imageUrl:
                "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              href: "/definitive-guide-for-parents-article",
              description:
                "Um guia essencial para proteger seus filhos na web, com dicas de controle parental e segurança digital. 👪🌐",
              author: {
                name: "Giovanni Lopes",
                imageUrl:
                  "https://avatars.githubusercontent.com/u/92595678?v=4",
              },
              date: "12/10/2023",
            }}
          />

          <BlogPost
            post={{
              title: "Redes Sociais: Construindo uma Presença Digital Positiva",
              imageUrl:
                "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
              href: "/social-medias-article",
              description:
                "Descubra como utilizar as redes sociais de forma consciente e positiva. Evite conflitos e a disseminação de fake news. 📲🤝✨",
              author: {
                name: "Giovanni Lopes",
                imageUrl:
                  "https://avatars.githubusercontent.com/u/92595678?v=4",
              },
              date: "15/07/2023",
            }}
          />
        </div>
      </div>
    </div>
  );
}
