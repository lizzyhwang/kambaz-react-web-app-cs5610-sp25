import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

export default function EditorComponent({ setInstructions }: { setInstructions: (body: string) => void; }) {
  const editor = useRef(null);
  const [content, setContent] = useState<string>('');

  const config = useMemo(() => ({
    readonly: false
  }), []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={newContent => setContent(newContent)}
      onChange={newContent => {
        setContent(newContent);
        setInstructions(newContent)
      }}
    />
  );
};

// export default EditorComponent;