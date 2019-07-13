import React, { useState, useCallback } from 'react';
import { useMessageListener, useSendMessage } from './deskgap/useMessage';
import Input from './Input';

export default function Messages() {
	const [data, setData] = useState('message data');
	const [pong, setPong] = useState('');
	useMessageListener('pong', (event, message) => {
		setPong(message);
	});
	const sendMessage = useSendMessage();
	const onClick = useCallback(() => sendMessage('ping', data), [data, sendMessage]);
	return (
		<>
			<Input value={data} setValue={setData} />
			<input readOnly value={pong} />
			<button onClick={onClick}>Send</button>
		</>
	);
}
