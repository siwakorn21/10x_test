import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Party } from '../../parties/entities/party.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  partyId: string;
  @ManyToOne(() => Party, (party) => party.id, { onDelete: 'CASCADE' })
  party: Party;

  @Column()
  @Field()
  userId: string;
  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;
}
