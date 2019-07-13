import { useCallback } from 'react';
import useDeskgap from './useDeskgap';

export function useNode() {
	const { asyncNode } = useDeskgap();
	return asyncNode;
}

export function useOs() {
	const node = useNode();
	return useCallback(async method => {
		const os = await node.require('os');
		return os.invoke(method).value();
	}, [node]);
}

export function useProcess() {
	const node = useNode();
	return useCallback(prop => node.getGlobal('process').prop(prop).value(), [node]);
}
