import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type AccountId = string | number[]

export interface Error {
	custom ? : Array<number>
}

export class ErrorBuilder {
	static Custom(value: Array<number>): Error {
		return {
			custom: value,
		};
	}
}

