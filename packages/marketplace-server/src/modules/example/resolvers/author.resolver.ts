import { Int, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Args } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { Post } from '../models/post.model';

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
    };
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return [
      {
        id,
        title: 'Post 1',
        votes: 1,
      },
    ];
  }
}
