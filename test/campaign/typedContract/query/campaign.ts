/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/campaign';
import type * as ReturnTypes from '../types-returns/campaign';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* contribute
	*
	* @returns { Result<null, ReturnTypes.Error> }
	*/
	"contribute" (
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<null, ReturnTypes.Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "contribute", [], __options , (result) => { return handleReturnType(result, getTypeDescription(5, 'campaign')); });
	}

}