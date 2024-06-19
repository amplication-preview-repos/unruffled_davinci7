import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type InterviewWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  comments?: StringNullableFilter;
  id?: StringFilter;
  interviewDate?: DateTimeNullableFilter;
  interviewer?: StringNullableFilter;
  interviewType?: "Option1";
};
