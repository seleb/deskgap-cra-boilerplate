import React, { useState, useCallback } from 'react';
import useContextMenu from './deskgap/useContextMenu';
import Input from './Input';

export default function ContextMenu()
{
	const [value, setValue] = useState('I am a menu item');
	const contextMenu = useContextMenu();
	const onClick = useCallback(() => contextMenu(value), [contextMenu, value]);
	return (
		<>
			<Input setValue={setValue} value={value} />
			<button onClick={onClick}>Run</button>
		</>
	);
}
