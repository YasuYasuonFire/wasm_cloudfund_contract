/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/campaign';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* getMinimum
	*
	*/
	"getMinimum" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getMinimum", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* getDescription
	*
	*/
	"getDescription" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getDescription", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* getValue
	*
	*/
	"getValue" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getValue", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* getRecipient
	*
	*/
	"getRecipient" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getRecipient", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* getBalance
	*
	*/
	"getBalance" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getBalance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* createRequest
	*
	* @param { Array<(number | string | BN)> | null } description,
	* @param { (string | number | BN) } value,
	* @param { ArgumentTypes.AccountId } recipient,
	*/
	"createRequest" (
		description: Array<(number | string | BN)> | null,
		value: (string | number | BN),
		recipient: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [description, value, recipient], __options);
	}

	/**
	* approveRequest
	*
	*/
	"approveRequest" (
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "approveRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* finalizeRequest
	*
	*/
	"finalizeRequest" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "finalizeRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

}