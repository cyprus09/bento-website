import BentoCard from "@/components/bento/BentoCard";
import { Mail, Github, Linkedin, FileUser, BookOpenText } from "lucide-react";
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
    <BentoCard hoverGlow={accent.glow} className="text-gray-900 dark:text-gray-100" isClickable={false}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-xl mb-1">Let&apos;s Connect</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Always open to discussing new opportunities and interesting projects.
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
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
