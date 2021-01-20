import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import getTranslation from "@/jsxTranslations/homeTranslation"

const Homepage = () => {
  const { t, lang } = useTranslation("common")
  const translation = getTranslation(lang)
  return (
    <>
      <main>
        <div>
          <span>{translation.hello}</span>
          <Link locale="es" href="/">
            {t("variable-example", { count: 42 })}
          </Link>
          <Link locale="ru" href="/">
            {t("variable-example", { count: 42 })}
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage
