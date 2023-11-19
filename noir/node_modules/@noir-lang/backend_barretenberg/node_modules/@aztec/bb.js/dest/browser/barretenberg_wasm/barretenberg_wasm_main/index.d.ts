import { Remote } from 'comlink';
import { BarretenbergWasmBase } from '../barretenberg_wasm_base/index.js';
export declare class BarretenbergWasmMain extends BarretenbergWasmBase {
    static MAX_THREADS: number;
    private workers;
    private remoteWasms;
    private nextWorker;
    private nextThreadId;
    getNumThreads(): number;
    /**
     * Init as main thread. Spawn child threads.
     */
    init(threads?: number, logger?: (msg: string) => void, initial?: number, maximum?: number): Promise<void>;
    /**
     * Called on main thread. Signals child threads to gracefully exit.
     */
    destroy(): Promise<void>;
    protected getImportObj(memory: WebAssembly.Memory): {
        wasi: {
            'thread-spawn': (arg: number) => number;
        };
        env: {
            env_hardware_concurrency: () => number;
            logstr: (addr: number) => void;
            get_data: (keyAddr: number, outBufAddr: number) => void;
            set_data: (keyAddr: number, dataAddr: number, dataLength: number) => void;
            memory: WebAssembly.Memory;
        };
        wasi_snapshot_preview1: {
            random_get: (out: any, length: number) => void;
            clock_time_get: (a1: number, a2: number, out: number) => void;
            proc_exit: () => never;
        };
    };
}
export type BarretenbergWasmMainWorker = Remote<BarretenbergWasmMain>;
//# sourceMappingURL=index.d.ts.map