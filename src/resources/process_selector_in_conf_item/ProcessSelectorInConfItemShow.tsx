// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ProcessSelectorInConfItemShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Is Collection" required={false} value={<BooleanField source="is_collection" />} />
        <Labeled label="Selector" required={false} value={<TextField source="selector" />} />
        <Labeled label="Parameter Name" required={false} value={<TextField source="parameter_name" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Result Element Name" required={false} value={<TextField source="result_element_name" />} />
      </>
    }
  />
);
