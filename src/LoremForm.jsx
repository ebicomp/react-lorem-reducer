import React, { useState } from "react"

const LoremForm = ({ onChangeLineHandler }) => {
  const onFormSubmit = e => {
    e.preventDefault()
    onChangeLineHandler(lineNumber)
  }
  const [lineNumber, setLineNumber] = useState(1)
  const paragraphsArray = [1, 2, 3, 4, 5]
  return (
    <form onSubmit={onFormSubmit} className="lorem-form">
      <label htmlFor="paragraph">Paragraphs: </label>
      <select value={lineNumber} onChange={e => setLineNumber(e.target.value)} className="">
        {paragraphsArray.map(p => (
          <option key={p}>{p}</option>
        ))}
      </select>
      <button className="btn" type="submit">
        Generate
      </button>
    </form>
  )
}

export default LoremForm
