import { InputMap } from '@noir-lang/noirc_abi';
import { WitnessMap } from '@noir-lang/acvm_js';
import { CompiledCircuit } from '@noir-lang/types';
export declare function generateWitness(compiledProgram: CompiledCircuit, inputs: InputMap): Promise<WitnessMap>;
