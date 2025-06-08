// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PostPhotoShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
        <Labeled label="Link" required={false} value={<TextField source="link" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Post Id" required={false} value={<ReferenceField source="post_id" reference="post"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
