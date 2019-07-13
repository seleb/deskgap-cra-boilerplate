import {
	useEffect,
	useCallback
} from 'react';
import useDeskgap from "./useDeskgap";

export function useMessageListener(channel, listener) {
	const {
		messageUI
	} = useDeskgap();
	useEffect(() => {
		messageUI.on(channel, listener);
		return () => messageUI.removeListener(channel, listener);
	}, [channel, listener, messageUI]);
}

export function useSendMessage() {
	const {
		messageUI
	} = useDeskgap();
	return useCallback((channel, message) => messageUI.send(channel, message), [messageUI]);
}
