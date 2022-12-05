import { AdminChanged } from "../generated/NFTXVaultFactory/NFTXVaultFactory";
import { Vault } from "../generated/templates";

export function handleNewVault(event: AdminChanged): void {
  Vault.create(event.address);
}
