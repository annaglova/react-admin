// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const EventShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="event_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="event_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="End Date" value={<DateField source="end_date" />} />
        <Labeled label="Goal" value={<TextField source="goal" />} />
        <Labeled label="Territory Id" value={<ReferenceField source="territory_id" reference="territory"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Industry Id" value={<ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Actual Response" value={<TextField source="actual_response" />} />
        <Labeled label="Primary Budgeted Cost" value={<NumberField source="primary_budgeted_cost" />} />
        <Labeled label="Primary Expected Revenue" value={<NumberField source="primary_expected_revenue" />} />
        <Labeled label="Primary Actual Cost" value={<NumberField source="primary_actual_cost" />} />
        <Labeled label="Primary Actual Revenue" value={<NumberField source="primary_actual_revenue" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Last Actualize Date" value={<DateField source="last_actualize_date" />} />
        <Labeled label="Recipient Count" value={<NumberField source="recipient_count" />} />
        <Labeled label="Organizer Id" value={<ReferenceField source="organizer_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" value={<TextField source="address" />} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
