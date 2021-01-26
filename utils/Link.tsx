import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

interface LinkProps {
  href: string
  as?: string
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  locale?: string | false
  ref: any
}

const TranslatedLink: React.FC<LinkProps> = ({
  href,
  children,
  ...props
}): React.DetailedReactHTMLElement<
  {
    onMouseEnter?: (event: React.MouseEvent<Element, MouseEvent>) => void
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
    href?: string | undefined
  },
  HTMLElement
> => {
  const { lang } = useTranslation()
  return (
    <Link href={`${lang}/${href}`} {...props}>
      {children}
    </Link>
  )
}

export default TranslatedLink
