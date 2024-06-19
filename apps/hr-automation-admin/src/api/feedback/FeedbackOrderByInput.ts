import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  candidateId?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  feedbackDate?: SortOrder;
  id?: SortOrder;
  interviewer?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
