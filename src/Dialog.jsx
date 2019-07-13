import React, { useState, useCallback } from 'react';
import { useShowDialogError, useShowDialogOpen, useShowDialogSave } from './deskgap/useDialog';
import Input from './Input';

function DialogError()
{
	const [dialogErrorTitle, setDialogErrorTitle] = useState('error title');
	const [dialogErrorContent, setDialogErrorContent] = useState('error content');
	const showDialogError = useShowDialogError();
	const onClick = useCallback(() => showDialogError(dialogErrorTitle, dialogErrorContent), [showDialogError, dialogErrorTitle, dialogErrorContent]);
	return (
		<>
			<h3>showErrorBox</h3>
			<Input value={dialogErrorTitle} setValue={setDialogErrorTitle} />
			<Input value={dialogErrorContent} setValue={setDialogErrorContent} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

function DialogOpen()
{
	const [allowMultiSelections, setAllowMultiSelections] = useState(false);
	const showDialogOpen = useShowDialogOpen();
	const onClick = useCallback(() => showDialogOpen(allowMultiSelections), [showDialogOpen, allowMultiSelections]);
	return (
		<>
			<h3>showOpenDialogAsync</h3>
			<Input value={allowMultiSelections} setValue={setAllowMultiSelections} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

function DialogSave()
{
	const showDialogSave = useShowDialogSave();
	return (
		<>
			<h3>showSaveDialogAsync</h3>
			<button onClick={showDialogSave}>Run</button>
		</>
	);
}

export default function Dialog()
{
	return (
		<>
			<DialogError />
			<DialogOpen />
			<DialogSave />
		</>
	);
}
