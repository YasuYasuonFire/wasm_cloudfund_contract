import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type AccountId = string | number[]

export interface Error {
	custom ? : string
}

export class ErrorBuilder {
	static Custom(value: string): Error {
		return {
			custom: value,
		};
	}
}

