import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const DependencyTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="for_service_service"  />
          <BooleanInput source="for_conf_item_conf_item"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_service_conf_item"  />
          <TextInput source="reverse_type_name"  />
          <ReferenceInput source="dependency_category_id" reference="dependency_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
