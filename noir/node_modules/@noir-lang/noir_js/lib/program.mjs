import { generateWitness } from "./witness_generation.mjs";
import initAbi, { abiDecode } from '@noir-lang/noirc_abi';
import initACVM, { compressWitness } from '@noir-lang/acvm_js';
export class Noir {
    circuit;
    backend;
    constructor(circuit, backend) {
        this.circuit = circuit;
        this.backend = backend;
    }
    async init() {
        // If these are available, then we are in the
        // web environment. For the node environment, this
        // is a no-op.
        if (typeof initAbi === 'function') {
            await Promise.all([initAbi(), initACVM()]);
        }
    }
    async destroy() {
        await this.backend?.destroy();
    }
    getBackend() {
        if (this.backend === undefined)
            throw new Error('Operation requires a backend but none was provided');
        return this.backend;
    }
    // Initial inputs to your program
    async execute(inputs) {
        await this.init();
        const witness = await generateWitness(this.circuit, inputs);
        const { return_value: returnValue } = abiDecode(this.circuit.abi, witness);
        return { witness: compressWitness(witness), returnValue };
    }
    // Initial inputs to your program
    async generateFinalProof(inputs) {
        const { witness } = await this.execute(inputs);
        return this.getBackend().generateFinalProof(witness);
    }
    async verifyFinalProof(proofData) {
        return this.getBackend().verifyFinalProof(proofData);
    }
}
