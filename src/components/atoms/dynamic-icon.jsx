import {
  Award,
  BookOpen,
  CalendarClock,
  Certificate,
  CheckCircle,
  Clock,
  FileText,
  FolderGit2,
  GlobeCheck,
  GraduationCap,
  HelpCircle,
  LaptopMinimalCheckIcon,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";

export const ICON_REGISTRY = {
  award: Award,
  certificate: Certificate,
  "book-open": BookOpen,
  "check-circle": CheckCircle,
  clock: Clock,
  "file-text": FileText,
  "globe-check": GlobeCheck,
  lightbulb: Lightbulb,
  "messages-square": MessagesSquare,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  "calendar-clock": CalendarClock,
  "users-round": UsersRound,
  "laptop-minimal-check-icon": LaptopMinimalCheckIcon,
  "folder-git-2": FolderGit2,
  "graduation-cap": GraduationCap,
};

// Opsional: export daftar key-nya kalau mau dipakai di dropdown admin / validasi
export const AVAILABLE_ICON_KEYS = Object.keys(ICON_REGISTRY);

export function DynamicIcon({ name, className = "h-5 w-5" }) {
  const IconComponent = ICON_REGISTRY[name] ?? HelpCircle;
  return <IconComponent className={className} aria-hidden="true" />;
}
