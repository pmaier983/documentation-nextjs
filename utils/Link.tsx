/// <reference types="node" />
import React from "react"
import Link from "@/utils/Link"
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
  className?: string
  activeClassName?: string
  ref?: any
}

// TODO: fix the typing here
// : React.DetailedReactHTMLElement<
//   {
//     onMouseEnter?: (event: React.MouseEvent<Element, MouseEvent>) => void
//     onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
//     href?: string | undefined
//   },
//   HTMLElement
// >

const TranslatedLink: React.FC<LinkProps> = ({
  href,
  children,
  className,
  activeClassName,
  ...props
}) => {
  const { lang } = useTranslation()
  return <div>Hello?</div>
}

export default TranslatedLink
