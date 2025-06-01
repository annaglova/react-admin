// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ProductShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Unit Id" value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Price" value={<NumberField source="price" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="product_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active" value={<BooleanField source="active" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Product Source Id" value={<ReferenceField source="product_source_id" reference="product_source"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Is Archive" value={<BooleanField source="is_archive" />} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="product_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Short Description" value={<TextField source="short_description" />} />
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
        <Labeled label="Benefits" value={<TextField source="benefits" />} />
        <Labeled label="General Conditions" value={<TextField source="general_conditions" />} />
        <Labeled label="Stripe Product Id" value={<TextField source="stripe_product_id" />} />
        <Labeled label="Pet Breed Id" value={<TextField source="pet_breed_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Service Pact",
        content: (
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
        ),
      }
          ,
        
      {
        label: "Invoice Product",
        content: (
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
        ),
      }
          ,
        
      {
        label: "Product Unit",
        content: (
          <ReferenceManyField reference={"product_unit"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_base" />
              <NumberField source="number_of_base_units" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Product Price",
        content: (
          <ReferenceManyField reference={"product_price"} target={"product_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="price" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "License Manager",
        content: (
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
        ),
      }
          ]
    }
  />
);
