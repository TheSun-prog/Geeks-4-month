import React from 'react'

const Pagination = ({ page, count, handleNext, handlePrev }) => {
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {page} / {count}

      <button onClick={handleNext}>Next</button>

    </div>
  )
}

export default Pagination