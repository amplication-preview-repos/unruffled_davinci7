/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Candidate } from "./Candidate";
import { CandidateCountArgs } from "./CandidateCountArgs";
import { CandidateFindManyArgs } from "./CandidateFindManyArgs";
import { CandidateFindUniqueArgs } from "./CandidateFindUniqueArgs";
import { CreateCandidateArgs } from "./CreateCandidateArgs";
import { UpdateCandidateArgs } from "./UpdateCandidateArgs";
import { DeleteCandidateArgs } from "./DeleteCandidateArgs";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { InterviewFindManyArgs } from "../../interview/base/InterviewFindManyArgs";
import { Interview } from "../../interview/base/Interview";
import { ResumeFindManyArgs } from "../../resume/base/ResumeFindManyArgs";
import { Resume } from "../../resume/base/Resume";
import { CandidateService } from "../candidate.service";
@graphql.Resolver(() => Candidate)
export class CandidateResolverBase {
  constructor(protected readonly service: CandidateService) {}

  async _candidatesMeta(
    @graphql.Args() args: CandidateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Candidate])
  async candidates(
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    return this.service.candidates(args);
  }

  @graphql.Query(() => Candidate, { nullable: true })
  async candidate(
    @graphql.Args() args: CandidateFindUniqueArgs
  ): Promise<Candidate | null> {
    const result = await this.service.candidate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Candidate)
  async createCandidate(
    @graphql.Args() args: CreateCandidateArgs
  ): Promise<Candidate> {
    return await this.service.createCandidate({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Candidate)
  async updateCandidate(
    @graphql.Args() args: UpdateCandidateArgs
  ): Promise<Candidate | null> {
    try {
      return await this.service.updateCandidate({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Candidate)
  async deleteCandidate(
    @graphql.Args() args: DeleteCandidateArgs
  ): Promise<Candidate | null> {
    try {
      return await this.service.deleteCandidate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Feedback], { name: "feedbacks" })
  async findFeedbacks(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: FeedbackFindManyArgs
  ): Promise<Feedback[]> {
    const results = await this.service.findFeedbacks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Interview], { name: "interviews" })
  async findInterviews(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: InterviewFindManyArgs
  ): Promise<Interview[]> {
    const results = await this.service.findInterviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Resume], { name: "resumes" })
  async findResumes(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: ResumeFindManyArgs
  ): Promise<Resume[]> {
    const results = await this.service.findResumes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
