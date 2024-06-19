import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type ResumeCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  education?: string | null;
  email?: string | null;
  experience?: string | null;
  name?: string | null;
  phone?: string | null;
  skills?: string | null;
  uploadDate?: Date | null;
};
