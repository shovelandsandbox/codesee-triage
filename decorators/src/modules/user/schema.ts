import { Field, ID, InputType, ObjectType, registerEnumType } from 'type-graphql'

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  INVITED = 'INVITED',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  CREATED = 'CREATED',
}

registerEnumType(UserStatus, { name: 'Status' })

@ObjectType('User')
export class UserSchema {
  @Field(() => ID)
  id!: string

  @Field()
  name!: string

  @Field(() => String, { nullable: true })
  photoURL?: string

  @Field()
  email!: string

  @Field({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  status?: UserStatus
}

@InputType()
export class SendSignInEmailLinkRequest {
  @Field()
  userId!: string

  @Field()
  storeId!: string
}

@InputType()
export class UpdateUserRequest {
  @Field(() => ID)
  id!: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  photoURL?: string

  @Field({ nullable: true })
  email?: string
}

@InputType()
export class UserFilter {
  @Field(() => [UserStatus], { nullable: true })
  statuses?: UserStatus[]
}