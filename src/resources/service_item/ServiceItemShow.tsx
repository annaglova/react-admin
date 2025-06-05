// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ServiceItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Reaction Time Value" required={false} value={<NumberField source="reaction_time_value" />} />
        <Labeled label="Reaction Time Unit Id" required={false} value={<TextField source="reaction_time_unit_id" />} />
        <Labeled label="Solution Time Value" required={false} value={<NumberField source="solution_time_value" />} />
        <Labeled label="Solution Time Unit Id" required={false} value={<TextField source="solution_time_unit_id" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Reaction Time" required={false} value={<TextField source="reaction_time" />} />
        <Labeled label="Solution Time" required={false} value={<TextField source="solution_time" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Calendar Id" required={false} value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="service_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Sort Order" required={false} value={<NumberField source="sort_order" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Service In Service Pact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="service_in_service_pact" />
        </div>
        <ReferenceManyField reference="service_in_service_pact" target="service_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="service_pact_id" reference="service_pact" label="Service Pact Id"><TextField source="name" /></ReferenceField>
              <NumberField source="reaction_time_value" label="Reaction Time Value" />
              <ReferenceField source="reaction_time_unit_id" reference="time_unit" label="Reaction Time Unit Id"><TextField source="name" /></ReferenceField>
              <NumberField source="solution_time_value" label="Solution Time Value" />
              <ReferenceField source="solution_time_unit_id" reference="time_unit" label="Solution Time Unit Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id"><TextField source="name" /></ReferenceField>
              <TextField source="reaction_time" label="Reaction Time" />
              <TextField source="solution_time" label="Solution Time" />
              <TextField source="concat_name" label="Concat Name" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service Relationship",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="service_relationship" />
        </div>
        <ReferenceManyField reference="service_relationship" target="service_item_b_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="dependency_category_id" reference="dependency_category" label="Dependency Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type" label="Dependency Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service Item In Tag",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="service_item_in_tag" />
        </div>
        <ReferenceManyField reference="service_item_in_tag" target="entity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service In Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="service_in_conf_item" />
        </div>
        <ReferenceManyField reference="service_in_conf_item" target="service_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_category_id" reference="dependency_category" label="Dependency Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type" label="Dependency Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service Engineer",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="service_engineer" />
        </div>
        <ReferenceManyField reference="service_engineer" target="service_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
