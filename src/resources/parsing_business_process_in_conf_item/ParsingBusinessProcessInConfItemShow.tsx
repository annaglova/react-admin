// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ParsingBusinessProcessInConfItemShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Priority" required={false} value={<NumberField source="priority" />} />
        <Labeled label="Business Process Id" required={false} value={<TextField source="business_process_id" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Active" required={false} value={<BooleanField source="is_active" />} />
        <Labeled label="Provider Class Name" required={false} value={<TextField source="provider_class_name" />} />
      </>
    }
  />
);
