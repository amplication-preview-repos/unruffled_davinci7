import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type FeedbackCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  comments?: string | null;
  feedbackDate?: Date | null;
  interviewer?: string | null;
  rating?: number | null;
};
