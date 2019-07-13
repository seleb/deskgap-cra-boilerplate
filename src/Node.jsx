import React, { useState, useCallback } from 'react';
import { useOs, useProcess } from './deskgap/useNode';
import Input from './Input';

export function Process()
{
	const [prop, setProp] = useState('version');
	const [result, setResult] = useState();
	const process = useProcess();
	const onClick = useCallback(async () =>
	{
		const result = await process(prop);
		setResult(result);
	}, [process, prop]);
	return (
		<>
			<h3>Process (global)</h3>
			<Input value={prop} setValue={setProp} />
			<input type="text" readOnly value={result} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

export function OS()
{
	const [command, setCommand] = useState('freemem');
	const [result, setResult] = useState();
	const os = useOs();
	const onClick = useCallback(async () =>
	{
		const result = await os(command);
		setResult(result);
	}, [os, command]);
	return (
		<>
			<h3>OS (CommonJS)</h3>
			<Input value={command} setValue={setCommand} />
			<input type="text" readOnly value={result} />
			<button onClick={onClick}>Run</button>
		</>
	);
}

export default function Node()
{
	return (
		<>
			<Process />
			<OS />
		</>
	);
}
