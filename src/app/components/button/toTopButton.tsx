import React from 'react'
import "./toTopButton.css"
import { FaChevronUp } from 'react-icons/fa'


export default function ToTopButton() {
  return (
    <>
     <a
      href="#top"
      className="back-top-btn"
      aria-label="Back to top"
      data-back-top-btn
    >
      <FaChevronUp/>
    </a>
    </>
  )
}
