'use client'

import Editor from '@/components/editor'
import EditorButton from '@/components/editorButton'
import Preview from '@/components/preview'
import PreviewButton from '@/components/previewButton'
import { marked } from 'marked'
import React, { type FormEvent, useState } from 'react'

export default function Home (): React.JSX.Element {
  const [showEditor, setShowEditor] = useState(true)
  const [showPreivew, setShowPreview] = useState(true)
  const [markdown, setMarkdown] = useState(initText)

  /**
   * An general function to handle the click on 'show editor button' and 'show
   * previewer button'
   * @param event An event represents mouse click
   * @param setter the setter which returned by useState()
   * @param isShow the state represent if show the editor or the previewer
   */
  function handleClick (
    event: FormEvent<HTMLButtonElement>,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    isShow: boolean
  ): void {
    setter(!isShow)
    const target = event.target as HTMLButtonElement
    target.style.backgroundColor = isShow ? '#9ca3af' : '#0284c7'
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
            handleClick(e, setShowEditor, showEditor)
          }} />
          <PreviewButton isShow = {showPreivew}
          onClick={(e: FormEvent<HTMLButtonElement>) => {
            handleClick(e, setShowPreview, showPreivew)
          }} />
        </div>
      </div>
      <div className='mt-hm h-auto flex flex-row justify-evenly'>
        {
          showEditor
            ? (
              <Editor isShow = {showEditor} content={markdown}
              width={showPreivew ? '400px' : '700px'}
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
              width={showEditor ? '400px' : '700px'} />
              )
            : (null)
        }
      </div>
    </main>
  )
}

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
