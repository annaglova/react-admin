// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const CollectionShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Private" value={<BooleanField source="private" />} />
        <Labeled label="Entity Name" value={<TextField source="entity_name" />} />
        <Labeled label="Auto" value={<BooleanField source="auto" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="collection_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Update Date" value={<DateField source="update_date" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Collection In Tag",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"collection_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"collection_entity"} target={"collection_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="record_id" />
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
