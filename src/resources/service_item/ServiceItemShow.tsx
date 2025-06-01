// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ServiceItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Reaction Time Value" value={<NumberField source="reaction_time_value" />} />
        <Labeled label="Reaction Time Unit Id" value={<TextField source="reaction_time_unit_id" />} />
        <Labeled label="Solution Time Value" value={<NumberField source="solution_time_value" />} />
        <Labeled label="Solution Time Unit Id" value={<TextField source="solution_time_unit_id" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Reaction Time" value={<TextField source="reaction_time" />} />
        <Labeled label="Solution Time" value={<TextField source="solution_time" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Calendar Id" value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="service_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Sort Order" value={<NumberField source="sort_order" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Service In Service Pact",
        content: (
          <ReferenceManyField reference={"service_in_service_pact"} target={"service_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="service_pact_id" reference="service_pact"><TextField source="name" /></ReferenceField>
              <NumberField source="reaction_time_value" />
              <ReferenceField source="reaction_time_unit_id" reference="time_unit"><TextField source="name" /></ReferenceField>
              <NumberField source="solution_time_value" />
              <ReferenceField source="solution_time_unit_id" reference="time_unit"><TextField source="name" /></ReferenceField>
              <ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>
              <TextField source="reaction_time" />
              <TextField source="solution_time" />
              <TextField source="concat_name" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service Relationship",
        content: (
          <ReferenceManyField reference={"service_relationship"} target={"service_item_b_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service Item In Tag",
        content: (
          <ReferenceManyField reference={"service_item_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service In Conf Item",
        content: (
          <ReferenceManyField reference={"service_in_conf_item"} target={"service_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service Engineer",
        content: (
          <ReferenceManyField reference={"service_engineer"} target={"service_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ]
    }
  />
);
