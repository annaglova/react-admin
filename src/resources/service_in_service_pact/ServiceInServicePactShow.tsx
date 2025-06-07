// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ServiceInServicePactShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Service Item Id" required={false} value={<ReferenceField source="service_item_id" reference="service_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Service Pact Id" required={false} value={<ReferenceField source="service_pact_id" reference="service_pact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reaction Time Value" required={false} value={<NumberField source="reaction_time_value" />} />
        <Labeled label="Reaction Time Unit Id" required={false} value={<ReferenceField source="reaction_time_unit_id" reference="time_unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Solution Time Value" required={false} value={<NumberField source="solution_time_value" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Solution Time Unit Id" required={false} value={<ReferenceField source="solution_time_unit_id" reference="time_unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Calendar Id" required={false} value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reaction Time" required={false} value={<TextField source="reaction_time" />} />
        <Labeled label="Solution Time" required={false} value={<TextField source="solution_time" />} />
        <Labeled label="Concat Name" required={false} value={<TextField source="concat_name" />} />
      </>
    }
  />
);
