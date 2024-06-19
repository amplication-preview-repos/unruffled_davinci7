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

export const ResumeShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="Education" source="education" />
        <TextField label="Email" source="email" />
        <TextField label="Experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UploadDate" source="uploadDate" />
      </SimpleShowLayout>
    </Show>
  );
};
