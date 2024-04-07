import React from 'react'
import "./toTopButton.css"


export default function ToTopButton() {
  return (
    <>
     <a
      href="#top"
      className="back-top-btn"
      aria-label="Back to top"
      data-back-top-btn
    >
      <ion-icon name="chevron-up"></ion-icon>
    </a>
    </>
  )
}
