const fs = require("fs");
const path = require("path");

// Массив таблиць
const tables = [
  "account_category",
  "account_industry",
  "account_ownership",
  "account_status",
  "account_tag",
  "account_type",
  "achievement",
  "achievement_category",
  "activity_category",
  "activity_priority",
  "activity_result",
  "activity_status",
  "activity_type",
  "address_type",
  "affix_type",
  "award",
  "award_in_competition",
  "body_feature",
  "breed_category",
  "breed_group",
  "collection_type",
  "license_manager_manage_type",
  "license_manager_status",
  "license_manager_type",
  "breed_section",
  "breed_standard",
  "breed_standard_status",
  "breed_subsection",
  "calendar",
  "cashflow_category",
  "cashflow_status",
  "cashflow_type",
  "city",
  "coat_color",
  "coat_type",
  "competition_backup",
  "competition_category",
  "competition_type",
  "config_item_category",
  "config_item_status",
  "config_item_type",
  "conf_item_parsing_status",
  "contact_decision_role",
  "contact_relationship_type",
  "contact_role_for_pet",
  "contact_salutation_type",
  "contact_tag",
  "contact_type",
  "country",
  "cover_type",
  "currency",
  "department",
  "dependency_category",
  "dependency_type",
  "employee_job",
  "entity_schema_lookup",
  "event_status",
  "event_team_roles",
  "event_type",
  "gender",
  "geo_names_time_zone",
  "health_exam_object",
  "health_exam_result",
  "invoice_payment_status",
  "job",
  "job_change_reason",
  "letter",
  "litter_status",
  "location_type",
  "measurement_type",
  "order_delivery_status",
  "order_payment_status",
  "order_status",
  "page_view",
  "participation_status",
  "payment_method",
  "payment_type",
  "period",
  "pet_additional_info_type",
  "pet_class",
  "pet_identifier_type",
  "pet_lifecycle_event",
  "pet_lifecycle_event_status",
  "pet_pedigree_cycle_member_type",
  "pet_qualification",
  "pet_service_by_options",
  "pet_service_feature",
  "pet_service_status",
  "pet_service_type",
  "pet_service_type_by_entity",
  "pet_size",
  "pet_status",
  "pet_tag",
  "pet_type",
  "place",
  "post_participant_role",
  "post_state",
  "post_type",
  "product",
  "product_category",
  "product_type",
  "project_category",
  "project_status",
  "project_type",
  "qualification_in_competition",
  "quest_frequency",
  "quest_status",
  "quest_step_status",
  "quest_type",
  "rating_type",
  "raw_data_realated_entity",
  "raw_data_status",
  "referral_link",
  "referrer_type",
  "region",
  "relation_type",
  "service_category",
  "service_pact_status",
  "sex",
  "status_of_activity",
  "studbook",
  "studbook_status",
  "studbook_type",
  "sys_language",
  "tag_access",
  "tag_access_grantee",
  "territory",
  "time_zone",
  "title",
  "unit",
  "unit_by_measurement_type",
  "verification_status",
  "verified_stage",
  "nvoice",
];

const baseCode = (name, Name) => `
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const ${Name}Filters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const ${Name}List = () => (
  <List filters={${Name}Filters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
`;

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

const outDir = path.join(__dirname, "src", "lists");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const table of tables) {
  const Name = toPascalCase(table);
  const fileName = `${Name}List.tsx`;
  fs.writeFileSync(path.join(outDir, fileName), baseCode(table, Name));
  console.log(`Створено: ${fileName}`);
}

console.log("✅ Всі List-файли згенеровано в src/lists/");
