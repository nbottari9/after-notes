"use client"

import { useCallback } from "react";
import { Tldraw, TLEditorSnapshot, useEditor } from "tldraw";
import 'tldraw/tldraw.css'
import fs from "fs"

// const jsonSnapshot  = _jsonSnapshot as any as TLEditorSnapshot
export default function WhiteboardPage() {
    const editor = useEditor()

    const save = useCallback(() => {
        const date = Date.now()
        const {document, session} = editor.getSnapshot()
        const json = JSON.stringify(document.store)
        console.log(json)
        // should probably use this to save the file on the server side and then send it to s3
        // fs.writeFile(`output-${date.toLocaleString()}.json`, json, 'utf-8', (err) => {
        //     if (err) {
        //         console.log("Error writing file:", err)
        //     } else {
        //         console.log(`Successfully wrote to file: output-${date.toLocaleString()}.json`)
        //     }
        // })
    }, [editor])

    return (
        <div>
        <div className="fixed inset-0">
            <Tldraw/>
        </div>
        <button onClick={save}>
            Save file now
        </button>
        </div>
    )
}