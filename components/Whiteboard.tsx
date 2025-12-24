"use client"
import { Tldraw, TLEditorSnapshot } from "tldraw"
import { SaveButton } from "./SaveButton"

export const Whiteboard = ({ snapshot }: {snapshot: TLEditorSnapshot}) => {
    return (
        <div className="tldraw__editor fixed inset-0">
            <Tldraw
                snapshot={snapshot}
                components={{
                    SharePanel: SaveButton
                }
                }
            />

        </div>
    )
}