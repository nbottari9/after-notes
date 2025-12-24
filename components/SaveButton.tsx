"use client"
import { saveWhiteboard } from "@/actions/saveWhiteboard"
import { useCallback } from "react"
import { useEditor } from "tldraw"

export const SaveButton = () => {
    const editor = useEditor()


    const save = useCallback(() => {
        const {document, session} = editor.getSnapshot()
        saveWhiteboard(document)
    }, [editor])

    return (
        // <button onClick={save} className="hover:cursor-pointer">
        //     Save
        // </button>

        <div style={{ padding: 20, pointerEvents: 'all', display: 'flex', gap: '10px' }}>
			<span
				style={{
					display: 'inline-block',
					transition: 'transform 0.2s ease, opacity 0.2s ease',
				}}
			>
				Saved ✅
			</span>
			<button
				onClick={save}
			>
				Save Snapshot
			</button>
			{/* <button onClick={load}>Load Snapshot</button> */}
		</div>
    )
}