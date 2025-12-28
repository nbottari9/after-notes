"use client"

import { createContext, useContext } from "react"

type TSaveModalContext = {
    openSaveModal: () => void
}

const SaveModalContext = createContext<TSaveModalContext | null>(null)

export const useSaveModal = () => {
    const ctx = useContext(SaveModalContext)
    if (!ctx) {
        throw new Error("Error! useSaveModal must be used within SaveModalProvider")
    }
    return ctx
}

export const SaveModalProvider = ({children, openSaveModal}: {children: React.ReactNode, openSaveModal: () => void}) => {
    return (
        <SaveModalContext.Provider value={{ openSaveModal }}>
            {children}
        </SaveModalContext.Provider>
    )
}