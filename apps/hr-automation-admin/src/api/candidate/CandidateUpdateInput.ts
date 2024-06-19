import { FeedbackUpdateManyWithoutCandidatesInput } from "./FeedbackUpdateManyWithoutCandidatesInput";
import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";
import { ResumeUpdateManyWithoutCandidatesInput } from "./ResumeUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCandidatesInput;
  firstName?: string | null;
  interviews?: InterviewUpdateManyWithoutCandidatesInput;
  lastName?: string | null;
  phone?: string | null;
  resumes?: ResumeUpdateManyWithoutCandidatesInput;
  status?: "Option1" | null;
};
