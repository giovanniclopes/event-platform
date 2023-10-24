export default function ProtectOnlinePrivacyArticle() {
  return (
    <div className="relative pb-16 bg-white overflow-hidden">
      <img
        className="w-full h-96 object-cover"
        src={
          "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      />

      <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="mb-24">
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Dicas para proteger sua privacidade online
            </span>
          </h1>
        </div>

        <div className="mt-6 prose prose-lg mx-64 text-lg text-gray-700 mbl:mx-1">
          <article>
            <p className="text-lg">
              A privacidade online tornou-se uma preocupação crescente nos dias
              de hoje, à medida que passamos mais tempo na internet e
              compartilhamos informações pessoais em vários sites e plataformas.
              A boa notícia é que existem medidas que você pode tomar para
              proteger sua privacidade online e manter seus dados pessoais
              seguros. Neste artigo, compartilharemos algumas dicas importantes
              para ajudar a manter suas informações seguras.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Use senhas fortes e exclusivas
            </h2>
            <p className="text-lg">
              Um dos passos mais importantes para proteger sua privacidade
              online é criar senhas fortes e exclusivas para suas contas. Evite
              senhas óbvias, como datas de nascimento ou sequências simples, e
              opte por combinações de letras maiúsculas, minúsculas, números e
              caracteres especiais. Use um gerenciador de senhas para manter o
              controle de todas as suas credenciais com segurança.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Ative a autenticação de dois fatores
            </h2>
            <p className="text-lg">
              A autenticação de dois fatores (2FA) é uma camada adicional de
              segurança que torna mais difícil para invasores acessarem suas
              contas. Ao ativar o 2FA, você precisará fornecer uma segunda forma
              de autenticação além da senha, como um código enviado para o seu
              telefone. Isso ajuda a proteger suas contas mesmo se sua senha for
              comprometida.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Mantenha seu software atualizado
            </h2>
            <p className="text-lg">
              Manter seu sistema operacional, navegadores e aplicativos
              atualizados é fundamental para garantir a segurança online. As
              atualizações muitas vezes incluem correções de segurança que
              abordam vulnerabilidades conhecidas. Certifique-se de habilitar as
              atualizações automáticas para uma proteção contínua.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Esteja ciente das configurações de privacidade
            </h2>
            <p className="text-lg">
              Revise e ajuste as configurações de privacidade em todas as suas
              contas e dispositivos. Muitas vezes, as configurações padrão podem
              permitir o compartilhamento de informações mais do que você
              gostaria. Limite o acesso a dados pessoais e compartilhe apenas o
              que for estritamente necessário.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Tome cuidado com as redes Wi-Fi públicas
            </h2>
            <p className="text-lg">
              O uso de redes Wi-Fi públicas pode ser arriscado, já que essas
              redes geralmente não são seguras. Evite realizar transações
              financeiras ou compartilhar informações sensíveis em redes
              públicas. Se for necessário, use uma rede virtual privada (VPN)
              para criptografar sua conexão e proteger seus dados.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Evite clicar em links suspeitos
            </h2>
            <p className="text-lg">
              Phishing é uma técnica comum usada por criminosos online para
              obter suas informações. Esteja atento a e-mails, mensagens e links
              suspeitos. Não clique em links de fontes não confiáveis e nunca
              forneça informações pessoais a menos que tenha certeza da
              legitimidade do site ou da mensagem.
            </p>
            <br />

            <h2 className="font-medium text-lg">
              Limite as informações que você compartilha
            </h2>
            <p className="text-lg">
              Reflita sobre as informações que você compartilha nas redes
              sociais e em outros sites. Quanto mais informações pessoais você
              divulga, maior é o risco de exposição. Compartilhe apenas o que
              você se sente confortável em tornar público e evite revelar dados
              sensíveis, como números de documentos ou números de cartões de
              crédito.
            </p>
            <br />

            <h2 className="font-medium text-lg">Use um antivírus confiável</h2>
            <p className="text-lg">
              Ter um software antivírus confiável instalado em seu computador ou
              dispositivo móvel é fundamental para proteger-se contra malware e
              vírus. Certifique-se de manter o antivírus atualizado para
              garantir a detecção eficaz de ameaças.
            </p>
            <br />

            <p className="text-lg">
              Proteger sua privacidade online é uma responsabilidade que todos
              devem levar a sério. Ao seguir estas dicas e adotar boas práticas
              de segurança digital, você estará mais bem preparado para manter
              suas informações pessoais seguras enquanto desfruta da
              conveniência da internet.
            </p>

            <br />

            <p className="text-lg text-product-purple underline">
              Tags: <a href="#senhas">senhas fortes</a>,{" "}
              <a href="#autenticacao">autenticação de dois fatores</a>,{" "}
              <a href="#atualizacoes">software atualizado</a>,{" "}
              <a href="#privacidade">configurações de privacidade</a>,{" "}
              <a href="#wifi">Wi-Fi público</a>,{" "}
              <a href="#phishing">links suspeitos</a>,{" "}
              <a href="#compartilhamento">compartilhamento de informações</a>,{" "}
              <a href="#antivirus">antivírus</a>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
