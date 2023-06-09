import { ObjectType, Field, Int } from 'type-graphql';
import { UpdootType } from './UpdootType';
import { UserType } from './UserType';

// we need to create a class that will be used as a type
// for the graphql schema by adding the @ObjectType() decorator
@ObjectType()
export class PostType {
	// we need to add the @Field() decorator to each property
	// that we want to expose in the graphql schema
	@Field()
	id: number;

	@Field()
	title: string;

	@Field()
	text: string;

	@Field()
	points: number;

	@Field()
	authorId: number;

	@Field(() => UserType)
	author: UserType;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;

	@Field(() => [UpdootType])
	updoots: UpdootType[];

	@Field(() => Int, { nullable: true })
	voteStatus?: number | null;
}
