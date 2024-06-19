import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";

export const ResumeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Resumes"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
