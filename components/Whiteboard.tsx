"use client"
import { Tldraw } from "tldraw"
import { SnapshotToolbar } from "./SnapshotToolbar"
import "tldraw/tldraw.css"
import { SaveModalProvider } from "./SaveModalContext"
import { useState } from "react"
import { SaveModal } from "./SaveModal"

export const Whiteboard = () => {
    const [saveModalDialogOpen, setSaveModalDialogOpen] = useState(false)

    return (
        <SaveModalProvider openSaveModal={() => setSaveModalDialogOpen(true)}>
            <div>
            <div className="tldraw__editor fixed inset-0">
                <Tldraw
                    components={{
                        SharePanel: SnapshotToolbar
                    }
                    }
                />
            </div>
            {
                saveModalDialogOpen && (
                    <SaveModal onClose={() => setSaveModalDialogOpen(false)}/>
                )
            }
        </div>
        </SaveModalProvider>
    )
}