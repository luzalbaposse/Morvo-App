import { Backend, CompiledCircuit, ProofData } from '@noir-lang/types';
import { InputMap, InputValue } from '@noir-lang/noirc_abi';
export declare class Noir {
    private circuit;
    private backend?;
    constructor(circuit: CompiledCircuit, backend?: Backend | undefined);
    init(): Promise<void>;
    destroy(): Promise<void>;
    private getBackend;
    execute(inputs: InputMap): Promise<{
        witness: Uint8Array;
        returnValue: InputValue;
    }>;
    generateFinalProof(inputs: InputMap): Promise<ProofData>;
    verifyFinalProof(proofData: ProofData): Promise<boolean>;
}
