// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PostInFeedShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Feed Id" required={false} value={<ReferenceField source="feed_id" reference="post_feed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Post Id" required={false} value={<ReferenceField source="post_id" reference="post"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Hide" required={false} value={<BooleanField source="hide" />} />
      </>
    }
  />
);
