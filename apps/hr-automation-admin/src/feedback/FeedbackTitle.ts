import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "interviewer";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.interviewer?.toString() || String(record.id);
};
