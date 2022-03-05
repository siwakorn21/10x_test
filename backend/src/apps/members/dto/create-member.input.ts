import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {
  @Field()
  partyId: string;

  @Field()
  userId: string;
}
