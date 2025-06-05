// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const QuestShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="quest_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reward" required={false} value={<NumberField source="reward" />} />
        <Labeled label="Frequency Interval" required={false} value={<NumberField source="frequency_interval" />} />
        <Labeled label="Frequency Id" required={false} value={<ReferenceField source="frequency_id" reference="quest_frequency"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Deactivated" required={false} value={<BooleanField source="deactivated" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Total Steps" required={false} value={<NumberField source="total_steps" />} />
        <Labeled label="Deadline Date" required={false} value={<DateField source="deadline_date" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Quest Step",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="quest_step" />
        </div>
        <ReferenceManyField reference="quest_step" target="quest_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <TextField source="intitial_provider_code" label="Intitial Provider Code" />
              <TextField source="provider_code" label="Provider Code" />
              <NumberField source="position" label="Position" />
              <TextField source="dependencies" label="Dependencies" />
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
          <CreateButton resource="quest_in_tag" />
        </div>
        <ReferenceManyField reference="quest_in_tag" target="entity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
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
          <CreateButton resource="quest_stage" />
        </div>
        <ReferenceManyField reference="quest_stage" target="quest_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="title" label="Title" />
              <TextField source="business_process_id" label="Business Process Id" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <NumberField source="order" label="Order" />
              <TextField source="description" label="Description" />
              <TextField source="code" label="Code" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
