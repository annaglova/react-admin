// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetMeasurementShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Value" required={false} value={<NumberField source="value" />} />
        <Labeled label="Day" required={false} value={<NumberField source="day" />} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Measurement Type Id" required={false} value={<ReferenceField source="measurement_type_id" reference="measurement_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Unit Id" required={false} value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active Synchronization" required={false} value={<BooleanField source="active_synchronization" />} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
