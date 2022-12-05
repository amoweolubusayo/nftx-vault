import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts";
import { NewVault, NFTXVault } from "../generated/NFTXVault/NFTXVault";
import { VaultInit } from "../generated/NFTXVaultTemplate/NFTXVaultTemplate";
import { Vault, VaultTemplate } from "../generated/schema";

export function handleCreateNewVault(vault: NewVault): void {
  let newVault = VaultTemplate.load(vault.params.vaultId.toHex());
  if (newVault == null) {
    newVault = new VaultTemplate(vault.params.vaultId.toHex());
    newVault.vaultId = vault.params.vaultId;
    newVault.vaultAddress = vault.params.vaultAddress;
    newVault.assetAddress = vault.params.assetAddress;
  }
  newVault.save();
}
