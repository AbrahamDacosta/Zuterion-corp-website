export {};

declare global {
  interface Window {
    WhatsAppWidget?: {
      init: (options: {
        phone: string;
        message: string;
        position?: 'left' | 'right';
        text?: string;
        iconColor?: string;
        textColor?: string;
        backgroundColor?: string;
      }) => void;
    };
  }
}
