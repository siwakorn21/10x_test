import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePartyInput {
  @Field()
  name: string;

  @Field(() => Int)
  currentMembers: number;

  @Field(() => Int)
  maxMembers: number;
}
