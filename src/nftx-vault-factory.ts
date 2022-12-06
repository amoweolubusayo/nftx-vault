import {
  AdminChanged,
  Upgraded,
} from "../generated/NFTXVaultFactory/NFTXVaultFactory";
import { Vault, VaultInit } from "../generated/templates";

export function handleNewVault(event: AdminChanged): void {
  Vault.create(event.address);
  VaultInit.create(event.address);
}
