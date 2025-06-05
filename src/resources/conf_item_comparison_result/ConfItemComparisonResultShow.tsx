// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ConfItemComparisonResultShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Delta" required={false} value={<NumberField source="delta" />} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Conf Item Minus Id" required={false} value={<ReferenceField source="conf_item_minus_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Conf Item Plus Id" required={false} value={<ReferenceField source="conf_item_plus_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
