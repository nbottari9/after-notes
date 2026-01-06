"use server"
import fs from "fs"
import { TLStoreSnapshot } from "tldraw"

export const saveWhiteboard = async (json: string) => {
    const date = Date.now()
    console.log(json)
    fs.writeFile(`output-${date.toLocaleString()}.json`, json, 'utf-8', (err) => {
        if (err) {
            console.log("Error writing file:", err)
        } else {
            console.log(`Successfully wrote to file: output-${date.toLocaleString()}.json`)
        }
    })
    // write to s3
}