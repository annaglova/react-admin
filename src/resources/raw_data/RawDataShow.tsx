// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const RawDataShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Json" value={<TextField source="json" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="raw_data_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Log" value={<TextField source="log" />} />
        <Labeled label="Conf Item Id" value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Redirect Url" value={<TextField source="redirect_url" />} />
        <Labeled label="Record Id" value={<TextField source="record_id" />} />
        <Labeled label="Entity Name" value={<TextField source="entity_name" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Model" value={<TextField source="model" />} />
        <Labeled label="Hash Md5" value={<TextField source="hash_md5" />} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Account Id" value={<TextField source="account_id" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
      </>
    }
    detailsConfigs={
      []
    }
  />
);
