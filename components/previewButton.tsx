'use client'

import React, { type MouseEventHandler } from 'react'

export default function previewButton (
  props: { isShow: boolean, onClick: MouseEventHandler<HTMLButtonElement> }
): React.JSX.Element {
  return (
    <button id='preview-button' onClick={props.onClick}
    className='px-2 py-1 border rounded  text-slate-50
    transition-colors'>
      preview
    </button>
  )
}
