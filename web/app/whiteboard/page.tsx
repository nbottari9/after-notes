// THIS PAGE IS SERVER SIDE RENDERED

import 'tldraw/tldraw.css'

import { Whiteboard } from "@/components/Whiteboard";

//TODO: move this to its own component in a bit
// const jsonSnapshot  = _jsonSnapshot as any as TLEditorSnapshot
export default function WhiteboardPage() {

    return (
        <div>
            <Whiteboard/>
        </div>
    )
}