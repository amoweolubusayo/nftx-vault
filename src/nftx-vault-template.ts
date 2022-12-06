import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts";
import { NewVault, NFTXVault } from "../generated/NFTXVault/NFTXVault";
import { VaultInit } from "../generated/NFTXVaultTemplate/NFTXVaultTemplate";
import { Vault } from "../generated/schema";

export function handleCreateNewVault(vault: NewVault): void {
  let newVault = Vault.load(vault.params.vaultId.toHex());
  if (newVault == null) {
    newVault = new Vault(vault.params.vaultId.toHex());
    newVault.vaultId = vault.params.vaultId;
    newVault.vaultAddress = vault.params.vaultAddress;
    newVault.assetAddress = vault.params.assetAddress;
  }
  newVault.save();
}

// export function handleUpdateVaultFees(vault: NewVault): void {
//   let newVault = VaultTemplate.load(vault.params.vaultId.toHex());
//   if (newVault == null) {
//     newVault = new VaultTemplate(vault.params.vaultId.toHex());
//     newVault.vaultId = vault.params.vaultId;
//     newVault.vaultAddress = vault.params.vaultAddress;
//     newVault.assetAddress = vault.params.assetAddress;
//   }
//   newVault.save();
// }
