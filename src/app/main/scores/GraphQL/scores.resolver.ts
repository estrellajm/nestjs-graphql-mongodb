import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateScore, UpdateScore } from './scores.graphql';
import { Score } from '../MongoDB/scores.schema';
import { ScoresService } from '../service/scores.service';

/**
 * This file defines the GraphQL arguments
 *
 * You can then visit the GraphQL Playground
 *
 * http://172.30.118.172:3000/graphql
 */

@Resolver()
export class ScoresResolver {
  constructor(private scoresService: ScoresService) {}

  @Mutation(() => Score)
  async createScore(@Args('createScore') createScore: CreateScore) {
    return await this.scoresService.createScore(createScore);
  }

  @Mutation(() => Score)
  async updateScore(
    @Args('_id') _id: string,
    @Args('updateScore') updateScore: UpdateScore
  ) {
    return await this.scoresService.updateScore(_id, updateScore);
  }

  @Mutation(() => [Score])
  async deleteScore(@Args('_id') _id: string) {
    return await this.scoresService.deleteScore(_id);
  }

  @Query(() => Score, { name: 'score' })
  async getScore(@Args('_id') _id: string) {
    return await this.scoresService.getScore(_id);
  }

  @Query(() => [Score], { name: 'scores' })
  async getScores() {
    return await this.scoresService.getScores();
  }
}
