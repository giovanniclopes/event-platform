import Accordion from "../Accordion";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col gap-12 mt-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-semibold">Perguntas frequentes</h3>
      </div>
      <div>
        <Accordion
          title={"O que vocês oferecem?"}
          description={
            "Bem-vindo à Intellion! Nós nos dedicamos a ensinar pessoas de todas as idades a utilizarem a internet de maneira correta e segura. Com nossos três cursos especializados - Cibersegurança, Conheça a IntelliOn e Primeiros Passos na Internet - buscamos proporcionar uma experiência educacional completa e acessível. Nossa equipe desenvolveu cuidadosamente cada curso para atender às suas necessidades e garantir que você esteja preparado para aproveitar todos os benefícios da era digital. Venha aprender conosco e explore o vasto mundo do conhecimento digital em um ambiente amigável e enriquecedor! Estamos ansiosos para acompanhar você em sua jornada de aprendizado."
          }
        />
        <Accordion
          title={"O serviço é gratuito?"}
          description={
            "Sim, nosso serviço é totalmente gratuito! Na nossa empresa, a satisfação dos clientes é nossa prioridade e, por isso, oferecemos nossos serviços sem nenhum custo. Pode aproveitar todas as funcionalidades e benefícios sem preocupações com despesas. Acreditamos que todos devem ter acesso às soluções que oferecemos, e é por isso que mantemos nossos serviços gratuitos para todos os usuários. Aproveite ao máximo e conte conosco para qualquer necessidade que tiver!"
          }
        />
        <Accordion
          title={"Qual é a frequência de lançamento das aulas?"}
          description={
            "Agradecemos o seu interesse em nossos cursos! Atualmente, temos um total de 15 aulas disponíveis, divididas em 5 aulas para cada um dos nossos três cursos: Cibersegurança, Conheça a IntelliOn e Primeiros Passos na Internet. Embora não estejamos lançando novas aulas no momento, fique tranquilo, pois cada curso foi elaborado de forma abrangente para proporcionar uma experiência completa de aprendizado. Esperamos que você desfrute do conteúdo existente e aprenda muito com as aulas disponíveis. Caso tenha alguma dúvida ou precise de suporte, nossa equipe estará sempre disponível para ajudá-lo. Aproveite o aprendizado e explore todo o conhecimento que nossos cursos têm a oferecer!"
          }
        />
        <Accordion
          title={"Como funciona o suporte?"}
          description={
            "Nosso suporte é projetado para garantir que você receba a melhor assistência possível durante sua jornada conosco. Quando você precisa de suporte, basta entrar em contato conosco por meio de nossa plataforma de atendimento ao cliente, seja por e-mail, chat ou telefone. Nossa equipe de suporte altamente capacitada e amigável estará pronta para responder a suas perguntas, resolver problemas técnicos e oferecer orientações sempre que necessário. Estamos empenhados em fornecer um suporte ágil e eficiente, para que você possa desfrutar de uma experiência tranquila e produtiva ao utilizar nossos serviços. Sua satisfação é nossa prioridade, e faremos o possível para atender às suas necessidades com rapidez e eficácia. Não hesite em nos contatar se precisar de ajuda. Estamos aqui para ajudá-lo a cada passo do caminho!"
          }
        />
      </div>
    </div>
  );
}
