'use client';

import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  useImage?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Bonjour, je suis intéressé par vos services de développement web", 
  className = "",
  useImage = false
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`group transition-all duration-300 ${className}`}
    >
      {useImage ? (
        <Image 
          src="/whatsapp.png" 
          alt="WhatsApp" 
          width={60} 
          height={60} 
          className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[5] group-hover:hue-rotate-[200deg] group-hover:brightness-[0.8] group-hover:contrast-[1.2]"
        />
      ) : (
        <MessageCircle className="w-5 h-5 mr-2 transition-colors duration-300 group-hover:text-blue-600" />
      )}
    </button>
  );
};

export default WhatsAppButton;
