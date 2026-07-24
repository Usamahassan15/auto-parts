import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/923175817400?text=Hi%20AxlePro%2C%20I%20need%20help%20with%20a%20part"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-success/50 animate-ping" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-success text-white shadow-elegant transition-transform group-hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
