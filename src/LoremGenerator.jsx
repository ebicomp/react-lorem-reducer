import React, { useEffect, useState } from "react"
import LoremForm from "./LoremForm"
import text from "./data"
import { nanoid } from "nanoid"
const LoremGenerator = () => {
  const [paragraphs, setParagraphs] = useState([])

  const changeLineHandler = number => {
    let parsedNumber = parseInt(number)
    setParagraphs(text.slice(0, parsedNumber))
  }

  return (
    <section className="section-center">
      <h4 className="header">Tired of boring lorem ispam</h4>
      <LoremForm onChangeLineHandler={changeLineHandler} />
      {paragraphs.map(p => (
        <p key={nanoid()}>{p}</p>
      ))}
    </section>
  )
}

export default LoremGenerator
