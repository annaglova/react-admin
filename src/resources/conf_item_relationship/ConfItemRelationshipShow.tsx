// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ConfItemRelationshipShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Conf Item A Id" required={false} value={<ReferenceField source="conf_item_a_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Conf Item B Id" required={false} value={<ReferenceField source="conf_item_b_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Dependency Category Id" required={false} value={<ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Dependency Type Id" required={false} value={<ReferenceField source="dependency_type_id" reference="dependency_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
