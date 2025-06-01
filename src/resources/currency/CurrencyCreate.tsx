import { NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CurrencyCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <TextInput source="code" />
          <TextInput source="short_name" />
          <TextInput source="symbol" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="recalc_direction" />
          <NumberInput source="division" />
          <NumberInput source="currecy_symbol_position" />
          <NumberInput source="rate" />
      </>
    }
  />
);
