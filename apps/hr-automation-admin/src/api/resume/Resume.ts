import { Candidate } from "../candidate/Candidate";

export type Resume = {
  candidate?: Candidate | null;
  createdAt: Date;
  education: string | null;
  email: string | null;
  experience: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  skills: string | null;
  updatedAt: Date;
  uploadDate: Date | null;
};
