// Import React!
import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
} as any);

// Define our app...
const App = () => {
  const [value, setValue] = useState(initialValue);
  return <Editor value={value} onChange={(opts: any) => setValue(opts.value)} />
}

export default App;
