import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type InterviewCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  comments?: string | null;
  interviewDate?: Date | null;
  interviewer?: string | null;
  interviewType?: "Option1" | null;
};
