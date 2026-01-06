import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs"
import { TLEditorSnapshot } from "tldraw";

export async function GET(req: NextRequest) {
    const snapshot = fs.readFileSync(path.join("/Users/nickbottari/Documents/dev/after-notes/output-1,766,951,484,679.json"), "utf-8") as unknown as TLEditorSnapshot
    return NextResponse.json(snapshot, {status: 200})
}