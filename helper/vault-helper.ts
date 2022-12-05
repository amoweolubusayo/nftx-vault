import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Vault } from "../generated/schema";

export function getVault(
  vaultId: BigInt,
  vaultAddress: Bytes,
  name: String,
  symbol: String
): Vault {
  let vault = Vault.load(vaultId.toHexString());
  if (!vault) {
    vault = new Vault(vaultId.toHexString());
  }
  vault.save();
  return vault;
}
