import {
  Award,
  BookOpen,
  Certificate,
  CheckCircle,
  Clock,
  FileText,
  GlobeCheck,
  HelpCircle,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const ICON_REGISTRY = {
  award: Award,
  "certificate": Certificate,
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
};

// Opsional: export daftar key-nya kalau mau dipakai di dropdown admin / validasi
export const AVAILABLE_ICON_KEYS = Object.keys(ICON_REGISTRY);

export function DynamicIcon({ name, className = "h-5 w-5" }) {
  const IconComponent = ICON_REGISTRY[name] ?? HelpCircle;
  return <IconComponent className={className} aria-hidden="true" />;
}