// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const AchievementShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="achievement_category"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Int Value" required={false} value={<NumberField source="int_value" />} />
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
      </>
    }
  />
);
