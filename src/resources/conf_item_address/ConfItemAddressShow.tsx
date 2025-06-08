// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ConfItemAddressShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Street" required={false} value={<TextField source="street" />} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="End Date" required={false} value={<DateField source="end_date" />} />
        <Labeled label="Current" required={false} value={<BooleanField source="current" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
