import { useMemo } from 'react';

export default function useDeskgap() {
	return useMemo(() => {
		const deskgap = window.deskgap;
		if (!deskgap) {
			console.warn('DeskGap window API not available! Using mock instead.');
			return {
				asyncNode: {
					require: () => {},
					getCurrentWindow: () => {},
				},
				messageUI: {
					on: () => {},
					off: () => {},
					send: () => {},
				},
			};
		}
		return deskgap;
	}, []);
}
