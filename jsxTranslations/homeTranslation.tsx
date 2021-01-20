import _ from "lodash/fp"

import en from "@/locales/en/home"
import es from "@/locales/es/home"
import jp from "@/locales/jp/home"
import kr from "@/locales/kr/home"
import pt from "@/locales/pt/home"
import ru from "@/locales/ru/home"
import zh from "@/locales/zh/home"

export const translations = {
  en: en,
  es: es,
  jp: jp,
  kr: kr,
  pt: pt,
  ru: ru,
  zh: zh,
}

const getTranslation = (lang: string) => _.get(`${lang}`, translations)

export default getTranslation
