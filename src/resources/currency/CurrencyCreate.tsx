import { NumberInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CurrencyCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="code" validate={required()} />
          <TextInput source="short_name"  />
          <TextInput source="symbol" validate={required()} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="recalc_direction"  />
          <NumberInput source="division"  />
          <NumberInput source="currecy_symbol_position"  />
          <NumberInput source="rate"  />
      </>
    }
  />
);
