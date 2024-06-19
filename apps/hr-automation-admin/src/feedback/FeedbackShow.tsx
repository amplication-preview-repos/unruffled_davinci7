import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="FeedbackDate" source="feedbackDate" />
        <TextField label="ID" source="id" />
        <TextField label="Interviewer" source="interviewer" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
