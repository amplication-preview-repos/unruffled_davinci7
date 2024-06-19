import { FeedbackCreateNestedManyWithoutCandidatesInput } from "./FeedbackCreateNestedManyWithoutCandidatesInput";
import { InterviewCreateNestedManyWithoutCandidatesInput } from "./InterviewCreateNestedManyWithoutCandidatesInput";
import { ResumeCreateNestedManyWithoutCandidatesInput } from "./ResumeCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCandidatesInput;
  firstName?: string | null;
  interviews?: InterviewCreateNestedManyWithoutCandidatesInput;
  lastName?: string | null;
  phone?: string | null;
  resumes?: ResumeCreateNestedManyWithoutCandidatesInput;
  status?: "Option1" | null;
};
