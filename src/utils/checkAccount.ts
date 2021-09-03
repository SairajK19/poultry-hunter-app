import { Connection, PublicKey } from "@solana/web3.js";
import * as borsh from "borsh";
import { FarmAccountData } from "../accounts/types";
import {
  BATCH_LAYOUT,
  DistributorAccount,
  FarmAccount,
  HealthOfficerAccount,
  SCHEMA,
  SellerAccount,
} from "../schema";
import { GetBatchAccounts, GetFarmerData } from "./filters";

export async function checkFarmAcount(
  programId: PublicKey,
  wallet: PublicKey,
  connection: Connection
) {
  const Pubkey = await PublicKey.createWithSeed(
    wallet,
    "farmaccount",
    programId
  );
  const account_info = await connection.getAccountInfo(Pubkey);
  if (account_info === null) {
    return false;
  } else {
    if (wallet) {
      const batches = await GetBatchAccounts(
        programId,
        wallet,
        connection,
        "farm_pubkey"
      );
      const farm_data = borsh.deserialize(
        SCHEMA,
        FarmAccount,
        account_info.data
      );
      const data = {
        farm_data: farm_data,
        farm_account_pubkey: Pubkey,
        farm_batches: batches,
      };
      return data;
    }
  }
}
export async function checkOfficerAcount(
  programId: PublicKey,
  wallet: PublicKey,
  connection: Connection
) {
  const Pubkey = await PublicKey.createWithSeed(
    wallet,
    "officeraccount",
    programId
  );
  const account_info = await connection.getAccountInfo(Pubkey);
  if (account_info === null) {
    return false;
  } else {
    return Pubkey;
  }
}
