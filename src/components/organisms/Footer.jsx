import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    items: [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: "Benefits", href: "/benefits" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
    ],
  },
];
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/assets/images/logo-lightmode.png"
                alt="Logo"
                className="w-32 object-contain dark:hidden"
              />
              <img
                src="/assets/images/logo-darkmode.png"
                alt="Logo"
                className="hidden w-32 object-contain dark:block"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A structured learning platform with a modular curriculum and
              easily accessible material previews.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-7">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-xs font-bold tracking-wider text-foreground uppercase">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="transition-colors hover:text-primary hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {currentYear} All rights reserved.</p>
          <a href="#" className="transition-colors hover:text-primary hover:underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
