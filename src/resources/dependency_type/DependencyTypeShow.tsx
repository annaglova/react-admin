// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const DependencyTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="For Service Service" value={<BooleanField source="for_service_service" />} />
        <Labeled label="For Conf Item Conf Item" value={<BooleanField source="for_conf_item_conf_item" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Service Conf Item" value={<BooleanField source="for_service_conf_item" />} />
        <Labeled label="Reverse Type Name" value={<TextField source="reverse_type_name" />} />
        <Labeled label="Dependency Category Id" value={<ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
