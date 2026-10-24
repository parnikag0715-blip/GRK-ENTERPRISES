import { MessageCircle } from 'lucide-react';
import { waLink } from '../data/site.js';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">
      <MessageCircle size={26} />
      <span>WhatsApp</span>
    </a>
  );
}
