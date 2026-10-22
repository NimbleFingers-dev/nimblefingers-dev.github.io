import profile from '../data/profile.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Logo from './Logo.jsx';

// Logo horizontal: símbolo + "NimbleFingers" + lema, igual que assets/logo/logo-horizontal.svg.
// El texto es HTML real (fuente Sora ya cargada) para que cambie con el idioma y el modo oscuro,
// y se lea nítido a cualquier tamaño.
// El lema se oculta donde no cabe en la misma fila que los botones de idioma y tema:
// en celulares (< 640 px) y en la columna angosta de 1024–1279 px.
export default function LogoHorizontal() {
  const { tx } = useLanguage();
  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <Logo className="h-11 w-[66px] shrink-0 sm:h-16 sm:w-24 lg:h-14 lg:w-[84px] xl:h-16 xl:w-24" />
      <span className="flex flex-col">
        <span className="text-lg font-semibold leading-none tracking-tight sm:text-2xl lg:text-xl xl:text-2xl">
          Nimble<span className="text-accent-strong">Fingers</span>
        </span>
        <span className="mt-1.5 hidden text-sm leading-tight font-normal text-muted sm:block lg:hidden xl:block">
          {tx(profile.tagline)}
        </span>
      </span>
    </span>
  );
}
