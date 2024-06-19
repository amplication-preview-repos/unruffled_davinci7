import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  comments?: StringNullableFilter;
  feedbackDate?: DateTimeNullableFilter;
  id?: StringFilter;
  interviewer?: StringNullableFilter;
  rating?: IntNullableFilter;
};
