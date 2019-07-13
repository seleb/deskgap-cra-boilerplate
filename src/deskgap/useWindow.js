import {
    useCallback
} from 'react';
import { useNode } from './useNode';

export function useCurrentWindow() {
    const node = useNode();
    return node.getCurrentWindow();
}

export function useInvoke() {
    const win = useCurrentWindow();
    return useCallback((...args) => win.invoke(...args), [win]);
}

export function useSetWindowSize(width, height) {
    const invoke = useInvoke();
    return useCallback((width, height) => invoke('setSize', parseInt(width), parseInt(height)).value(), [invoke]);
}
export function useSetWindowPosition() {
    const invoke = useInvoke();
    return useCallback((x, y) => invoke('setPosition', parseInt(x), parseInt(y)).value(), [invoke]);
}
export function useCenterWindow() {
    const invoke = useInvoke();
    return useCallback(() => invoke('center').value(), [invoke]);
}
