/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { FeedbackUpdateManyWithoutCandidatesInput } from "./FeedbackUpdateManyWithoutCandidatesInput";
import { Type } from "class-transformer";
import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";
import { ResumeUpdateManyWithoutCandidatesInput } from "./ResumeUpdateManyWithoutCandidatesInput";
import { EnumCandidateStatus } from "./EnumCandidateStatus";

@InputType()
class CandidateUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => FeedbackUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => FeedbackUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  feedbacks?: FeedbackUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => InterviewUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => InterviewUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => InterviewUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  interviews?: InterviewUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResumeUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => ResumeUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => ResumeUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  resumes?: ResumeUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    enum: EnumCandidateStatus,
  })
  @IsEnum(EnumCandidateStatus)
  @IsOptional()
  @Field(() => EnumCandidateStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { CandidateUpdateInput as CandidateUpdateInput };
