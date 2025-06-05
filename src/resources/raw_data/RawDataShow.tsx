// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const RawDataShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Json" required={false} value={<TextField source="json" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="raw_data_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Log" required={false} value={<TextField source="log" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Redirect Url" required={false} value={<TextField source="redirect_url" />} />
        <Labeled label="Record Id" required={false} value={<TextField source="record_id" />} />
        <Labeled label="Entity Name" required={false} value={<TextField source="entity_name" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Model" required={false} value={<TextField source="model" />} />
        <Labeled label="Hash Md5" required={false} value={<TextField source="hash_md5" />} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Account Id" required={false} value={<TextField source="account_id" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" required={false} value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
      </>
    }
    detailsConfigs={
      []
    }
  />
);
