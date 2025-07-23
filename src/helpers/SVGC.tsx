import React from 'react'

import { toAbsoluteUrl } from './AssetHelpers'

type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const SVGC: React.FC<Props> = ({ className = '', path, }) => {
  return (
    <span className={`svg-icon `}>
      {/* <SVG src={toAbsoluteUrl(path)} className={className} /> */}
    </span>
  )
}

export { SVGC }