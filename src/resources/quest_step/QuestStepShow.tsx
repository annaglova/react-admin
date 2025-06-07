// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const QuestStepShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Quest Id" required={false} value={<ReferenceField source="quest_id" reference="quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Intitial Provider Code" required={false} value={<TextField source="intitial_provider_code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Provider Code" required={false} value={<TextField source="provider_code" />} />
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
        <Labeled label="Dependencies" required={false} value={<TextField source="dependencies" />} />
      </>
    }
  />
);
