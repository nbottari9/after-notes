"use client"
import { useCallback } from 'react'
import { TldrawUiButton, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle, useEditor } from 'tldraw';

export const LoadDialog = ({onClose}: {onClose: () => void}) => {
    const editor = useEditor()

    const save = useCallback(() => {
        
    }, [editor, onClose])

    return (
        <>
            <TldrawUiDialogHeader>
                <TldrawUiDialogTitle>Load</TldrawUiDialogTitle>
                <TldrawUiDialogCloseButton/>
            </TldrawUiDialogHeader>
            <TldrawUiDialogBody>Load</TldrawUiDialogBody>
            <TldrawUiDialogFooter className="tlui-dialog__footer__actions">
				<TldrawUiButton type="normal" onClick={onClose}>
					<TldrawUiButtonLabel>Cancel</TldrawUiButtonLabel>
				</TldrawUiButton>
				{/* <TldrawUiButton type="primary" onClick={save}>
					<TldrawUiButtonLabel>Save</TldrawUiButtonLabel>
				</TldrawUiButton> */}
			</TldrawUiDialogFooter>
        </>
    )
}