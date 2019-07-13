import {
	useCallback
} from "react";
import {
	useNode
} from "./useNode";

export function useInvoke() {
	const node = useNode();
	return useCallback(async (...args) => {
		const deskgap = await node.require('deskgap');
		return deskgap.prop('dialog').invoke(...args).resolve().value();
	}, [node]);
}

export function useShowDialogError() {
	const invoke = useInvoke();
	return useCallback((title, content) => invoke('showErrorBox', title, content), [invoke]);
}

export function useShowDialogOpen() {
	const invoke = useInvoke();
	return useCallback(async (allowsMultiSelections) => {
		const properties = [];
		if (allowsMultiSelections) {
			properties.push('multiSelections');
		}
		return invoke('showOpenDialogAsync', undefined, {
			properties
		});
	}, [invoke]);
}

export function useShowDialogSave() {
	const invoke = useInvoke();
	return useCallback(() => invoke('showSaveDialogAsync'), [invoke]);
}
