import { ChatTeardropDots, Lightbulb, MapPin, Phone, UsersThree } from "phosphor-react";
import Icon from "phosphor-react";
import ContactUsBlock from "./ContactUsBlock";

interface ContactUsBlock {
  icon: Icon.IconProps;
  title: string;
  description: string;
}

export default function ContactUs() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <UsersThree size={42} className="text-product-pink" weight="bold" />
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-4xl font-semibold">Entre em contato</h2>
            <p>Nos diga como podemos ajudar.</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-4 gap-5">
          <ContactUsBlock
            icon={<ChatTeardropDots size={24} className="text-product-pink" weight="regular" />}
            title={"Suporte via chat"}
            description={"Estamos aqui para ajudar."}
            link={"#"}
            linkLabel={"IntelliOn Chat"}
          />
          <ContactUsBlock
            icon={<MapPin size={24} className="text-product-pink" weight="regular" />}
            title={"Nos Visite"}
            description={"Visite nossa empresa."}
            link={"https://goo.gl/maps/DcqtnZcfgW4BkJtF9"}
            linkLabel={"Ver no Google Maps"}
          />
          <ContactUsBlock
            icon={<Phone size={24} className="text-product-pink" weight="regular" />}
            title={"Nos ligue"}
            description={"Seg-Sex das 08h-17h."}
            link={"+551190000-0000"}
            linkLabel={"+55 (11) 90000-0000"}
          />
          <ContactUsBlock
            icon={<Lightbulb size={24} className="text-product-pink" weight="regular" />}
            title={"Veloz e Eficiente"}
            description={"Sempre entregamos nosso melhor."}
            link={"#"}
            linkLabel={"Entre em contato"}
          />
        </div>
      </div>
    </div>
  );
}
