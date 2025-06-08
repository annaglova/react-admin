// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ConfItemProcessLaunchShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Launch Number" required={false} value={<NumberField source="launch_number" />} />
        <Labeled label="Duration" required={false} value={<NumberField source="duration" />} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
        <Labeled label="Changed Record Count" required={false} value={<NumberField source="changed_record_count" />} />
        <Labeled label="Update Date" required={false} value={<DateField source="update_date" />} />
        <Labeled label="Reanimate" required={false} value={<BooleanField source="reanimate" />} />
        <Labeled label="Parameters Value" required={false} value={<TextField source="parameters_value" />} />
      </>
    }
  />
);
