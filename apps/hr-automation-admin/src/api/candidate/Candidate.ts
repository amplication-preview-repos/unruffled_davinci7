import { Feedback } from "../feedback/Feedback";
import { Interview } from "../interview/Interview";
import { Resume } from "../resume/Resume";

export type Candidate = {
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  interviews?: Array<Interview>;
  lastName: string | null;
  phone: string | null;
  resumes?: Array<Resume>;
  status?: "Option1" | null;
  updatedAt: Date;
};
