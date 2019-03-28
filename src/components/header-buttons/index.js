import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { wrapper } from './style'

export default function HeaderButtons() {
  return (
    <div css={wrapper}>
      <a href="https://twitter.com/thorning_m">
        <FaTwitter />
      </a>
      <a href="https://github.com/mthorning">
        <FaGithub />
      </a>
    </div>
  )
}
