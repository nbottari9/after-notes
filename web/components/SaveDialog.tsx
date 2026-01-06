"use client"
import { saveWhiteboard } from '@/actions/saveWhiteboard';
import { useCallback } from 'react'
import { TldrawUiButton, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle, useEditor } from 'tldraw';

export const SaveDialog = ({onClose}: {onClose: () => void}) => {
    const editor = useEditor()

    const save = useCallback(() => {
        const {document, session} = editor.getSnapshot()
        saveWhiteboard(JSON.stringify({document, session}))
        console.log("Saved snapshot")
        onClose()
    }, [editor, onClose])

    return (
        <>
            <TldrawUiDialogHeader>
                <TldrawUiDialogTitle>Save</TldrawUiDialogTitle>
                <TldrawUiDialogCloseButton/>
            </TldrawUiDialogHeader>
            <TldrawUiDialogBody>Save this Page</TldrawUiDialogBody>
            <TldrawUiDialogFooter className="tlui-dialog__footer__actions">
				<TldrawUiButton type="normal" onClick={onClose}>
					<TldrawUiButtonLabel>Cancel</TldrawUiButtonLabel>
				</TldrawUiButton>
				<TldrawUiButton type="primary" onClick={save}>
					<TldrawUiButtonLabel>Save</TldrawUiButtonLabel>
				</TldrawUiButton>
			</TldrawUiDialogFooter>
        </>
    )
}