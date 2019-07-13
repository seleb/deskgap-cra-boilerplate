import {
	useCallback
} from 'react';
import { useNode } from './useNode';

export default function useContextMenu() {
	const node = useNode();
	return useCallback(async (menu) => {
		node.require('deskgap').then(function (deskgap) {
			return deskgap.prop('Menu').invoke('buildFromTemplate', [{
				label: menu
			}]).invoke('popup').value();
		});
	}, [node]);
}
