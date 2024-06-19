import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  candidateId?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  interviewDate?: SortOrder;
  interviewer?: SortOrder;
  interviewType?: SortOrder;
  updatedAt?: SortOrder;
};
