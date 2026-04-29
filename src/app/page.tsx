import HomePage from "@/components/HomePage";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";

export default function Home() {
  return (
    <I18nProvider dictionary={dictionaries.ro} locale="ro">
      <HomePage />
    </I18nProvider>
  );
}
