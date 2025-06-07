// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const DependencyTypeShow = ({ record }: any) => (
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
        <Labeled label="For Service Service" required={false} value={<BooleanField source="for_service_service" />} />
        <Labeled label="For Conf Item Conf Item" required={false} value={<BooleanField source="for_conf_item_conf_item" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Service Conf Item" required={false} value={<BooleanField source="for_service_conf_item" />} />
        <Labeled label="Reverse Type Name" required={false} value={<TextField source="reverse_type_name" />} />
        <Labeled label="Dependency Category Id" required={false} value={<ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
