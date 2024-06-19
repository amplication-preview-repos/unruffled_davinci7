import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <TextInput label="Education" multiline source="education" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Experience" multiline source="experience" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Skills" multiline source="skills" />
        <DateTimeInput label="UploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
