import { BufferDeserializer, NumberDeserializer, VectorDeserializer, BoolDeserializer, StringDeserializer, } from '../serialize/index.js';
import { Fr, Fq, Point, Buffer32, Buffer128, Ptr } from '../types/index.js';
export class BarretenbergApi {
    constructor(binder) {
        this.binder = binder;
    }
    async destroy() {
        await this.binder.wasm.destroy();
    }
    async pedersenInit() {
        const result = await this.binder.callWasmExport('pedersen___init', [], []);
        return;
    }
    async pedersenCompressFields(left, right) {
        const result = await this.binder.callWasmExport('pedersen___compress_fields', [left, right], [Fr]);
        return result[0];
    }
    async pedersenPlookupCompressFields(left, right) {
        const result = await this.binder.callWasmExport('pedersen___plookup_compress_fields', [left, right], [Fr]);
        return result[0];
    }
    async pedersenCompress(inputsBuffer) {
        const result = await this.binder.callWasmExport('pedersen___compress', [inputsBuffer], [Fr]);
        return result[0];
    }
    async pedersenPlookupCompress(inputsBuffer) {
        const result = await this.binder.callWasmExport('pedersen___plookup_compress', [inputsBuffer], [Fr]);
        return result[0];
    }
    async pedersenCompressWithHashIndex(inputsBuffer, hashIndex) {
        const result = await this.binder.callWasmExport('pedersen___compress_with_hash_index', [inputsBuffer, hashIndex], [Fr]);
        return result[0];
    }
    async pedersenCommit(inputsBuffer) {
        const result = await this.binder.callWasmExport('pedersen___commit', [inputsBuffer], [Fr]);
        return result[0];
    }
    async pedersenPlookupCommit(inputsBuffer) {
        const result = await this.binder.callWasmExport('pedersen___plookup_commit', [inputsBuffer], [Fr]);
        return result[0];
    }
    async pedersenPlookupCommitWithHashIndex(inputsBuffer, hashIndex) {
        const result = await this.binder.callWasmExport('pedersen___plookup_commit_with_hash_index', [inputsBuffer, hashIndex], [Fr]);
        return result[0];
    }
    async pedersenBufferToField(data) {
        const result = await this.binder.callWasmExport('pedersen___buffer_to_field', [data], [Fr]);
        return result[0];
    }
    async pedersenHashInit() {
        const result = await this.binder.callWasmExport('pedersen_hash_init', [], []);
        return;
    }
    async pedersenHashPair(left, right) {
        const result = await this.binder.callWasmExport('pedersen_hash_pair', [left, right], [Fr]);
        return result[0];
    }
    async pedersenHashMultiple(inputsBuffer) {
        const result = await this.binder.callWasmExport('pedersen_hash_multiple', [inputsBuffer], [Fr]);
        return result[0];
    }
    async pedersenHashMultipleWithHashIndex(inputsBuffer, hashIndex) {
        const result = await this.binder.callWasmExport('pedersen_hash_multiple_with_hash_index', [inputsBuffer, hashIndex], [Fr]);
        return result[0];
    }
    async pedersenHashToTree(data) {
        const result = await this.binder.callWasmExport('pedersen_hash_to_tree', [data], [VectorDeserializer(Fr)]);
        return result[0];
    }
    async blake2s(data) {
        const result = await this.binder.callWasmExport('blake2s', [data], [Buffer32]);
        return result[0];
    }
    async blake2sToField(data) {
        const result = await this.binder.callWasmExport('blake2s_to_field_', [data], [Fr]);
        return result[0];
    }
    async schnorrComputePublicKey(privateKey) {
        const result = await this.binder.callWasmExport('schnorr_compute_public_key', [privateKey], [Point]);
        return result[0];
    }
    async schnorrNegatePublicKey(publicKeyBuffer) {
        const result = await this.binder.callWasmExport('schnorr_negate_public_key', [publicKeyBuffer], [Point]);
        return result[0];
    }
    async schnorrConstructSignature(message, privateKey) {
        const result = await this.binder.callWasmExport('schnorr_construct_signature', [message, privateKey], [Buffer32, Buffer32]);
        return result;
    }
    async schnorrVerifySignature(message, pubKey, sigS, sigE) {
        const result = await this.binder.callWasmExport('schnorr_verify_signature', [message, pubKey, sigS, sigE], [BoolDeserializer()]);
        return result[0];
    }
    async schnorrMultisigCreateMultisigPublicKey(privateKey) {
        const result = await this.binder.callWasmExport('schnorr_multisig_create_multisig_public_key', [privateKey], [Buffer128]);
        return result[0];
    }
    async schnorrMultisigValidateAndCombineSignerPubkeys(signerPubkeyBuf) {
        const result = await this.binder.callWasmExport('schnorr_multisig_validate_and_combine_signer_pubkeys', [signerPubkeyBuf], [Point, BoolDeserializer()]);
        return result;
    }
    async schnorrMultisigConstructSignatureRound1() {
        const result = await this.binder.callWasmExport('schnorr_multisig_construct_signature_round_1', [], [Buffer128, Buffer128]);
        return result;
    }
    async schnorrMultisigConstructSignatureRound2(message, privateKey, signerRoundOnePrivateBuf, signerPubkeysBuf, roundOnePublicBuf) {
        const result = await this.binder.callWasmExport('schnorr_multisig_construct_signature_round_2', [message, privateKey, signerRoundOnePrivateBuf, signerPubkeysBuf, roundOnePublicBuf], [Fq, BoolDeserializer()]);
        return result;
    }
    async schnorrMultisigCombineSignatures(message, signerPubkeysBuf, roundOneBuf, roundTwoBuf) {
        const result = await this.binder.callWasmExport('schnorr_multisig_combine_signatures', [message, signerPubkeysBuf, roundOneBuf, roundTwoBuf], [Buffer32, Buffer32, BoolDeserializer()]);
        return result;
    }
    async srsInitSrs(pointsBuf, numPoints, g2PointBuf) {
        const result = await this.binder.callWasmExport('srs_init_srs', [pointsBuf, numPoints, g2PointBuf], []);
        return;
    }
    async examplesSimpleCreateAndVerifyProof() {
        const result = await this.binder.callWasmExport('examples_simple_create_and_verify_proof', [], [BoolDeserializer()]);
        return result[0];
    }
    async testThreads(threads, iterations) {
        const result = await this.binder.callWasmExport('test_threads', [threads, iterations], [NumberDeserializer()]);
        return result[0];
    }
    async testThreadAbort() {
        const result = await this.binder.callWasmExport('test_thread_abort', [], []);
        return;
    }
    async testAbort() {
        const result = await this.binder.callWasmExport('test_abort', [], []);
        return;
    }
    async commonInitSlabAllocator(circuitSize) {
        const result = await this.binder.callWasmExport('common_init_slab_allocator', [circuitSize], []);
        return;
    }
    async acirGetCircuitSizes(constraintSystemBuf) {
        const result = await this.binder.callWasmExport('acir_get_circuit_sizes', [constraintSystemBuf], [NumberDeserializer(), NumberDeserializer(), NumberDeserializer()]);
        return result;
    }
    async acirNewAcirComposer(sizeHint) {
        const result = await this.binder.callWasmExport('acir_new_acir_composer', [sizeHint], [Ptr]);
        return result[0];
    }
    async acirDeleteAcirComposer(acirComposerPtr) {
        const result = await this.binder.callWasmExport('acir_delete_acir_composer', [acirComposerPtr], []);
        return;
    }
    async acirCreateCircuit(acirComposerPtr, constraintSystemBuf, sizeHint) {
        const result = await this.binder.callWasmExport('acir_create_circuit', [acirComposerPtr, constraintSystemBuf, sizeHint], []);
        return;
    }
    async acirInitProvingKey(acirComposerPtr, constraintSystemBuf) {
        const result = await this.binder.callWasmExport('acir_init_proving_key', [acirComposerPtr, constraintSystemBuf], []);
        return;
    }
    async acirCreateProof(acirComposerPtr, constraintSystemBuf, witnessBuf, isRecursive) {
        const result = await this.binder.callWasmExport('acir_create_proof', [acirComposerPtr, constraintSystemBuf, witnessBuf, isRecursive], [BufferDeserializer()]);
        return result[0];
    }
    async acirLoadVerificationKey(acirComposerPtr, vkBuf) {
        const result = await this.binder.callWasmExport('acir_load_verification_key', [acirComposerPtr, vkBuf], []);
        return;
    }
    async acirInitVerificationKey(acirComposerPtr) {
        const result = await this.binder.callWasmExport('acir_init_verification_key', [acirComposerPtr], []);
        return;
    }
    async acirGetVerificationKey(acirComposerPtr) {
        const result = await this.binder.callWasmExport('acir_get_verification_key', [acirComposerPtr], [BufferDeserializer()]);
        return result[0];
    }
    async acirVerifyProof(acirComposerPtr, proofBuf, isRecursive) {
        const result = await this.binder.callWasmExport('acir_verify_proof', [acirComposerPtr, proofBuf, isRecursive], [BoolDeserializer()]);
        return result[0];
    }
    async acirGetSolidityVerifier(acirComposerPtr) {
        const result = await this.binder.callWasmExport('acir_get_solidity_verifier', [acirComposerPtr], [StringDeserializer()]);
        return result[0];
    }
    async acirSerializeProofIntoFields(acirComposerPtr, proofBuf, numInnerPublicInputs) {
        const result = await this.binder.callWasmExport('acir_serialize_proof_into_fields', [acirComposerPtr, proofBuf, numInnerPublicInputs], [VectorDeserializer(Fr)]);
        return result[0];
    }
    async acirSerializeVerificationKeyIntoFields(acirComposerPtr) {
        const result = await this.binder.callWasmExport('acir_serialize_verification_key_into_fields', [acirComposerPtr], [VectorDeserializer(Fr), Fr]);
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFycmV0ZW5iZXJnX2FwaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVFLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW1CLE1BQTBCO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQW9CO0lBQUcsQ0FBQztJQUVqRCxLQUFLLENBQUMsT0FBTztRQUNYLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLE9BQU87SUFDVCxDQUFDO0lBRUQsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQVEsRUFBRSxLQUFTO1FBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25HLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLLENBQUMsNkJBQTZCLENBQUMsSUFBUSxFQUFFLEtBQVM7UUFDckQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMs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