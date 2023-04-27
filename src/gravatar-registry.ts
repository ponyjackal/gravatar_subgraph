import {
  NewGravatar as NewGravatarEvent,
  UpdatedGravatar as UpdatedGravatarEvent,
} from "../generated/GravatarRegistry/GravatarRegistry";
// Import entity class
import { Gravatar } from "../generated/schema";

// Import entity class
export function handleNewGravatar(event: NewGravatarEvent): void {
  // Use id field from emitted event as unique id for the entity
  const id = event.params.id.toHex();

  // Create a new Gravatar Entity with unique id
  const gravatar = new Gravatar(id);

  // Set Gravatar Entity fields
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;

  // Save entity to store
  gravatar.save();
}
export function handleUpdatedGravatar(event: UpdatedGravatarEvent): void {
  // Use proper id to load an entity from store
  const id = event.params.id.toHex();

  // Load the entity to be updated
  let gravatar = Gravatar.load(id);

  // Create the entity if it doesn't already exist
  if (!gravatar) {
    gravatar = new Gravatar(id);
  }

  // Set updated fields to entity
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;

  // Save updated entity to store
  gravatar.save();
}
