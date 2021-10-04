import { Entity, PrimaryKey, Property } from "@mikro-orm/core"

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  // property lets us know that this is a regular column in a db
  @Property({type: "date"})
  createdAt = new Date();

  // special hook that creates a new Date every time we update
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "text" })
  title!: string;
}