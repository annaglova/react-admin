// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const UserQuestStageShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Output" required={false} value={<TextField source="output" />} />
        <Labeled label="Input" required={false} value={<TextField source="input" />} />
        <Labeled label="User Quest Id" required={false} value={<ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Finish Date" required={false} value={<DateField source="finish_date" />} />
        <Labeled label="Stage Id" required={false} value={<ReferenceField source="stage_id" reference="quest_stage"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Order" required={false} value={<NumberField source="order" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Title" required={false} value={<TextField source="title" />} />
        <Labeled label="Business Process Id" required={false} value={<TextField source="business_process_id" />} />
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
      </>
    }
  />
);
