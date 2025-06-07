import { NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CurrencyCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="code" validate={[required()]} />
          <TextInput source="short_name" validate={[]} />
          <TextInput source="symbol" validate={[required()]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="recalc_direction" validate={[]} />
          <NumberInput source="division" validate={[]} />
          <NumberInput source="currecy_symbol_position" validate={[]} />
          <NumberInput source="rate" validate={[]} />
      </>
    }
  />
);
