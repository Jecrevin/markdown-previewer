'use client'

import React from 'react'

export default function Preview (
  props: { isShow: boolean, content: string, width: string }
): React.JSX.Element {
  return (
    <div id='preview' dangerouslySetInnerHTML={{ __html: props.content }}
    className='py-2 px-4 shadow-my shadow-slate-300 overflow-y-scroll'
    style={{ width: props.width }} />
  )
}
