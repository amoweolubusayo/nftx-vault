import { Address, BigInt } from "@graphprotocol/graph-ts";
import { NewVault, NFTXVault } from "../generated/NFTXVault/NFTXVault";
import { Upgraded } from "../generated/NFTXVaultFactory/NFTXVaultFactory";
import { NFTXVaultTemplate } from "../generated/NFTXVaultTemplate/NFTXVaultTemplate";
import { Vault } from "../generated/schema";

export function handleNewVault(vault: NewVault): void {
  let newVault = Vault.load(vault.address.toHexString());
  let vaultTemplate = NFTXVaultTemplate.bind(vault.address);
  let assetAddress = vaultTemplate.try_assetAddress();
  let is1155 = vaultTemplate.try_is1155();
  let vaultBalance = vaultTemplate.try_balanceOf(vault.address);
  if (newVault == null) {
    newVault = new Vault(vault.address.toHexString());
    newVault.vaultId = vault.params.vaultId;
    newVault.assetAddress = assetAddress.value;
    newVault.vaultAddress = vault.address;
    newVault.is1155 = is1155.value;
    newVault.vaultBalance = vaultBalance.value;
    newVault.save();
  }
}
