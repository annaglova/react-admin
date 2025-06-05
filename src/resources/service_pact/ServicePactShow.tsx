// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ServicePactShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="service_pact_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="End Date" required={false} value={<DateField source="end_date" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Service Provider Id" required={false} value={<ReferenceField source="service_provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Service Provider Contact Id" required={false} value={<ReferenceField source="service_provider_contact_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Calendar Id" required={false} value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Product Id" required={false} value={<ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Service In Service Pact",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"service_in_service_pact"} target={"service_pact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="service_item_id" reference="service_item"><TextField source="name" /></ReferenceField>
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
          </>
        ),
      }
  ,
        
      {
        label: "Service Pact In Tag",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"service_pact_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
