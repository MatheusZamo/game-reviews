"use client"

import { Link } from "lucide-react"
import { useState } from "react"

const ShareReviewButton = () => {
  const [buttonWasClicked, setButtonWasClicked] = useState(false)
  const handleClick = () => {
    setButtonWasClicked(true)
    navigator.clipboard.writeText(location.href)
    setTimeout(() => setButtonWasClicked(false), 2_000)
  }
  return (
    <button
      onClick={handleClick}
      className="border px-3 py-1 rounded text-slate-200 text-sm flex gap-2 items-center"
    >
      <Link color="#e2e8f0" size={16} />
      {buttonWasClicked ? "Link copiado!" : "Compartilhar"}
    </button>
  )
}

export default ShareReviewButton
