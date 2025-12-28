import { saveWhiteboard } from '@/actions/saveWhiteboard';
import React from 'react'
import { createPortal } from 'react-dom';

export const SaveModal = ({onClose}: {onClose: () => void}) => {
    const save = useCallback(() => {
        
    })
    return createPortal(
        <div className="z-9999 fixed w-4/6 h-4/6 bg-neutral-400">
            <div className="hover:cursor-pointer" onClick={onClose}>Close</div>
            <div className="bg-green-500 hover:cursor-pointer" onClick={saveWhiteboard}></div>
        
        </div>,
        document.getElementById("modal-root")!
    );
}