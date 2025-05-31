// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const UserQuestShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Finish Date" value={<DateField source="finish_date" />} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Deadline Date" value={<DateField source="deadline_date" />} />
        <Labeled label="Deactivated" value={<BooleanField source="deactivated" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Reward" value={<NumberField source="reward" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Frequency Interval" value={<NumberField source="frequency_interval" />} />
      </>
    }
  />
);
