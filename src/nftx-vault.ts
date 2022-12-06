import { VaultInit } from "../generated/NFTXVaultTemplate/NFTXVaultTemplate";
import { Vault } from "../generated/schema";

export function handleCreateNewVaultInit(vaultInit: VaultInit): void {
  let newVault = Vault.load(vaultInit.params.vaultId.toHex());
  if (newVault == null) {
    newVault = new Vault(vaultInit.params.vaultId.toHex());
    newVault.vaultId = vaultInit.params.vaultId;
  }
  newVault.save();
}
