// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const QuestStageShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Business Process Id" required={false} value={<TextField source="business_process_id" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Quest Id" required={false} value={<ReferenceField source="quest_id" reference="quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Order" required={false} value={<NumberField source="order" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Title" required={false} value={<TextField source="title" />} />
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
      </>
    }
  />
);
