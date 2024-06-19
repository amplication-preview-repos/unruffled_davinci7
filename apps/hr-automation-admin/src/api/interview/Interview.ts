import { Candidate } from "../candidate/Candidate";

export type Interview = {
  candidate?: Candidate | null;
  comments: string | null;
  createdAt: Date;
  id: string;
  interviewDate: Date | null;
  interviewer: string | null;
  interviewType?: "Option1" | null;
  updatedAt: Date;
};
