#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

// Generated with Sol2Ink v1.0.0
// https://github.com/Supercolony-net/sol2ink

///SPDX-License-Identifier: GPL-3.0
#[openbrush::contract]
pub mod campaign {
    use ink_prelude::string::String;
    use ink_prelude::vec::Vec;
    use ink_storage::traits::SpreadAllocate;
    use openbrush::traits::Storage;
    use scale::Decode;
    use scale::Encode;

    #[derive(Debug, Encode, Decode, PartialEq)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        Custom(String),
    }


    pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

    #[derive(Default, Debug)]
    #[openbrush::upgradeable_storage(STORAGE_KEY)]
    pub struct Data {
        pub manager: AccountId,
        pub minimum_contribution: u128,
        pub approvers: Vec<AccountId>,
    }

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Campaign {
        #[storage_field]
        data: Data,
    }

    impl Campaign {
        #[ink(constructor)]
        pub fn new(minimum: u128) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {
                instance.data.manager = instance.env().caller();
                instance.data.minimum_contribution = minimum;
            })
        }

        #[ink(message, payable)]
        pub fn contribute(&mut self) -> Result<(), Error> {
            if self.env().transferred_value() <= self.data.minimum_contribution {
                return Err(Error::Custom(String::from(
                    "SMART CONTRACT MAKE PANIC BEEP BEEP BEEP",
                )));
            }
            // Sol2Ink Not Implemented yet: approvers.push(msg.sender);
            Ok(())
        }

    }
}
