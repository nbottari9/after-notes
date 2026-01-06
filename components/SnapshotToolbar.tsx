"use client"

import { useCallback } from "react"
import { loadSnapshot, useDialogs, useEditor } from "tldraw"

import { SaveDialog } from "./SaveDialog"
import { LoadDialog } from "./LoadDialog"

export const SnapshotToolbar = () => {
    const editor = useEditor()
	const {addDialog} = useDialogs()

    const save = useCallback(() => {
        addDialog({
			component: SaveDialog,
			onClose() {
				void null
			}
		})
    }, [addDialog])

	const load = useCallback(() => {
		addDialog({
			component: LoadDialog,
			onClose() {
				void null
			}
		})
	}, [addDialog])

    return (
        <div style={{ padding: 20, pointerEvents: 'all', display: 'flex', gap: '10px' }}>
			<button
				className="hover:cursor-pointer"
				onClick={save}
			>
				Save
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