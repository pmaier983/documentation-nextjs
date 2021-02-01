import * as React from "react"
import { Animate } from "react-simple-animate"
import { getEditLink } from "./logic/getEditLink"
import { useStateMachine } from "little-state-machine"
import Nav from "./Nav"
import { updateSetting } from "../actions/settingActions"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const Layout: React.FC = ({ children }) => {
  const { actions, state } = useStateMachine({ updateSetting })
  const { lang } = useTranslation()
  const { pathname } = useRouter()
  const currentLanguage = lang || "en"
  const lightMode = state?.setting?.lightMode
  const [show, setShow] = React.useState(false)
  const scrollHandler = () => {
    if (window.scrollY > 75) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const editLink = getEditLink(currentLanguage, pathname)

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    if (lightMode === null && window.matchMedia) {
      actions.updateSetting({
        lightMode: window.matchMedia("(prefers-color-scheme: light)").matches,
      })
    }

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  React.useEffect(() => {
    if (lightMode) {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }
  }, [lightMode])

  return (
    <>
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav />
      {children}
      <Animate
        play={show}
        start={{ opacity: 0, visibility: "hidden" }}
        end={{ opacity: 1, visibility: "visible" }}
      >
        {editLink && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="editPage"
            aria-label="Edit Page"
            href={editLink}
          >
            Edit
          </a>
        )}
        <button
          className="scrollToTop"
          aria-label="Scroll back to top"
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </button>
      </Animate>
    </>
  )
}

export default Layout
