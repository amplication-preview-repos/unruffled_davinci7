import { Candidate } from "../candidate/Candidate";

export type Feedback = {
  candidate?: Candidate | null;
  comments: string | null;
  createdAt: Date;
  feedbackDate: Date | null;
  id: string;
  interviewer: string | null;
  rating: number | null;
  updatedAt: Date;
};
