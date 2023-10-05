import WhatsAppIcon from "../assets/WhatsappIcon";

export default function WhatsappButton() {
  return (
    <a
      aria-label="Link para entrar em contato via WhatsApp"
      href="/voltar-pagina"
      rel="noopener noreferrer"
      className="text-white rounded-full p-3 shadow-lg z-50 fixed bottom-32 right-2 bg-[#25D366] transition-all hover:bg-[#1a9949] "
    >
      <WhatsAppIcon width="36" height="36" />
    </a>
  );
}
