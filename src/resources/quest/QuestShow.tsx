// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const QuestShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="quest_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reward" value={<NumberField source="reward" />} />
        <Labeled label="Frequency Interval" value={<NumberField source="frequency_interval" />} />
        <Labeled label="Frequency Id" value={<ReferenceField source="frequency_id" reference="quest_frequency"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Deactivated" value={<BooleanField source="deactivated" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Total Steps" value={<NumberField source="total_steps" />} />
        <Labeled label="Deadline Date" value={<DateField source="deadline_date" />} />
      </>
    }
  />
);
