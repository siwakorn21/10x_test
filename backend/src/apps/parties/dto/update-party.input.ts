import { CreatePartyInput } from './create-party.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePartyInput extends PartialType(CreatePartyInput) {
  @Field()
  id: string;
}
