import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

interface AddDebitCreditCardProps {
  onClose: () => void;
  onCardScanned: (cardData: string) => void;
}

const AddDebitCreditCard: React.FC<AddDebitCreditCardProps> = ({ onClose, onCardScanned }) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate(); // Use navigate hook
  
  // Capture image from webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      extractCardDetails(imageSrc);
    }
  }, [webcamRef]);

  // Extract card details using OCR
  const extractCardDetails = async (imageSrc: string) => {
    setIsProcessing(true);
    try {
      const { data } = await Tesseract.recognize(imageSrc, "eng");
      onCardScanned(data.text); // Send extracted text to TransactionPage
    } catch (error) {
      console.error("Error extracting card details:", error);
    }
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">Add Card</h2>
        {capturedImage ? (
          <img src={capturedImage} alt="Captured Card" className="mb-4 mx-auto" />
        ) : (
          <Webcam ref={webcamRef} screenshotFormat="image/png" className="mb-4 mx-auto rounded-lg" />
        )}
        {isProcessing ? (
          <p className="text-[#8B5E3C]">Processing...</p>
        ) : (
          <button onClick={capture} className="bg-[#8B5E3C] text-white px-4 py-2 rounded">
            Scan Card
          </button>
        )}
        
        {/* Navigate to EnterTheCodeManually.tsx */}
        <p 
          onClick={() => navigate("/enter-the-code-manually")} 
          className="mt-4 text-orange-500 cursor-pointer"
        >
          Enter the Card Manually
        </p>
      </div>
    </div>
  );
};

export default AddDebitCreditCard;
