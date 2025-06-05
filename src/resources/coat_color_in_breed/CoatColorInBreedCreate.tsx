import {
  Create,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export const CoatColorInBreedCreate = (props: CreateProps) => {
  const { record = {} } = props;

  return (
    <Create {...props}>
      <SimpleForm defaultValues={record}>
        <ReferenceInput source="breed_id" reference="breed">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="coat_color_id" reference="coat_color">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
