import BentoCard from '@/components/bento/BentoCard';
import { Mail, Github, Linkedin, FileUser } from 'lucide-react';

const ContactCard = () => {
  const contacts = [
    { icon: Mail, label: 'Email', href: 'mailto:mayankpallai@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/cyprus09' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mayank-pallai-bb331921a/' },
    { icon: FileUser, label: 'Resume', href: '/images/resume.pdf' },
  ];

  return (
    <BentoCard 
      gradient="from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-700"
      className="text-white"
      isClickable={false}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-xl mb-1">Let&apos;s Connect</h3>
          <p className="text-white/80 text-sm">
            Always open to discussing new opportunities and interesting projects.
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <IconComponent className="w-4 h-4 text-white/80" />
              <div className="flex-1 min-w-0">
                <a href={contact.href} target='_blank'><div className="text-white/70 text-sm">{contact.label}</div></a>
              </div>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};

export default ContactCard;