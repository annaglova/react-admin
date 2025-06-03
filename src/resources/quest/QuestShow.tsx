// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const QuestShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="quest_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reward" value={<NumberField source="reward" />} />
        <Labeled label="Frequency Interval" value={<NumberField source="frequency_interval" />} />
        <Labeled label="Frequency Id" value={<ReferenceField source="frequency_id" reference="quest_frequency"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Deactivated" value={<BooleanField source="deactivated" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Total Steps" value={<NumberField source="total_steps" />} />
        <Labeled label="Deadline Date" value={<DateField source="deadline_date" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Quest Step",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"quest_step"} target={"quest_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <TextField source="intitial_provider_code" />
              <TextField source="provider_code" />
              <NumberField source="position" />
              <TextField source="dependencies" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Quest In Tag",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"quest_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Quest Stage",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"quest_stage"} target={"quest_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="title" />
              <TextField source="business_process_id" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <NumberField source="order" />
              <TextField source="description" />
              <TextField source="code" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
