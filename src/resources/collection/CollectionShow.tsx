// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";



export const CollectionShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Private" required={false} value={<BooleanField source="private" />} />
        <Labeled label="Entity Name" required={false} value={<TextField source="entity_name" />} />
        <Labeled label="Auto" required={false} value={<BooleanField source="auto" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="collection_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Update Date" required={false} value={<DateField source="update_date" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Collection In Tag",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="collection_in_tag" fkField="entity_id" />
        </div>
        <ReferenceManyField reference="collection_in_tag" target="entity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Collection Entity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="collection_entity" fkField="collection_id" />
        </div>
        <ReferenceManyField reference="collection_entity" target="collection_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
