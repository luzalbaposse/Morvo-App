import { BarretenbergApi } from '../barretenberg_api/index.js';
/**
 * The main class library consumers interact with.
 * It extends the generated api, and provides a static constructor "new" to compose components.
 */
export declare class Barretenberg extends BarretenbergApi {
    private worker;
    private wasm;
    private constructor();
    /**
     * Constructs an instance of Barretenberg.
     * Launches it within a worker. This is necessary as it block waiting on child threads to complete,
     * and blocking the main thread in the browser is not allowed.
     * It threads > 1 (defaults to hardware availability), child threads will be created on their own workers.
     */
    static new(threads?: number): Promise<Barretenberg>;
    getNumThreads(): Promise<number>;
    destroy(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map