'use client'

import Editor from '@/components/editor'
import EditorButton from '@/components/editorButton'
import Preview from '@/components/preview'
import PreviewButton from '@/components/previewButton'
import { marked } from 'marked'
import React, { type FormEvent, useState, useEffect } from 'react'

export default function Home (): React.JSX.Element {
  const [showEditor, setShowEditor] = useState(true)
  const [showPreivew, setShowPreview] = useState(true)
  const [screen, setScreen] = useState(0)
  const [mainWidth, setMainWidth] = useState(doubleWidth)
  const [markdown, setMarkdown] = useState(initText)

  useEffect(() => {
    // set the screen width when resizing window to handle responsive design
    window.addEventListener('resize', () => {
      setScreen(window.innerWidth)
      if (screen < 768) {
        setMainWidth(singleWidth)
      }
      doubleWidth = singleWidth
    })
  }, [])

  /**
   * Handle the user click on show button. When user click either the `editor`
   * or the `preview` button, this function will ensure the corresponding part
   * will show or disappear, and gives the clicked button correct color.
   * @param event the event which triggered by user
   */
  function handleClick (event: FormEvent<HTMLButtonElement>): void {
    const target = event.target as HTMLButtonElement
    const which = target.id === 'editor-button'
    const [isShow, setter] = which
      ? [showEditor, setShowEditor]
      : [showPreivew, setShowPreview]
    setter(!isShow)
    target.style.backgroundColor = isShow ? '#9ca3af' : '#0284c7'
    let width
    if (which) {
      width = !showEditor && showPreivew ? doubleWidth : singleWidth
    } else {
      width = showEditor && !showPreivew ? doubleWidth : singleWidth
    }
    setMainWidth(width)
  }

  return (
    <main>
      <div className='w-full h-header px-4 font-sans fixed top-0 flex
      justify-between items-center bg-slate-200'>
        <h1 className='text-lg font-medium'>
          Jecrevin&apos;s Online Markdown Previewer
        </h1>
        <div id='main' className='w-40 flex justify-evenly'>
          <EditorButton isShow = {showEditor}
          onClick={(e: FormEvent<HTMLButtonElement>) => {
            handleClick(e)
          }} />
          <PreviewButton isShow = {showPreivew}
          onClick={(e: FormEvent<HTMLButtonElement>) => {
            handleClick(e)
          }} />
        </div>
      </div>
      <div className='mt-hm h-auto flex flex-col items-center md:flex-row
      justify-evenly'>
        {
          showEditor
            ? (
              <Editor isShow = {showEditor} content={markdown}
              width={mainWidth}
              onInput={(e: FormEvent<HTMLTextAreaElement>) => {
                setMarkdown((e.target as HTMLInputElement).value)
              }} />
              )
            : (null)
        }
        {
          showPreivew
            ? (
              <Preview isShow = {showPreivew} content={marked.parse(markdown)}
              width={mainWidth} />
              )
            : (null)
        }
      </div>
    </main>
  )
}

const singleWidth = '96.2%'
let doubleWidth = '47%'

const initText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
