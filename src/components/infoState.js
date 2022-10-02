import * as React from 'react'
/* eslint-disable eol-last */

const InfoState = (props) => {
  const {text, date} = props
  return (
      <div>
          <b>{text}</b>
          <p>{date}</p>
      </div>
  )
}

export default InfoState