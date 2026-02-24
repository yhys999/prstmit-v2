import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { trackWhatsAppClick } from '@/lib/analytics';

interface TrackedWhatsAppButtonProps {
  cardType?: string;
  amount?: string;
  children?: React.ReactNode;
  className?: string;
  floatingButton?: boolean;
}

/**
 * WhatsApp按钮组件，带有转化跟踪
 */
export const TrackedWhatsAppButton: React.FC<TrackedWhatsAppButtonProps> = ({
  cardType,
  amount,
  children,
  className = '',
  floatingButton = false,
}) => {
  const handleClick = () => {
    trackWhatsAppClick(cardType, amount);
  };

  const whatsappUrl = cardType && amount
    ? `https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20${cardType}%20worth%20$${amount}`
    : 'https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card';

  if (floatingButton) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-pulse"
        aria-label="Contact on WhatsApp"
      >
        <SiWhatsapp className="w-8 h-8" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children || (
        <>
          <SiWhatsapp className="mr-2 h-5 w-5" /> Contact on WhatsApp
        </>
      )}
    </a>
  );
};

/**
 * 电话按钮组件，带有转化跟踪
 */
export const TrackedPhoneButton: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const handleClick = () => {
    const { trackPhoneClick } = require('@/lib/analytics');
    trackPhoneClick();
  };

  return (
    <a
      href="tel:+2348001234567"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

/**
 * 邮件按钮组件，带有转化跟踪
 */
export const TrackedEmailButton: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const handleClick = () => {
    const { trackEmailClick } = require('@/lib/analytics');
    trackEmailClick();
  };

  return (
    <a
      href="mailto:support@prstmit.site"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
