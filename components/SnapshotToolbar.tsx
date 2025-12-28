"use client"
import { saveWhiteboard } from "@/actions/saveWhiteboard"
import { useCallback } from "react"
import { loadSnapshot, useEditor } from "tldraw"
import { useSaveModal } from "./SaveModalContext"

export const SnapshotToolbar = () => {
    const editor = useEditor()
	const {openSaveModal} = useSaveModal()

    const save = useCallback(() => {
        const {document, session} = editor.getSnapshot()
        saveWhiteboard(JSON.stringify({document, session}))
		openSaveModal()
    }, [editor, openSaveModal])

	const load = useCallback(async () => {
		const res = await fetch("/api/test")
		const snapshot = await res.json()
		loadSnapshot(editor.store, JSON.parse(snapshot))
	}, [editor])

    return (
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
				className="hover:cursor-pointer"
				onClick={save}
			>
				Save Snapshot
			</button>
			<button
			onClick={load}
			className="hover:cursor-pointer"
			>
				Load Snapshot
			</button>
		</div>
    )
}