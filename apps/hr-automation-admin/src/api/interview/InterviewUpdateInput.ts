import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type InterviewUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  comments?: string | null;
  interviewDate?: Date | null;
  interviewer?: string | null;
  interviewType?: "Option1" | null;
};
