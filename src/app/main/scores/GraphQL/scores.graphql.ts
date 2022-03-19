import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateScore {
  @Field()
  name: string;

  @Field()
  abbreviation: string;

  @Field({ nullable: true })
  slug: string;

  @Field()
  archived: boolean;

  @Field({ nullable: true })
  order: number;

  @Field({ nullable: true })
  notes: string;

  @Field()
  createdAt: Date = new Date();

  @Field()
  updatedAt: Date = new Date();
}

@InputType()
export class UpdateScore extends PartialType(
  OmitType(CreateScore, ['createdAt'] as const)
) {}
