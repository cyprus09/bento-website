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
  iconBg: "bg-nearblack/10 dark:bg-offwhite/10",
  iconText: "text-nearblack dark:text-offwhite",
  chip: "bg-nearblack/5 dark:bg-offwhite/10 text-nearblack dark:text-offwhite border-nearblack/20 dark:border-offwhite/20",
  modalHeader: "bg-nearblack dark:bg-offwhite",
  sectionBorder: "border-nearblack/20 dark:border-offwhite/20",
  bullet: "bg-nearblack dark:bg-offwhite",
  glow: "from-nearblack/10 to-nearblack/5 dark:from-offwhite/10 dark:to-offwhite/5",
};
