import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PartiesService } from './parties.service';
import { Party } from './entities/party.entity';
import { CreatePartyInput } from './dto/create-party.input';
import { UpdatePartyInput } from './dto/update-party.input';

@Resolver(() => Party)
export class PartiesResolver {
  constructor(private readonly partiesService: PartiesService) {}

  @Mutation(() => Party)
  createParty(@Args('createPartyInput') createPartyInput: CreatePartyInput) {
    return this.partiesService.create(createPartyInput);
  }

  @Query(() => [Party], { name: 'parties' })
  findAll() {
    return this.partiesService.findAll();
  }

  @Query(() => Party, { name: 'party' })
  findOne(@Args('id') id: string) {
    return this.partiesService.findOne(id);
  }

  @Mutation(() => Party)
  updateParty(@Args('updatePartyInput') updatePartyInput: UpdatePartyInput) {
    return this.partiesService.update(updatePartyInput.id, updatePartyInput);
  }

  @Mutation(() => Party)
  removeParty(@Args('id') id: string) {
    return this.partiesService.remove(id);
  }
}
