// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const PostShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Publication Date" required={false} value={<DateField source="publication_date" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="post_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="State Id" required={false} value={<ReferenceField source="state_id" reference="post_state"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Text" required={false} value={<TextField source="text" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Master Post Id" required={false} value={<ReferenceField source="master_post_id" reference="post"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Moment" required={false} value={<BooleanField source="is_moment" />} />
        <Labeled label="Author Id" required={false} value={<TextField source="author_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Event Id" required={false} value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Latitude" required={false} value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" required={false} value={<NumberField source="longitude" />} />
        <Labeled label="Photos" required={false} value={<TextField source="photos" />} />
        <Labeled label="Participants" required={false} value={<TextField source="participants" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Post",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post" />
        </div>
        <ReferenceManyField reference="post" target="master_post_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <DateField source="publication_date" label="Publication Date" />
              <ReferenceField source="type_id" reference="post_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="state_id" reference="post_state" label="State Id"><TextField source="name" /></ReferenceField>
              <TextField source="text" label="Text" />
              <TextField source="url" label="Url" />
              <BooleanField source="is_moment" label="Is Moment" />
              <TextField source="author_id" label="Author Id" />
              <DateField source="date" label="Date" />
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <NumberField source="latitude" label="Latitude" />
              <NumberField source="longitude" label="Longitude" />
              <TextField source="photos" label="Photos" />
              <TextField source="participants" label="Participants" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post In Feed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post_in_feed" />
        </div>
        <ReferenceManyField reference="post_in_feed" target="post_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="feed_id" reference="post_feed" label="Feed Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="hide" label="Hide" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Photo",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post_photo" />
        </div>
        <ReferenceManyField reference="post_photo" target="post_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="position" label="Position" />
              <TextField source="link" label="Link" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Like",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post_like" />
        </div>
        <ReferenceManyField reference="post_like" target="post_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Comment",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post_comment" />
        </div>
        <ReferenceManyField reference="post_comment" target="post_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <TextField source="text" label="Text" />
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
