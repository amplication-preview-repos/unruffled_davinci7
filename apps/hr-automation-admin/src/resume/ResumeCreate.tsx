import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
