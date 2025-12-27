import { useEffect, useRef, useState } from 'react';

const win = typeof window === 'undefined' ? null : window;
const wv =
	win && typeof win.visualViewport !== 'undefined' ? win.visualViewport : null;

const getSize = () => {
	if (typeof document === 'undefined') {
		return [0, 0] as const;
	}
	return [
		document.documentElement.clientWidth,
		document.documentElement.clientHeight,
	] as const;
};

export type WindowEventListener<
	K extends keyof WindowEventMap = keyof WindowEventMap
> = (this: Window, ev: WindowEventMap[K]) => unknown;

export type DocumentEvenetListener<
	K extends keyof DocumentEventMap = keyof DocumentEventMap
> = (this: Window, ev: DocumentEventMap[K]) => unknown;

function useEvent(target: any, type: any, listener: any, cleanup?: any): void {
	const storedListener = useRef(listener);
	const storedCleanUp = useRef(cleanup);

	useEffect(() => {
		storedListener.current = listener;
		storedCleanUp.current = cleanup;
	});

	useEffect(() => {
		const targetEl = target && 'current' in target ? target.current : target;
		if (!targetEl) return;

		let unsubscribed = false;

		const handler = function (this: any, ...args: any[]) {
			if (!unsubscribed) storedListener.current.apply(this, args);
		};
		targetEl?.addEventListener(type, handler);

		return () => {
			unsubscribed = true;
			targetEl?.removeEventListener(type, handler);
			storedCleanUp.current?.();
		};
	}, [target, type]);
}

export const useScreenSize = (): readonly [number, number] => {
	const [size, setSize] = useState(() => getSize());

	useEvent(win, 'resize', () => {
		setSize(getSize());
	});

	useEvent(wv, 'resize', () => {
		setSize(getSize());
	});

	return size;
};
