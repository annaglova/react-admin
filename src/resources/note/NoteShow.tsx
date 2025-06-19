// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const NoteShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Pet Id" required={false} value={<ReferenceField source="pet_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" required={false} value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Record Id" required={false} value={<TextField source="record_id" />} />
        <Labeled label="Entity Schema Id" required={false} value={<ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Litter Id" required={false} value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" required={false} value={<ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Note Test Record",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="note_test_record" fkField="note_id" />
        </div>
        <ReferenceManyField reference="note_test_record" target="note_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
