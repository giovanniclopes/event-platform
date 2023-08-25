import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import HomeSectionBlock from "./HomeSectionBlock";
import HomeSectionBlockReverse from "./HomeSectionBlockReverse";
import HowWillLearn from "./HowWillLearnBlock";
import blankImage from "../../assets/blank-image.png";
import Accordion from "../Accordion";
import skillsLogoIntellionExperience from "../../assets/skills-logo-intellion-experience.webp";
import connectWithWorld from "../../assets/svg/connect-with-world.svg";
import mostRequestedHabilities from "../../assets/svg/most-requested-habilities.svg";
import practiceNewHabilities from "../../assets/svg/practice-new-habilites.svg";
import firstCard from "../../assets/svg/first-card.svg";
import secondCard from "../../assets/svg/second-card.svg";
import thirdCard from "../../assets/svg/third-card.svg";
import fourthCard from "../../assets/svg/fourth-card.svg";
import sponsorBrands from "../../assets/svg/sponsor-brands.svg";
import tryIntellionIntroductionCourse from "../../assets/svg/tryIntellionIntroductionCourse.svg";
import tryInternetIntroductionCourse from "../../assets/svg/tryInternetIntroductionCourse.svg";
import tryCibersecurityIntroductionCourse from "../../assets/svg/tryCibersecurityIntroductionCourse.svg";
import TryCourseBlock from "./TryCourseBlock";

export default function HomeSections() {
  return (
    <div>
      <div className="flex flex-col gap-20 px-24 py-12 mbl:px-12">
        <HomeSectionBlockReverse
          title={"Segurança na Internet para Todos"}
          description={
            "Nosso site oferece aulas e artigos para ensinar idosos, crianças e pais a navegar na internet com segurança e de maneira correta. Proteja-se contra ameaças online com nossos recursos confiáveis e fáceis de entender."
          }
          imageURL={firstCard}
          button1Link={"/"}
          button1Text={"Ver aulas"}
          button2Link={"/blog"}
          button2Text={"Ver blog"}
        />

        <HomeSectionBlock
          imageURL={secondCard}
          sponsorBrands={blankImage}
          title={"Aprenda fazendo"}
          description={
            "Nosso site oferece aulas e artigos para idosos, crianças e pais aprenderem a usar a internet com segurança e correção. Nossos recursos abrangem desde proteção contra ameaças online até dicas para manter a privacidade pessoal e das crianças. Aprenda a navegar na internet sem preocupações!"
          }
          buttonLink={"/"}
        />

        <HomeSectionBlockReverse
          title={"Garanta sua Segurança Online"}
          description={
            "Mais de 1.300 laboratórios práticos permitem que os tecnólogos desenvolvam proficiências mais fortes em habilidades ou tecnologias específicas por meio de instruções passo a passo, exercícios práticos e projetos. De fato, o Skills é a única plataforma de aprimoramento de habilidades que oferece laboratórios em todos os domínios de tecnologia. Nós temos tudo o que você precisa."
          }
          imageURL={thirdCard}
          button1Link={"/subscribe"}
          button1Text={"Ver aulas"}
          button2Link={"/blog"}
          button2Text={"Ver blog"}
        />

        <HomeSectionBlock
          imageURL={fourthCard}
          sponsorBrands={sponsorBrands}
          title={""}
          description={
            "'Nosso site oferece aulas e artigos para idosos, crianças e pais aprenderem a usar a internet com segurança e correção. Nossos recursos abrangem desde proteção contra ameaças online até dicas para manter a privacidade pessoal e das crianças. Aprenda a navegar na internet sem preocupações!'"
          }
          author="Gustavo Santiago"
          authorRole="VP de desenvolvimento de produtos, TOTVS"
          buttonLink={"/subscribe"}
        />
      </div>

      <section className="flex flex-col gap-16 items-center justify-center bg-product-purple text-white p-24 mb-0 mbl:px-12">
        <h3 className="text-2xl font-bold">Como você irá aprender aqui</h3>
        <div className="grid grid-cols-3 gap-12 item-center justify-center bg-vectorHowWillLearn bg-cover mbl:flex mbl:flex-col mbl:gap-28">
          <HowWillLearn
            imageURL={mostRequestedHabilities}
            title={"Domine as habilidades mais solicitadas"}
            description={
              "Milhares de cursos sob demanda ministrados por especialistas e a capacidade de aprender no seu ritmo preferido ajudam você a fechar lacunas de habilidades e manter seu talento tecnológico."
            }
          />

          <HowWillLearn
            imageURL={connectWithWorld}
            title={"Esteja conectado com o mundo"}
            description={
              "Caminhos de aprendizagem com curadoria orientam os alunos que não sabem por onde começar, ou para onde ir em seguida, e os entregam com segurança e habilidade ao seu destino."
            }
          />

          <HowWillLearn
            imageURL={practiceNewHabilities}
            title={"Colocar novas habilidades em prática (sem riscos)"}
            description={
              "Os laboratórios práticos fornecem um ambiente seguro e real para praticar habilidades — sem necessidade de download ou instalação — e reduzir o risco para os sistemas da sua organização."
            }
          />
        </div>
      </section>

      <section className="bg-product-mediumPurple text-white p-24 bg-vectorOurSolutions bg-contain m-0 mbl:p-12">
        <div className="flex flex-col gap-5 mb-12">
          <span className="font-light">Nossas soluções</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold">
              Encare o futuro com confiança
            </h3>
            <p>
              E com as habilidades e insights de engenharia para prosperar.
              Nossas soluções permitem que as equipes de tecnologia naveguem
              pelas tendências digitais e necessidades dos clientes que
              continuam a mudar na velocidade da luz. Implemente um (ou mais) e
              você transformará sua força de trabalho de tecnologia — um
              desenvolvedor, uma entrega, um sucesso de cada vez.
            </p>
          </div>
          <Link to="/contact">
            <button className="w-fit flex items-center justify-center gap-1 text-product-pink transition-colors hover:brightness-75 hover:underline">
              Saber mais <CaretRight size={20} />
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <Accordion
            title={"Capacitação e requalificação"}
            description={
              "Nós iremos criar inúmeras aulas diárias e deixa-las gravadas dentro da plataforma, permitindo que a pessoa veja quantos e quais vídeos na hora que querem, teremos uma equipe especial para monitorar até mesmo pessoas que irão aparecer nas aulas gravadas. Iremos qualificar o aluno de diversas formas, desde participação, com perguntas frequentes e aulas assistidas, até desafios que temos para cada aula e a instalação do mapa conceitual que nós mesmo fizemos para ajudar nos estudos."
            }
          />
          <Accordion
            title={"SAC"}
            description={
              "Nosso Sistema de Administração ou SAC, pode ser considerado como uma diretoria de uma escola por exemplo, lá você poderá reportas sobre qualquer coisa que não gostou, tanto de professores, sistema de avaliação, explicação, alunos, a plataforma em si para que podemos tomar ações preventivas e melhorar a cada dia com o seu feedback e avisos."
            }
          />
          <Accordion
            title={"Fluência em tecnologia"}
            description={
              "Não podemos dizer que uma pessoa tem 100% de fluência em alguma coisa, porém nossos professores estudam e pesquisam o bastante para dizer que são de um nível alto, seguindo de acordo com as perguntas dos alunos, é dever dos nossos professores responder esses alunos nas próximas aulas, então não se preocupe, sua dúvida sempre irá ser respondida, se ocorrer de não ser realizada a explicação, vá ao SAC (Sistema de Administração) e reportar o ocorrido."
            }
          />
          <Accordion
            title={"Integração"}
            description={
              "Um projeto interligado ao nosso grupo é o SAM (Sistema Automatizado para Profissionais de Medicina), um aplicativo para médicos e seus pacientes reservarem data e hora mais facilmente, além do médico poder organizar os sintomas de seus devidos pacientes para ajudar em seu trabalho."
            }
          />
          <Accordion
            title={"Parcerias"}
            description={
              "Temos parceria com diversas empresas profissionais na área da programação em si, como a cisco, cloudflare, microsoft, paloalto, IBM, crowdstrike, fortinet, dentre outras empresas, que, também estão nos patrocinando e ajudando de uma forma absurda."
            }
          />
          <Accordion
            title={"Transformação ágil"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, obcaecati voluptas? Nisi reprehenderit repellat maxime est asperiores! Esse ratione saepe voluptatum inventore quo, est dicta voluptate velit similique illum maxime vitae magni repellendus reprehenderit nam. Officiis voluptatum soluta mollitia blanditiis ratione. Ratione, eaque explicabo. Temporibus non maxime rerum error. Dicta!"
            }
          />
          <Accordion
            title={"Exploração da plataforma"}
            description={
              "Geralmente temos pessoas muito inexperientes na internet, por isso damos pelo menos uma aula grátis, onde explicamos como nossa plataforma funciona e como desenvolvemos ela para que nossos alunos ficam extremamente protegidos, tanto de bullying virtual quanto de hackers mal intencionados."
            }
          />
          <Accordion
            title={"Oportunidades"}
            description={
              "Tanto nas aulas quanto em nossos blogs, muitas vezes nós recomendamos vários tipos de trabalhos e empresas relacionados a área da informática que estão a procura de funcionários desesperadamente, dando uma oportunidade exclusiva para nossos alunos de conseguir um emprego para se sustentar."
            }
          />
        </div>
      </section>

      <section className="p-24 bg-vectorIntellionExperience m-0 mbl:p-12">
        <div className="grid grid-cols-2 items-start justify-center gap-5 mbl:flex mbl:flex-col">
          <div>
            <img src={skillsLogoIntellionExperience} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">
              A experiência do IntelliOn
            </h3>
            <div>
              <Accordion
                title={"Preparação para a certificação"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ac magna ac eleifend. In non velit tincidunt, luctus orci id, pellentesque arcu. Etiam ante mauris, tempor et diam eu, finibus fringilla tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae eros fringilla, eleifend ante tincidunt, efficitur justo. Suspendisse facilisis mauris at felis sollicitudin fermentum. Aenean elementum sit amet diam ut eleifend."
                }
              />
              <Accordion
                title={"Avaliações de habilidades"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ac magna ac eleifend. In non velit tincidunt, luctus orci id, pellentesque arcu. Etiam ante mauris, tempor et diam eu, finibus fringilla tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae eros fringilla, eleifend ante tincidunt, efficitur justo. Suspendisse facilisis mauris at felis sollicitudin fermentum. Aenean elementum sit amet diam ut eleifend."
                }
              />
              <Accordion
                title={"Caminhos de aprendizado"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ac magna ac eleifend. In non velit tincidunt, luctus orci id, pellentesque arcu. Etiam ante mauris, tempor et diam eu, finibus fringilla tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae eros fringilla, eleifend ante tincidunt, efficitur justo. Suspendisse facilisis mauris at felis sollicitudin fermentum. Aenean elementum sit amet diam ut eleifend."
                }
              />
              <Accordion
                title={"Aulas ministradas por instrutores"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ac magna ac eleifend. In non velit tincidunt, luctus orci id, pellentesque arcu. Etiam ante mauris, tempor et diam eu, finibus fringilla tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vitae eros fringilla, eleifend ante tincidunt, efficitur justo. Suspendisse facilisis mauris at felis sollicitudin fermentum. Aenean elementum sit amet diam ut eleifend."
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 bg-vectorTryForFree bg-cover m-0 mbl:p-12">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="w-full flex flex-row items-center justify-between px-12 mbl:flex mbl:flex-col mbl:px-1">
            <h3 className="text-2xl text-white">Experimente gratuitamente</h3>
            <Link to="/subscribe">
              <button className="flex items-center justify-center gap-1 font-medium text-product-pink transition-colors hover:brightness-75 hover:underline">
                Ver todos as aulas <CaretRight size={20} />
              </button>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-12 mbl:flex mbl:flex-col">
            <TryCourseBlock
              btnLink=""
              imageURL={tryIntellionIntroductionCourse}
              title={"Introdução ao IntelliOn"}
              author={"Leonardo Coimbra"}
              classLength={"25 min"}
              classDifficult={"Iniciante"}
            />
            <TryCourseBlock
              btnLink=""
              imageURL={tryInternetIntroductionCourse}
              title={"Introdução à Internet e Navegação Online"}
              author={"Giovanni Lopes"}
              classLength={"25 min"}
              classDifficult={"Iniciante"}
            />
            <TryCourseBlock
              btnLink=""
              imageURL={tryCibersecurityIntroductionCourse}
              title={"Introdução ao Mundo Digital Protegido"}
              author={"Joab Estevam"}
              classLength={"25 min"}
              classDifficult={"Iniciante"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
