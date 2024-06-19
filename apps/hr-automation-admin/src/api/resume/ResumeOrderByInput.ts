import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  education?: SortOrder;
  email?: SortOrder;
  experience?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
