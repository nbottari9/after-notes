import { Whiteboard } from "@/components/Whiteboard";

import fs from "fs"

export default function Test() {
    const snapshot = fs.readFile("../../output.1,766,464,843,486.json", "utf-8")
    return (
    <div>
        <Whiteboard/>
    </div>
    )
}