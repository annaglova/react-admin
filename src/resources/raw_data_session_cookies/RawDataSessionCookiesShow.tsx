// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const RawDataSessionCookiesShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Cookies" required={false} value={<TextField source="cookies" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Headers" required={false} value={<TextField source="headers" />} />
        <Labeled label="Domen" required={false} value={<TextField source="domen" />} />
      </>
    }
  />
);
