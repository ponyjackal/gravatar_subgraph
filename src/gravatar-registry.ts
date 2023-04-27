import {
  NewGravatar as NewGravatarEvent,
  UpdatedGravatar as UpdatedGravatarEvent
} from "../generated/GravatarRegistry/GravatarRegistry"
import { NewGravatar, UpdatedGravatar } from "../generated/schema"

export function handleNewGravatar(event: NewGravatarEvent): void {
  let entity = new NewGravatar(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.GravatarRegistry_id = event.params.id
  entity.owner = event.params.owner
  entity.displayName = event.params.displayName
  entity.imageUrl = event.params.imageUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatarEvent): void {
  let entity = new UpdatedGravatar(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.GravatarRegistry_id = event.params.id
  entity.owner = event.params.owner
  entity.displayName = event.params.displayName
  entity.imageUrl = event.params.imageUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
