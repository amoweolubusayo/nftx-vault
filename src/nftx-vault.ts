// import { Bytes, BigInt } from "@graphprotocol/graph-ts";

// import { Vault, VaultTemplate } from "../generated/schema";

// export function handleCreateNewVault(vault: NewVault): void {
//   let address = vault.address.toHex();
//   let newVault = new VaultTemplate(address);
//   if (newVault != null) {
//     newVault.vaultId = vault.params.vaultId;
//     newVault.vaultAddress = vault.params.vaultAddress;
//     newVault.assetAddress = vault.params.assetAddress;
//   }
//   newVault.save();
// }
