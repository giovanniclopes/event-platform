import DeviceInfo from "./DeviceInfo";

interface PopupProps {
  onClose: () => void; // Callback function to close the popup
}

const DevicePopup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed flex items-center justify-center z-50 mbl:p-5 mbl:top-12">
      <div className="flex flex-col text-center bg-gray-100 w-6/12 rounded-lg p-4 px-12 shadow-2xl border border-product-purple mbl:px-6 mbl:w-auto mbl:h-auto">
        <span className="m-0 text-xl font-semibold text-center mt-5">
          Não perca tempo! Aprenda a se proteger na IntelliOn
        </span>
        <span className="mt-[10px] mb-5 text-[15px] leading-normal">
          Quer aprender a se proteger e não acabar tendo essas e outras
          informações suas vazadas para o público e acabarem caindo em mãos
          maliciosas?
        </span>
        <fieldset className="mb-[15px] flex items-center gap-5 text-left">
          <DeviceInfo />
        </fieldset>
        <button
          className="bg-product-purple text-white font-medium px-4 py-3 mt-4 rounded-md"
          onClick={(onClose)}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default DevicePopup;
