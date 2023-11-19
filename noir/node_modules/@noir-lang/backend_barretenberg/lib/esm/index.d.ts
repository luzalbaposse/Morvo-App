import { Backend, CompiledCircuit, ProofData } from '@noir-lang/types';
import { BackendOptions } from './types.js';
export declare class BarretenbergBackend implements Backend {
    private options;
    private api;
    private acirComposer;
    private acirUncompressedBytecode;
    constructor(acirCircuit: CompiledCircuit, options?: BackendOptions);
    instantiate(): Promise<void>;
    generateFinalProof(decompressedWitness: Uint8Array): Promise<ProofData>;
    generateIntermediateProof(witness: Uint8Array): Promise<ProofData>;
    generateProof(compressedWitness: Uint8Array, makeEasyToVerifyInCircuit: boolean): Promise<ProofData>;
    generateIntermediateProofArtifacts(proofData: ProofData, numOfPublicInputs?: number): Promise<{
        proofAsFields: string[];
        vkAsFields: string[];
        vkHash: string;
    }>;
    verifyFinalProof(proofData: ProofData): Promise<boolean>;
    verifyIntermediateProof(proofData: ProofData): Promise<boolean>;
    verifyProof(proof: Uint8Array, makeEasyToVerifyInCircuit: boolean): Promise<boolean>;
    destroy(): Promise<void>;
}
