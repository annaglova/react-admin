// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const PostShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Publication Date" value={<DateField source="publication_date" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="post_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="State Id" value={<ReferenceField source="state_id" reference="post_state"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Text" value={<TextField source="text" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Master Post Id" value={<ReferenceField source="master_post_id" reference="post"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Moment" value={<BooleanField source="is_moment" />} />
        <Labeled label="Author Id" value={<TextField source="author_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Date" value={<DateField source="date" />} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Latitude" value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" value={<NumberField source="longitude" />} />
        <Labeled label="Photos" value={<TextField source="photos" />} />
        <Labeled label="Participants" value={<TextField source="participants" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Post",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post"} target={"master_post_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <DateField source="publication_date" />
              <ReferenceField source="type_id" reference="post_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="state_id" reference="post_state"><TextField source="name" /></ReferenceField>
              <TextField source="text" />
              <TextField source="url" />
              <BooleanField source="is_moment" />
              <TextField source="author_id" />
              <DateField source="date" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <NumberField source="latitude" />
              <NumberField source="longitude" />
              <TextField source="photos" />
              <TextField source="participants" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_in_feed"} target={"post_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="feed_id" reference="post_feed"><TextField source="name" /></ReferenceField>
              <BooleanField source="hide" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_photo"} target={"post_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="position" />
              <TextField source="link" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_like"} target={"post_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_comment"} target={"post_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="text" />
              <DateField source="date" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
