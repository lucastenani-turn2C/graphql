import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => ID)
  name: string;
}
