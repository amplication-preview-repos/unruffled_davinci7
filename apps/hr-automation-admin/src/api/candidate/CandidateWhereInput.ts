import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { ResumeListRelationFilter } from "../resume/ResumeListRelationFilter";

export type CandidateWhereInput = {
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  resumes?: ResumeListRelationFilter;
  status?: "Option1";
};
