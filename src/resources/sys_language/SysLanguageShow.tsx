// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const SysLanguageShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Code" required={true} value={<TextField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Used" required={false} value={<BooleanField source="is_used" />} />
        <Labeled label="Sys Culture Def Id" required={false} value={<TextField source="sys_culture_def_id" />} />
      </>
    }
  />
);
