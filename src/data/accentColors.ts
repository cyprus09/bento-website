interface AccentTheme {
  iconBg: string;
  iconText: string;
  chip: string;
  modalHeader: string;
  sectionBorder: string;
  bullet: string;
  glow: string;
}

export const accent: AccentTheme = {
  iconBg: "bg-terracotta/15 dark:bg-terracotta/20",
  iconText: "text-terracotta dark:text-clay",
  chip: "bg-tan/20 dark:bg-terracotta/10 text-walnut dark:text-tan border-tan/50 dark:border-terracotta/20",
  modalHeader: "bg-claudeOrange",
  sectionBorder: "border-tan/50 dark:border-terracotta/20",
  bullet: "bg-terracotta",
  glow: "from-terracotta/10 to-walnut/5",
};
