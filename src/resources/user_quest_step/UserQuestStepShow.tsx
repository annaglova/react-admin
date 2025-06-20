// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const UserQuestStepShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="User Quest Id" required={false} value={<ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Intitial Provider Code" required={false} value={<TextField source="intitial_provider_code" />} />
        <Labeled label="Provider Code" required={false} value={<TextField source="provider_code" />} />
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Finish Date" required={false} value={<DateField source="finish_date" />} />
        <Labeled label="Output" required={false} value={<TextField source="output" />} />
        <Labeled label="Input" required={false} value={<TextField source="input" />} />
        <Labeled label="Dependencies" required={false} value={<TextField source="dependencies" />} />
      </>
    }
  />
);
