import React from 'react'

interface Props {
  header: string
  description: string
  liveUrl: string
  sourceUrl: string
}

const Project: React.FC<Props> = ({ header, description, liveUrl, sourceUrl }) => {
  return (
    <div>
      <h3>{header}</h3>
      <div>image</div>
      <p>{description}</p>
      <div>technologies</div>
      <a target="blank" href={sourceUrl}>Source code</a>
      <a target="blank" href={liveUrl}>Live version</a>
    </div>
  )
}

const projectStyle: React.CSSProperties = {
  border: '1px solid black'
}

export default Project