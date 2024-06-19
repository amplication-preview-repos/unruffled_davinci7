import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="Phone" source="phone" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feedback"
          target="candidateId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="candidateId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="InterviewDate" source="interviewDate" />
            <TextField label="Interviewer" source="interviewer" />
            <TextField label="InterviewType" source="interviewType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Resume"
          target="candidateId"
          label="Resumes"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
