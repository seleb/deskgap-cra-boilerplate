import React, { useState, useCallback } from 'react';
import { useSetWindowSize, useCenterWindow, useSetWindowPosition } from './deskgap/useWindow';
import Input from './Input';

function WindowSize()
{
	const [x, setX] = useState(600);
	const [y, setY] = useState(500);
	const setWindowSize = useSetWindowSize();
	const onClick = useCallback(() => setWindowSize(x, y), [setWindowSize, x, y]);
	return (
		<>
			<h3>Size</h3>
			<Input value={x} setValue={setX} />
			<Input value={y} setValue={setY} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

function WindowPosition()
{
	const [x, setX] = useState(100);
	const [y, setY] = useState(100);
	const setWindowPosition = useSetWindowPosition();
	const onClick = useCallback(() => setWindowPosition(x, y), [setWindowPosition, x, y]);
	return (
		<>
			<h3>Position</h3>
			<Input value={x} setValue={setX} />
			<Input value={y} setValue={setY} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

function WindowCenter()
{
	const centerWindow = useCenterWindow();
	return (
		<>
			<h3>Center</h3>
			<button onClick={centerWindow}>Run</button>
		</>
	);
}

export default function Window()
{
	return (
		<>
			<WindowSize />
			<WindowPosition />
			<WindowCenter />
		</>
	);
}
