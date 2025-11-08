import BentoCard from '@/components/bento/BentoCard';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactCard = () => {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'mayankpallai@gmail.com', href: 'mailto:mayankpallai@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/mayank', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mayank', href: 'https://linkedin.com' },
  ];

  return (
    <BentoCard 
      gradient="from-purple-500 to-orange-600 dark:from-purple-600 dark:to-orange-700"
      className="text-white"
      isClickable={true}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="font-semibold text-xl mb-2">Let&apos;s Connect</h3>
          <p className="text-white/80 text-sm">
            Always open to discussing new opportunities and interesting projects.
          </p>
        </div>
        <ExternalLink className="w-5 h-5 text-white/60" />
      </div>
      
      <div className="space-y-3">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <IconComponent className="w-4 h-4 text-white/80" />
              <div className="flex-1 min-w-0">
                <div className="text-white/70 text-xs">{contact.label}</div>
                <div className="text-sm truncate">{contact.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};

export default ContactCard;