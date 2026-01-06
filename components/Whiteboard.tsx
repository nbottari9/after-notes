"use client"
import { Tldraw } from "tldraw"
import { SnapshotToolbar } from "./SnapshotToolbar"
import "tldraw/tldraw.css"


export const Whiteboard = () => {


    return (
            <div className="">
            <div className="fixed inset-0">
                <Tldraw
                    components={{
                        SharePanel: SnapshotToolbar
                    }
                    }
                />
            </div>
        </div>
    )
}