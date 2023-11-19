import { proxy } from 'comlink';
import { BarretenbergApi } from '../barretenberg_api/index.js';
import { BarretenbergBinder } from '../barretenberg_binder/index.js';
import { createMainWorker } from '../barretenberg_wasm/barretenberg_wasm_main/factory/node/index.js';
import { getRemoteBarretenbergWasm } from '../barretenberg_wasm/helpers/index.js';
import createDebug from 'debug';
const debug = createDebug('bb.js:wasm');
/**
 * The main class library consumers interact with.
 * It extends the generated api, and provides a static constructor "new" to compose components.
 */
export class Barretenberg extends BarretenbergApi {
    constructor(worker, wasm) {
        super(new BarretenbergBinder(wasm));
        this.worker = worker;
        this.wasm = wasm;
    }
    /**
     * Constructs an instance of Barretenberg.
     * Launches it within a worker. This is necessary as it block waiting on child threads to complete,
     * and blocking the main thread in the browser is not allowed.
     * It threads > 1 (defaults to hardware availability), child threads will be created on their own workers.
     */
    static async new(threads) {
        const worker = createMainWorker();
        const wasm = getRemoteBarretenbergWasm(worker);
        await wasm.init(threads, proxy(debug));
        return new Barretenberg(worker, wasm);
    }
    async getNumThreads() {
        return await this.wasm.getNumThreads();
    }
    async destroy() {
        await this.wasm.destroy();
        await this.worker.terminate();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFycmV0ZW5iZXJnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRXJHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGLE9BQU8sV0FBVyxNQUFNLE9BQU8sQ0FBQztBQUVoQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFeEM7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFlO0lBQy9DLFlBQTRCLE1BQVcsRUFBVSxJQUE0QjtRQUMzRSxLQUFLLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRFYsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFVLFNBQUksR0FBSixJQUFJLENBQXdCO0lBRTdFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQWdCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsTUFBTSxJQUFJLEdBQUcseUJBQXlCLENBQTZCLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztRQUNYLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUNGIn0=