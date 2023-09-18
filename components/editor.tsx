'use client'

import React, { type FormEventHandler } from 'react'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin']
})

export default function Editor (
  props: {
    isShow: boolean
    content: string
    width: string
    onInput: FormEventHandler<HTMLTextAreaElement>
  }
): React.JSX.Element {
  return (
    <>
    <label htmlFor='editor' className='absolute w-0 h-0 overflow-hidden'>
      write your markdown here
    </label>
    <textarea id='editor' value={props.content} onInput={props.onInput}
    className={
      'm-1 h-fit p-2 shadow-my shadow-slate-300 resize-none outline-none' +
      ' ' + sourceCodePro.className
    }
    style={{ width: props.width }} />
    </>
  )
}
