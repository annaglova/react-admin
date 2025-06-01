// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const CoverShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Redirect Url" value={<TextField source="redirect_url" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="cover_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Default" value={<BooleanField source="is_default" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Contact",
        content: (
          <ReferenceManyField reference={"contact"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="owner_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="dear" />
              <ReferenceField source="salutation_type_id" reference="contact_salutation_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="gender_id" reference="gender"><TextField source="name" /></ReferenceField>
              <ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="contact_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>
              <TextField source="job_title" />
              <ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>
              <DateField source="birth_date" />
              <TextField source="phone" />
              <TextField source="mobile_phone" />
              <TextField source="home_phone" />
              <TextField source="skype" />
              <TextField source="email" />
              <ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <TextField source="zip" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <BooleanField source="do_not_use_email" />
              <BooleanField source="do_not_use_call" />
              <BooleanField source="do_not_use_fax" />
              <BooleanField source="do_not_use_sms" />
              <BooleanField source="do_not_use_mail" />
              <TextField source="notes" />
              <TextField source="facebook" />
              <TextField source="linked_in" />
              <TextField source="twitter" />
              <TextField source="facebook_id" />
              <TextField source="linked_in_id" />
              <TextField source="twitter_id" />
              <TextField source="contact_photo" />
              <TextField source="gpsn" />
              <TextField source="gpse" />
              <TextField source="surname" />
              <TextField source="given_name" />
              <TextField source="middle_name" />
              <BooleanField source="confirmed" />
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
              <NumberField source="completeness" />
              <BooleanField source="is_non_actual_email" />
              <NumberField source="r_id" />
              <NumberField source="age" />
              <BooleanField source="ti_is_invoice_by_sms" />
              <BooleanField source="ti_is_invoice_by_email" />
              <TextField source="alternate_names" />
              <TextField source="duplicate_group_id" />
              <BooleanField source="is_email_confirmed" />
              <TextField source="url" />
              <ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" />
              <TextField source="avatar_url" />
              <ReferenceField source="promote_breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" />
              <NumberField source="lead_conversion_score" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account",
        content: (
          <ReferenceManyField reference={"account"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <TextField source="owner_id" />
              <ReferenceField source="ownership_id" reference="account_ownership"><TextField source="name" /></ReferenceField>
              <TextField source="primary_contact_id" />
              <ReferenceField source="parent_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>
              <TextField source="code" />
              <ReferenceField source="type_id" reference="account_type"><TextField source="name" /></ReferenceField>
              <TextField source="phone" />
              <TextField source="additional_phone" />
              <TextField source="fax" />
              <TextField source="web" />
              <ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <TextField source="zip" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_category_id" reference="account_category"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <TextField source="logo" />
              <TextField source="alternative_name" />
              <TextField source="gpsn" />
              <TextField source="gpse" />
              <NumberField source="completeness" />
              <TextField source="aum" />
              <TextField source="trim_code" />
              <ReferenceField source="status_id" reference="account_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="affix_type_id" reference="affix_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="federation_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="about_us" />
              <TextField source="url" />
              <TextField source="duplicate_group_id" />
              <ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" />
              <TextField source="avatar_url" />
              <BooleanField source="has_kennel_name" />
              <NumberField source="rating" />
              <DateField source="since" />
              <BooleanField source="verfied" />
              <BooleanField source="verified" />
              <ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>
              <DateField source="company_foundation_date" />
              <NumberField source="rating_placement_in_breed" />
              <NumberField source="lead_conversion_score" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Litter",
        content: (
          <ReferenceManyField reference={"litter"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="father_id" />
              <TextField source="mother_id" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mating_period_id" reference="period"><TextField source="name" /></ReferenceField>
              <DateField source="date_of_birth" />
              <ReferenceField source="status_id" reference="litter_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="kennel_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" />
              <TextField source="url" />
              <ReferenceField source="letter_id" reference="letter"><TextField source="name" /></ReferenceField>
              <NumberField source="male_amount" />
              <NumberField source="female_amount" />
              <BooleanField source="is_public" />
              <DateField source="start_date" />
              <DateField source="end_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Event",
        content: (
          <ReferenceManyField reference={"event"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="type_id" reference="event_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="event_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <TextField source="goal" />
              <ReferenceField source="territory_id" reference="territory"><TextField source="name" /></ReferenceField>
              <ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>
              <TextField source="actual_response" />
              <NumberField source="primary_budgeted_cost" />
              <NumberField source="primary_expected_revenue" />
              <NumberField source="primary_actual_cost" />
              <NumberField source="primary_actual_revenue" />
              <TextField source="notes" />
              <DateField source="last_actualize_date" />
              <NumberField source="recipient_count" />
              <ReferenceField source="organizer_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="url" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Project",
        content: (
          <ReferenceManyField reference={"project"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="project_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <NumberField source="duration" />
              <DateField source="deadline" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="parent_project_id" reference="project"><TextField source="name" /></ReferenceField>
              <NumberField source="actual_completion" />
              <BooleanField source="is_auto_calc_completion" />
              <NumberField source="plan_income" />
              <NumberField source="fact_income" />
              <NumberField source="income_dev" />
              <NumberField source="income_dev_perc" />
              <NumberField source="plan_external_cost" />
              <NumberField source="fact_external_cost" />
              <NumberField source="external_cost_dev" />
              <NumberField source="plan_external_dev_perc" />
              <NumberField source="plan_expense" />
              <NumberField source="fact_expense" />
              <NumberField source="expense_dev" />
              <NumberField source="expense_dev_perc" />
              <NumberField source="plan_internal_cost" />
              <NumberField source="fact_internal_cost" />
              <NumberField source="internal_cost_dev" />
              <NumberField source="plan_internal_dev_perc" />
              <NumberField source="plan_margin" />
              <NumberField source="plan_margin_perc" />
              <NumberField source="fact_margin" />
              <NumberField source="fact_margin_perc" />
              <NumberField source="margin_dev" />
              <NumberField source="margin_dev_perc" />
              <NumberField source="position" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="project_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="url" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Post",
        content: (
          <ReferenceManyField reference={"post"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <DateField source="publication_date" />
              <ReferenceField source="type_id" reference="post_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="state_id" reference="post_state"><TextField source="name" /></ReferenceField>
              <TextField source="text" />
              <TextField source="url" />
              <ReferenceField source="master_post_id" reference="post"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_moment" />
              <TextField source="author_id" />
              <DateField source="date" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <NumberField source="latitude" />
              <NumberField source="longitude" />
              <TextField source="photos" />
              <TextField source="participants" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Collection",
        content: (
          <ReferenceManyField reference={"collection"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <BooleanField source="private" />
              <TextField source="entity_name" />
              <BooleanField source="auto" />
              <ReferenceField source="type_id" reference="collection_type"><TextField source="name" /></ReferenceField>
              <TextField source="avatar_url" />
              <TextField source="url" />
              <TextField source="notes" />
              <DateField source="update_date" />
              <TextField source="owner_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed",
        content: (
          <ReferenceManyField reference={"breed"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" />
              <BooleanField source="differ_by_coat_type" />
              <BooleanField source="differ_by_size" />
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" />
              <BooleanField source="differ_by_body_feature" />
              <NumberField source="pet_profile_count" />
              <ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>
              <NumberField source="kennel_count" />
              <BooleanField source="has_related_breed" />
              <TextField source="admin_name" />
              <TextField source="url" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <NumberField source="patron_count" />
              <TextField source="avatar_url" />
              <NumberField source="rating" />
              <NumberField source="achievement_progress" />
              <NumberField source="payment_rating" />
              <ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Note",
        content: (
          <ReferenceManyField reference={"note"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="pet_id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <TextField source="record_id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Cover In Litter",
        content: (
          <ReferenceManyField reference={"cover_in_litter"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Cover In Account",
        content: (
          <ReferenceManyField reference={"cover_in_account"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Cover In Contact",
        content: (
          <ReferenceManyField reference={"cover_in_contact"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="contact_id" />
              <DateField source="setup_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Cover In Pet",
        content: (
          <ReferenceManyField reference={"cover_in_pet"} target={"cover_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="pet_id" />
              <DateField source="setup_date" />
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ]
    }
  />
);
