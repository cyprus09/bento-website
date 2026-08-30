import BentoCard from "@/components/bento/BentoCard";
import { MessageCircle, Github, Linkedin, FileUser, BookOpenText, Mail } from "lucide-react";
import { accent } from "@/data/accentColors";

const ContactCard = () => {
  const contacts = [
    { icon: Mail, label: "Email", href: "mailto:mayankpallai@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/cyprus09" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-pallai-bb331921a/" },
    { icon: FileUser, label: "Resume", href: "/images/resume.pdf" },
    { icon: BookOpenText, label: "Blog", href: "https://dev.to/cyprus09" },
  ];

  return (
    <BentoCard
      hoverGlow={accent.glow}
      className="text-gray-900 dark:text-gray-100"
      contentClassName="p-4 lg:p-6 lg:py-3 lg:mt-2"
      isClickable={false}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${accent.iconBg}`}>
          <MessageCircle className={`w-4 h-4 ${accent.iconText}`} />
        </div>
        <h3 className="font-serif font-semibold text-xl">Let&apos;s Connect</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-lg bg-gray-100/70 dark:bg-white/5 hover:bg-gray-200/70 dark:hover:bg-white/10 transition-colors"
            >
              <div className={`p-1.5 rounded-md ${accent.iconBg}`}>
                <IconComponent className={`w-4 h-4 ${accent.iconText}`} />
              </div>
              <div className="flex-1 min-w-0 text-sm">{contact.label}</div>
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};

export default ContactCard;
