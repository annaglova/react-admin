// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ProductShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
        <Labeled label="Unit Id" required={false} value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Price" required={false} value={<NumberField source="price" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="product_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active" required={false} value={<BooleanField source="active" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Product Source Id" required={false} value={<ReferenceField source="product_source_id" reference="product_source"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Is Archive" required={false} value={<BooleanField source="is_archive" />} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="product_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Short Description" required={false} value={<TextField source="short_description" />} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Benefits" required={false} value={<TextField source="benefits" />} />
        <Labeled label="General Conditions" required={false} value={<TextField source="general_conditions" />} />
        <Labeled label="Stripe Product Id" required={false} value={<TextField source="stripe_product_id" />} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Service Pact",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"service_pact"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="status_id" reference="service_pact_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <TextField source="owner_id" />
              <TextField source="number" />
              <ReferenceField source="service_provider_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="service_provider_contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>
              <ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Invoice Product",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"invoice_product"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="custom_product" />
              <DateField source="delivery_date" />
              <NumberField source="quantity" />
              <ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <NumberField source="primary_price" />
              <NumberField source="price" />
              <NumberField source="primary_amount" />
              <NumberField source="amount" />
              <NumberField source="primary_discount_amount" />
              <NumberField source="discount_amount" />
              <NumberField source="discount_percent" />
              <NumberField source="primary_tax_amount" />
              <NumberField source="tax_amount" />
              <NumberField source="primary_total_amount" />
              <NumberField source="total_amount" />
              <NumberField source="discount_tax" />
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <NumberField source="base_quantity" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Product Unit",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"product_unit"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_base" />
              <NumberField source="number_of_base_units" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Product Price",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"product_price"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="price" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "License Manager",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"license_manager"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="contact_id" />
              <ReferenceField source="status_id" reference="license_manager_status"><TextField source="name" /></ReferenceField>
              <DateField source="delivery_date" />
              <DateField source="estimated_date" />
              <TextField source="owner_id" />
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="license_manager_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="manage_type_id" reference="license_manager_manage_type"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
