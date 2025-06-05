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
          <CreateButton resource="service_pact" />
        </div>
        <ReferenceManyField reference="service_pact" target="product_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="status_id" reference="service_pact_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <TextField source="owner_id" label="Owner Id" />
              <TextField source="number" label="Number" />
              <ReferenceField source="service_provider_id" reference="account" label="Service Provider Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="service_provider_contact_id" reference="contact" label="Service Provider Contact Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="provider_id" reference="account" label="Provider Id"><TextField source="name" /></ReferenceField>
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
          <CreateButton resource="invoice_product" />
        </div>
        <ReferenceManyField reference="invoice_product" target="product_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="custom_product" label="Custom Product" />
              <DateField source="delivery_date" label="Delivery Date" />
              <NumberField source="quantity" label="Quantity" />
              <ReferenceField source="unit_id" reference="unit" label="Unit Id"><TextField source="name" /></ReferenceField>
              <NumberField source="primary_price" label="Primary Price" />
              <NumberField source="price" label="Price" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <NumberField source="amount" label="Amount" />
              <NumberField source="primary_discount_amount" label="Primary Discount Amount" />
              <NumberField source="discount_amount" label="Discount Amount" />
              <NumberField source="discount_percent" label="Discount Percent" />
              <NumberField source="primary_tax_amount" label="Primary Tax Amount" />
              <NumberField source="tax_amount" label="Tax Amount" />
              <NumberField source="primary_total_amount" label="Primary Total Amount" />
              <NumberField source="total_amount" label="Total Amount" />
              <NumberField source="discount_tax" label="Discount Tax" />
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <NumberField source="base_quantity" label="Base Quantity" />
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
          <CreateButton resource="product_unit" />
        </div>
        <ReferenceManyField reference="product_unit" target="product_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="unit_id" reference="unit" label="Unit Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_base" label="Is Base" />
              <NumberField source="number_of_base_units" label="Number Of Base Units" />
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
          <CreateButton resource="product_price" />
        </div>
        <ReferenceManyField reference="product_price" target="product_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="price" label="Price" />
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
          <CreateButton resource="license_manager" />
        </div>
        <ReferenceManyField reference="license_manager" target="product_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="status_id" reference="license_manager_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="delivery_date" label="Delivery Date" />
              <DateField source="estimated_date" label="Estimated Date" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="license_manager_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="manage_type_id" reference="license_manager_manage_type" label="Manage Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
