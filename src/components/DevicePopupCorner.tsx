import React, { useState, useEffect } from "react";
import DeviceInfo from "./DeviceInfo";
import { X } from "phosphor-react"; // Import the Close icon from phosphor-react

const DevicePopupCorner: React.FC = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDataVisible, setIsDataVisible] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(false);
  const [initialPopupDisplayed, setInitialPopupDisplayed] = useState(false);

  const togglePopup = () => {
    if (!initialPopupDisplayed) {
      setInitialPopupDisplayed(true);
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(!isPopupOpen);
      if (!isDataVisible) {
        // Clear consent when the popup is closed
        setIsConsentGiven(false);
      }
    }
  };

  const handleConsent = () => {
    setIsConsentGiven(true);
    setIsDataVisible(true); // Show user data after consent is given
    setShowConsentMessage(true); // Show the consent message
  };

  const handleCloseData = () => {
    setIsDataVisible(false);
  };

  useEffect(() => {
    // Set a timer to hide the consent message after 2 seconds
    if (showConsentMessage) {
      const timer = setTimeout(() => {
        setShowConsentMessage(false);
      }, 2000); // 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showConsentMessage]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isPopupOpen && (
        <div id="message" className="w-[450px] absolute left-0 bottom-14">
          <div className="flex flex-col text-center bg-gray-100 rounded-lg p-4 px-12 shadow-2xl border border-product-purple">
            {isDataVisible ? (
              // Show user data and close button
              <>
                <span className="text-xl font-semibold text-center mt-5">
                  Informações do Usuário
                </span>
                <span className="text-xs mb-4">
                  Estas informações não são salvas nem compartilhadas
                </span>
                <DeviceInfo />
                <button
                  className="flex items-center justify-center gap-2 mt-3 bg-product-purple text-white font-medium px-4 py-3 rounded-md"
                  onClick={handleCloseData}
                >
                  Fechar dados <X size={20} /> {/* Close icon */}
                </button>
              </>
            ) : showConsentMessage ? (
              // Show consent confirmation message
              <>
                <span className="text-xl font-semibold text-center mt-5">
                  Obrigado por conceder o seu consentimento!
                </span>
              </>
            ) : (
              // Show consent explanation and checkbox
              <>
                <span className="text-xl font-semibold text-center mt-5">
                  Coleta de Dados
                </span>
                <p>Explicação sobre a coleta de dados e finalidades.</p>
                <label>
                  <input type="checkbox" onChange={handleConsent} /> Eu concordo
                  com a coleta de dados.
                </label>
                <button
                  className="mt-5 bg-product-purple text-white font-medium px-4 py-3 rounded-md"
                  onClick={handleConsent}
                >
                  Aceitar
                </button>
                <button
                  className="mt-2 bg-red-500 text-white font-medium px-4 py-3 rounded-md"
                  onClick={togglePopup}
                >
                  Recusar
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button
        className="bg-product-purple text-white font-medium px-4 py-3 rounded-full"
        onClick={isDataVisible ? handleCloseData : togglePopup}
      >
        {isDataVisible ? "Fechar dados" : "Revelar dados"}
      </button>
    </div>
  );
};

export default DevicePopupCorner;
