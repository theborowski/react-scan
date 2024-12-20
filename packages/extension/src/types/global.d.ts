declare global {
  type BroadcastHandler = (type: BroadcastMessage['type'], data: Extract<BroadcastMessage, { type: typeof type }>['data']) => void;

  interface Window {
    __REACT_SCAN__?: {
      ReactScanInternals?: {
        isPaused: boolean;
      };
    };
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
      renderers: Map<number, { version?: string }>;
      supportsFiber: boolean;
      checkDCE: () => void;
      onCommitFiberRoot: (rendererID: number, root: unknown) => void;
      onCommitFiberUnmount: () => void;
      onScheduleFiberRoot: () => void;
      inject: (renderer: unknown) => number;
    };
    wrappedJSObject?: any;
  }

  interface globalThis {
    __REACT_SCAN__?: Window['__REACT_SCAN__'];
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: Window['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
  }

  var __REACT_DEVTOOLS_GLOBAL_HOOK__: Window['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
  type TTimer = ReturnType<typeof setTimeout> | ReturnType<typeof setInterval> | null;
}

export {};
