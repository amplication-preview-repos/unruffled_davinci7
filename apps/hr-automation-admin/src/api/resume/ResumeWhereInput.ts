import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResumeWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  education?: StringNullableFilter;
  email?: StringNullableFilter;
  experience?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  skills?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
};
