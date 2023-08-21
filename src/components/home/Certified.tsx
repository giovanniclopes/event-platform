import ciscoLogo from "../../assets/Companies/cisco.svg";
import cloudfareLogo from "../../assets/Companies/cloudfare.svg";
import microsoftLogo from "../../assets/Companies/microsoft.svg";
import paloaltoLogo from "../../assets/Companies/paloalto.svg";
import IBMLogo from "../../assets/Companies/IBM.svg";
import fortinetLogo from "../../assets/Companies/fortinet.svg";

export default function Certified() {
  return (
    <section className="p-20 mbl:text-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <h3 className="text-2xl font-semibold">
            Certificado por empresas profissionais na área
          </h3>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center gap-16 mbl:flex-col mbl:gap-12">
            <img src={ciscoLogo} alt="Logo da empresa Cisco" />
            <hr className="hidden mbl:block mbl:border mbl:border-product-pink h-5" />
            <img src={cloudfareLogo} alt="Logo da empresa Cloudfare" />{" "}
            <hr className="hidden mbl:block mbl:border mbl:border-product-pink h-5" />
            <img src={microsoftLogo} alt="Logo da empresa Microsoft" />{" "}
            <hr className="hidden mbl:block mbl:border mbl:border-product-pink h-5" />
            <img src={paloaltoLogo} alt="Logo da empresa Palo Alto" />{" "}
            <hr className="hidden mbl:block mbl:border mbl:border-product-pink h-5" />
            <img src={IBMLogo} alt="Logo da empresa IBM" />{" "}
            <hr className="hidden mbl:block mbl:border mbl:border-product-pink h-5" />
            <img src={fortinetLogo} alt="Logo da empresa Fortinet" />
          </div>
        </div>
      </div>
    </section>
  );
}
