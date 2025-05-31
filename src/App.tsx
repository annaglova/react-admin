
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v5.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
  Resource,
} from "react-admin";
import { CustomLayout } from "./CustomLayout";
import { BreedList } from "./resources/breed/BreedList";
import { BreedShow } from "./resources/breed/BreedShow";
import { BreedCreate } from "./resources/breed/BreedCreate";
import { BreedEdit } from "./resources/breed/BreedEdit";
import { PetList } from "./resources/pet/PetList";
import { PetShow } from "./resources/pet/PetShow";
import { PetCreate } from "./resources/pet/PetCreate";
import { PetEdit } from "./resources/pet/PetEdit";
import { LitterList } from "./resources/litter/LitterList";
import { LitterShow } from "./resources/litter/LitterShow";
import { LitterCreate } from "./resources/litter/LitterCreate";
import { LitterEdit } from "./resources/litter/LitterEdit";
import { ContactList } from "./resources/contact/ContactList";
import { ContactShow } from "./resources/contact/ContactShow";
import { ContactCreate } from "./resources/contact/ContactCreate";
import { ContactEdit } from "./resources/contact/ContactEdit";
import { AccountList } from "./resources/account/AccountList";
import { AccountShow } from "./resources/account/AccountShow";
import { AccountCreate } from "./resources/account/AccountCreate";
import { AccountEdit } from "./resources/account/AccountEdit";
import { CoverList } from "./resources/cover/CoverList";
import { CoverShow } from "./resources/cover/CoverShow";
import { CoverCreate } from "./resources/cover/CoverCreate";
import { CoverEdit } from "./resources/cover/CoverEdit";
import { NoteList } from "./resources/note/NoteList";
import { NoteShow } from "./resources/note/NoteShow";
import { NoteCreate } from "./resources/note/NoteCreate";
import { NoteEdit } from "./resources/note/NoteEdit";
import { CollectionList } from "./resources/collection/CollectionList";
import { CollectionShow } from "./resources/collection/CollectionShow";
import { CollectionCreate } from "./resources/collection/CollectionCreate";
import { CollectionEdit } from "./resources/collection/CollectionEdit";
import { EventList } from "./resources/event/EventList";
import { EventShow } from "./resources/event/EventShow";
import { EventCreate } from "./resources/event/EventCreate";
import { EventEdit } from "./resources/event/EventEdit";
import { CompetitionList } from "./resources/competition/CompetitionList";
import { CompetitionShow } from "./resources/competition/CompetitionShow";
import { CompetitionCreate } from "./resources/competition/CompetitionCreate";
import { CompetitionEdit } from "./resources/competition/CompetitionEdit";
import { ProjectList } from "./resources/project/ProjectList";
import { ProjectShow } from "./resources/project/ProjectShow";
import { ProjectCreate } from "./resources/project/ProjectCreate";
import { ProjectEdit } from "./resources/project/ProjectEdit";
import { ActivityList } from "./resources/activity/ActivityList";
import { ActivityShow } from "./resources/activity/ActivityShow";
import { ActivityCreate } from "./resources/activity/ActivityCreate";
import { ActivityEdit } from "./resources/activity/ActivityEdit";
import { RawDataList } from "./resources/raw_data/RawDataList";
import { RawDataShow } from "./resources/raw_data/RawDataShow";
import { RawDataCreate } from "./resources/raw_data/RawDataCreate";
import { RawDataEdit } from "./resources/raw_data/RawDataEdit";
import { PublicDataList } from "./resources/public_data/PublicDataList";
import { PublicDataShow } from "./resources/public_data/PublicDataShow";
import { PublicDataCreate } from "./resources/public_data/PublicDataCreate";
import { PublicDataEdit } from "./resources/public_data/PublicDataEdit";
import { ProductList } from "./resources/product/ProductList";
import { ProductShow } from "./resources/product/ProductShow";
import { ProductCreate } from "./resources/product/ProductCreate";
import { ProductEdit } from "./resources/product/ProductEdit";
import { OrderList } from "./resources/order/OrderList";
import { OrderShow } from "./resources/order/OrderShow";
import { OrderCreate } from "./resources/order/OrderCreate";
import { OrderEdit } from "./resources/order/OrderEdit";
import { InvoiceList } from "./resources/invoice/InvoiceList";
import { InvoiceShow } from "./resources/invoice/InvoiceShow";
import { InvoiceCreate } from "./resources/invoice/InvoiceCreate";
import { InvoiceEdit } from "./resources/invoice/InvoiceEdit";
import { CashflowList } from "./resources/cashflow/CashflowList";
import { CashflowShow } from "./resources/cashflow/CashflowShow";
import { CashflowCreate } from "./resources/cashflow/CashflowCreate";
import { CashflowEdit } from "./resources/cashflow/CashflowEdit";
import { ServicePactList } from "./resources/service_pact/ServicePactList";
import { ServicePactShow } from "./resources/service_pact/ServicePactShow";
import { ServicePactCreate } from "./resources/service_pact/ServicePactCreate";
import { ServicePactEdit } from "./resources/service_pact/ServicePactEdit";
import { ServiceItemList } from "./resources/service_item/ServiceItemList";
import { ServiceItemShow } from "./resources/service_item/ServiceItemShow";
import { ServiceItemCreate } from "./resources/service_item/ServiceItemCreate";
import { ServiceItemEdit } from "./resources/service_item/ServiceItemEdit";
import { ConfItemList } from "./resources/conf_item/ConfItemList";
import { ConfItemShow } from "./resources/conf_item/ConfItemShow";
import { ConfItemCreate } from "./resources/conf_item/ConfItemCreate";
import { ConfItemEdit } from "./resources/conf_item/ConfItemEdit";
import { PostList } from "./resources/post/PostList";
import { PostShow } from "./resources/post/PostShow";
import { PostCreate } from "./resources/post/PostCreate";
import { PostEdit } from "./resources/post/PostEdit";
import { PostFeedList } from "./resources/post_feed/PostFeedList";
import { PostFeedShow } from "./resources/post_feed/PostFeedShow";
import { PostFeedCreate } from "./resources/post_feed/PostFeedCreate";
import { PostFeedEdit } from "./resources/post_feed/PostFeedEdit";
import { QuestList } from "./resources/quest/QuestList";
import { QuestShow } from "./resources/quest/QuestShow";
import { QuestCreate } from "./resources/quest/QuestCreate";
import { QuestEdit } from "./resources/quest/QuestEdit";
import { UserQuestList } from "./resources/user_quest/UserQuestList";
import { UserQuestShow } from "./resources/user_quest/UserQuestShow";
import { UserQuestCreate } from "./resources/user_quest/UserQuestCreate";
import { UserQuestEdit } from "./resources/user_quest/UserQuestEdit";
import { AccountCategoryList } from "./resources/account_category/AccountCategoryList";
import { AccountCategoryShow } from "./resources/account_category/AccountCategoryShow";
import { AccountCategoryCreate } from "./resources/account_category/AccountCategoryCreate";
import { AccountCategoryEdit } from "./resources/account_category/AccountCategoryEdit";
import { AccountIndustryList } from "./resources/account_industry/AccountIndustryList";
import { AccountIndustryShow } from "./resources/account_industry/AccountIndustryShow";
import { AccountIndustryCreate } from "./resources/account_industry/AccountIndustryCreate";
import { AccountIndustryEdit } from "./resources/account_industry/AccountIndustryEdit";
import { AccountOwnershipList } from "./resources/account_ownership/AccountOwnershipList";
import { AccountOwnershipShow } from "./resources/account_ownership/AccountOwnershipShow";
import { AccountOwnershipCreate } from "./resources/account_ownership/AccountOwnershipCreate";
import { AccountOwnershipEdit } from "./resources/account_ownership/AccountOwnershipEdit";
import { AccountStatusList } from "./resources/account_status/AccountStatusList";
import { AccountStatusShow } from "./resources/account_status/AccountStatusShow";
import { AccountStatusCreate } from "./resources/account_status/AccountStatusCreate";
import { AccountStatusEdit } from "./resources/account_status/AccountStatusEdit";
import { AccountTagList } from "./resources/account_tag/AccountTagList";
import { AccountTagShow } from "./resources/account_tag/AccountTagShow";
import { AccountTagCreate } from "./resources/account_tag/AccountTagCreate";
import { AccountTagEdit } from "./resources/account_tag/AccountTagEdit";
import { AccountTypeList } from "./resources/account_type/AccountTypeList";
import { AccountTypeShow } from "./resources/account_type/AccountTypeShow";
import { AccountTypeCreate } from "./resources/account_type/AccountTypeCreate";
import { AccountTypeEdit } from "./resources/account_type/AccountTypeEdit";
import { AchievementList } from "./resources/achievement/AchievementList";
import { AchievementShow } from "./resources/achievement/AchievementShow";
import { AchievementCreate } from "./resources/achievement/AchievementCreate";
import { AchievementEdit } from "./resources/achievement/AchievementEdit";
import { AchievementCategoryList } from "./resources/achievement_category/AchievementCategoryList";
import { AchievementCategoryShow } from "./resources/achievement_category/AchievementCategoryShow";
import { AchievementCategoryCreate } from "./resources/achievement_category/AchievementCategoryCreate";
import { AchievementCategoryEdit } from "./resources/achievement_category/AchievementCategoryEdit";
import { ActivityCategoryList } from "./resources/activity_category/ActivityCategoryList";
import { ActivityCategoryShow } from "./resources/activity_category/ActivityCategoryShow";
import { ActivityCategoryCreate } from "./resources/activity_category/ActivityCategoryCreate";
import { ActivityCategoryEdit } from "./resources/activity_category/ActivityCategoryEdit";
import { ActivityPriorityList } from "./resources/activity_priority/ActivityPriorityList";
import { ActivityPriorityShow } from "./resources/activity_priority/ActivityPriorityShow";
import { ActivityPriorityCreate } from "./resources/activity_priority/ActivityPriorityCreate";
import { ActivityPriorityEdit } from "./resources/activity_priority/ActivityPriorityEdit";
import { ActivityResultList } from "./resources/activity_result/ActivityResultList";
import { ActivityResultShow } from "./resources/activity_result/ActivityResultShow";
import { ActivityResultCreate } from "./resources/activity_result/ActivityResultCreate";
import { ActivityResultEdit } from "./resources/activity_result/ActivityResultEdit";
import { ActivityStatusList } from "./resources/activity_status/ActivityStatusList";
import { ActivityStatusShow } from "./resources/activity_status/ActivityStatusShow";
import { ActivityStatusCreate } from "./resources/activity_status/ActivityStatusCreate";
import { ActivityStatusEdit } from "./resources/activity_status/ActivityStatusEdit";
import { ActivityTypeList } from "./resources/activity_type/ActivityTypeList";
import { ActivityTypeShow } from "./resources/activity_type/ActivityTypeShow";
import { ActivityTypeCreate } from "./resources/activity_type/ActivityTypeCreate";
import { ActivityTypeEdit } from "./resources/activity_type/ActivityTypeEdit";
import { AddressTypeList } from "./resources/address_type/AddressTypeList";
import { AddressTypeShow } from "./resources/address_type/AddressTypeShow";
import { AddressTypeCreate } from "./resources/address_type/AddressTypeCreate";
import { AddressTypeEdit } from "./resources/address_type/AddressTypeEdit";
import { AffixTypeList } from "./resources/affix_type/AffixTypeList";
import { AffixTypeShow } from "./resources/affix_type/AffixTypeShow";
import { AffixTypeCreate } from "./resources/affix_type/AffixTypeCreate";
import { AffixTypeEdit } from "./resources/affix_type/AffixTypeEdit";
import { AwardList } from "./resources/award/AwardList";
import { AwardShow } from "./resources/award/AwardShow";
import { AwardCreate } from "./resources/award/AwardCreate";
import { AwardEdit } from "./resources/award/AwardEdit";
import { AwardInCompetitionList } from "./resources/award_in_competition/AwardInCompetitionList";
import { AwardInCompetitionShow } from "./resources/award_in_competition/AwardInCompetitionShow";
import { AwardInCompetitionCreate } from "./resources/award_in_competition/AwardInCompetitionCreate";
import { AwardInCompetitionEdit } from "./resources/award_in_competition/AwardInCompetitionEdit";
import { BodyFeatureList } from "./resources/body_feature/BodyFeatureList";
import { BodyFeatureShow } from "./resources/body_feature/BodyFeatureShow";
import { BodyFeatureCreate } from "./resources/body_feature/BodyFeatureCreate";
import { BodyFeatureEdit } from "./resources/body_feature/BodyFeatureEdit";
import { BreedCategoryList } from "./resources/breed_category/BreedCategoryList";
import { BreedCategoryShow } from "./resources/breed_category/BreedCategoryShow";
import { BreedCategoryCreate } from "./resources/breed_category/BreedCategoryCreate";
import { BreedCategoryEdit } from "./resources/breed_category/BreedCategoryEdit";
import { BreedGroupList } from "./resources/breed_group/BreedGroupList";
import { BreedGroupShow } from "./resources/breed_group/BreedGroupShow";
import { BreedGroupCreate } from "./resources/breed_group/BreedGroupCreate";
import { BreedGroupEdit } from "./resources/breed_group/BreedGroupEdit";
import { CollectionTypeList } from "./resources/collection_type/CollectionTypeList";
import { CollectionTypeShow } from "./resources/collection_type/CollectionTypeShow";
import { CollectionTypeCreate } from "./resources/collection_type/CollectionTypeCreate";
import { CollectionTypeEdit } from "./resources/collection_type/CollectionTypeEdit";
import { LicenseManagerManageTypeList } from "./resources/license_manager_manage_type/LicenseManagerManageTypeList";
import { LicenseManagerManageTypeShow } from "./resources/license_manager_manage_type/LicenseManagerManageTypeShow";
import { LicenseManagerManageTypeCreate } from "./resources/license_manager_manage_type/LicenseManagerManageTypeCreate";
import { LicenseManagerManageTypeEdit } from "./resources/license_manager_manage_type/LicenseManagerManageTypeEdit";
import { LicenseManagerStatusList } from "./resources/license_manager_status/LicenseManagerStatusList";
import { LicenseManagerStatusShow } from "./resources/license_manager_status/LicenseManagerStatusShow";
import { LicenseManagerStatusCreate } from "./resources/license_manager_status/LicenseManagerStatusCreate";
import { LicenseManagerStatusEdit } from "./resources/license_manager_status/LicenseManagerStatusEdit";
import { LicenseManagerTypeList } from "./resources/license_manager_type/LicenseManagerTypeList";
import { LicenseManagerTypeShow } from "./resources/license_manager_type/LicenseManagerTypeShow";
import { LicenseManagerTypeCreate } from "./resources/license_manager_type/LicenseManagerTypeCreate";
import { LicenseManagerTypeEdit } from "./resources/license_manager_type/LicenseManagerTypeEdit";
import { BreedSectionList } from "./resources/breed_section/BreedSectionList";
import { BreedSectionShow } from "./resources/breed_section/BreedSectionShow";
import { BreedSectionCreate } from "./resources/breed_section/BreedSectionCreate";
import { BreedSectionEdit } from "./resources/breed_section/BreedSectionEdit";
import { BreedStandardList } from "./resources/breed_standard/BreedStandardList";
import { BreedStandardShow } from "./resources/breed_standard/BreedStandardShow";
import { BreedStandardCreate } from "./resources/breed_standard/BreedStandardCreate";
import { BreedStandardEdit } from "./resources/breed_standard/BreedStandardEdit";
import { BreedStandardStatusList } from "./resources/breed_standard_status/BreedStandardStatusList";
import { BreedStandardStatusShow } from "./resources/breed_standard_status/BreedStandardStatusShow";
import { BreedStandardStatusCreate } from "./resources/breed_standard_status/BreedStandardStatusCreate";
import { BreedStandardStatusEdit } from "./resources/breed_standard_status/BreedStandardStatusEdit";
import { BreedSubsectionList } from "./resources/breed_subsection/BreedSubsectionList";
import { BreedSubsectionShow } from "./resources/breed_subsection/BreedSubsectionShow";
import { BreedSubsectionCreate } from "./resources/breed_subsection/BreedSubsectionCreate";
import { BreedSubsectionEdit } from "./resources/breed_subsection/BreedSubsectionEdit";
import { CalendarList } from "./resources/calendar/CalendarList";
import { CalendarShow } from "./resources/calendar/CalendarShow";
import { CalendarCreate } from "./resources/calendar/CalendarCreate";
import { CalendarEdit } from "./resources/calendar/CalendarEdit";
import { CashflowCategoryList } from "./resources/cashflow_category/CashflowCategoryList";
import { CashflowCategoryShow } from "./resources/cashflow_category/CashflowCategoryShow";
import { CashflowCategoryCreate } from "./resources/cashflow_category/CashflowCategoryCreate";
import { CashflowCategoryEdit } from "./resources/cashflow_category/CashflowCategoryEdit";
import { CashflowStatusList } from "./resources/cashflow_status/CashflowStatusList";
import { CashflowStatusShow } from "./resources/cashflow_status/CashflowStatusShow";
import { CashflowStatusCreate } from "./resources/cashflow_status/CashflowStatusCreate";
import { CashflowStatusEdit } from "./resources/cashflow_status/CashflowStatusEdit";
import { CashflowTypeList } from "./resources/cashflow_type/CashflowTypeList";
import { CashflowTypeShow } from "./resources/cashflow_type/CashflowTypeShow";
import { CashflowTypeCreate } from "./resources/cashflow_type/CashflowTypeCreate";
import { CashflowTypeEdit } from "./resources/cashflow_type/CashflowTypeEdit";
import { CityList } from "./resources/city/CityList";
import { CityShow } from "./resources/city/CityShow";
import { CityCreate } from "./resources/city/CityCreate";
import { CityEdit } from "./resources/city/CityEdit";
import { CoatColorList } from "./resources/coat_color/CoatColorList";
import { CoatColorShow } from "./resources/coat_color/CoatColorShow";
import { CoatColorCreate } from "./resources/coat_color/CoatColorCreate";
import { CoatColorEdit } from "./resources/coat_color/CoatColorEdit";
import { CoatTypeList } from "./resources/coat_type/CoatTypeList";
import { CoatTypeShow } from "./resources/coat_type/CoatTypeShow";
import { CoatTypeCreate } from "./resources/coat_type/CoatTypeCreate";
import { CoatTypeEdit } from "./resources/coat_type/CoatTypeEdit";
import { CompetitionBackupList } from "./resources/competition_backup/CompetitionBackupList";
import { CompetitionBackupShow } from "./resources/competition_backup/CompetitionBackupShow";
import { CompetitionBackupCreate } from "./resources/competition_backup/CompetitionBackupCreate";
import { CompetitionBackupEdit } from "./resources/competition_backup/CompetitionBackupEdit";
import { CompetitionCategoryList } from "./resources/competition_category/CompetitionCategoryList";
import { CompetitionCategoryShow } from "./resources/competition_category/CompetitionCategoryShow";
import { CompetitionCategoryCreate } from "./resources/competition_category/CompetitionCategoryCreate";
import { CompetitionCategoryEdit } from "./resources/competition_category/CompetitionCategoryEdit";
import { CompetitionTypeList } from "./resources/competition_type/CompetitionTypeList";
import { CompetitionTypeShow } from "./resources/competition_type/CompetitionTypeShow";
import { CompetitionTypeCreate } from "./resources/competition_type/CompetitionTypeCreate";
import { CompetitionTypeEdit } from "./resources/competition_type/CompetitionTypeEdit";
import { ConfigItemCategoryList } from "./resources/config_item_category/ConfigItemCategoryList";
import { ConfigItemCategoryShow } from "./resources/config_item_category/ConfigItemCategoryShow";
import { ConfigItemCategoryCreate } from "./resources/config_item_category/ConfigItemCategoryCreate";
import { ConfigItemCategoryEdit } from "./resources/config_item_category/ConfigItemCategoryEdit";
import { ConfigItemStatusList } from "./resources/config_item_status/ConfigItemStatusList";
import { ConfigItemStatusShow } from "./resources/config_item_status/ConfigItemStatusShow";
import { ConfigItemStatusCreate } from "./resources/config_item_status/ConfigItemStatusCreate";
import { ConfigItemStatusEdit } from "./resources/config_item_status/ConfigItemStatusEdit";
import { ConfigItemTypeList } from "./resources/config_item_type/ConfigItemTypeList";
import { ConfigItemTypeShow } from "./resources/config_item_type/ConfigItemTypeShow";
import { ConfigItemTypeCreate } from "./resources/config_item_type/ConfigItemTypeCreate";
import { ConfigItemTypeEdit } from "./resources/config_item_type/ConfigItemTypeEdit";
import { ConfItemParsingStatusList } from "./resources/conf_item_parsing_status/ConfItemParsingStatusList";
import { ConfItemParsingStatusShow } from "./resources/conf_item_parsing_status/ConfItemParsingStatusShow";
import { ConfItemParsingStatusCreate } from "./resources/conf_item_parsing_status/ConfItemParsingStatusCreate";
import { ConfItemParsingStatusEdit } from "./resources/conf_item_parsing_status/ConfItemParsingStatusEdit";
import { ContactDecisionRoleList } from "./resources/contact_decision_role/ContactDecisionRoleList";
import { ContactDecisionRoleShow } from "./resources/contact_decision_role/ContactDecisionRoleShow";
import { ContactDecisionRoleCreate } from "./resources/contact_decision_role/ContactDecisionRoleCreate";
import { ContactDecisionRoleEdit } from "./resources/contact_decision_role/ContactDecisionRoleEdit";
import { ContactRelationshipTypeList } from "./resources/contact_relationship_type/ContactRelationshipTypeList";
import { ContactRelationshipTypeShow } from "./resources/contact_relationship_type/ContactRelationshipTypeShow";
import { ContactRelationshipTypeCreate } from "./resources/contact_relationship_type/ContactRelationshipTypeCreate";
import { ContactRelationshipTypeEdit } from "./resources/contact_relationship_type/ContactRelationshipTypeEdit";
import { ContactRoleForPetList } from "./resources/contact_role_for_pet/ContactRoleForPetList";
import { ContactRoleForPetShow } from "./resources/contact_role_for_pet/ContactRoleForPetShow";
import { ContactRoleForPetCreate } from "./resources/contact_role_for_pet/ContactRoleForPetCreate";
import { ContactRoleForPetEdit } from "./resources/contact_role_for_pet/ContactRoleForPetEdit";
import { ContactSalutationTypeList } from "./resources/contact_salutation_type/ContactSalutationTypeList";
import { ContactSalutationTypeShow } from "./resources/contact_salutation_type/ContactSalutationTypeShow";
import { ContactSalutationTypeCreate } from "./resources/contact_salutation_type/ContactSalutationTypeCreate";
import { ContactSalutationTypeEdit } from "./resources/contact_salutation_type/ContactSalutationTypeEdit";
import { ContactTagList } from "./resources/contact_tag/ContactTagList";
import { ContactTagShow } from "./resources/contact_tag/ContactTagShow";
import { ContactTagCreate } from "./resources/contact_tag/ContactTagCreate";
import { ContactTagEdit } from "./resources/contact_tag/ContactTagEdit";
import { ContactTypeList } from "./resources/contact_type/ContactTypeList";
import { ContactTypeShow } from "./resources/contact_type/ContactTypeShow";
import { ContactTypeCreate } from "./resources/contact_type/ContactTypeCreate";
import { ContactTypeEdit } from "./resources/contact_type/ContactTypeEdit";
import { CountryList } from "./resources/country/CountryList";
import { CountryShow } from "./resources/country/CountryShow";
import { CountryCreate } from "./resources/country/CountryCreate";
import { CountryEdit } from "./resources/country/CountryEdit";
import { CoverTypeList } from "./resources/cover_type/CoverTypeList";
import { CoverTypeShow } from "./resources/cover_type/CoverTypeShow";
import { CoverTypeCreate } from "./resources/cover_type/CoverTypeCreate";
import { CoverTypeEdit } from "./resources/cover_type/CoverTypeEdit";
import { CurrencyList } from "./resources/currency/CurrencyList";
import { CurrencyShow } from "./resources/currency/CurrencyShow";
import { CurrencyCreate } from "./resources/currency/CurrencyCreate";
import { CurrencyEdit } from "./resources/currency/CurrencyEdit";
import { DepartmentList } from "./resources/department/DepartmentList";
import { DepartmentShow } from "./resources/department/DepartmentShow";
import { DepartmentCreate } from "./resources/department/DepartmentCreate";
import { DepartmentEdit } from "./resources/department/DepartmentEdit";
import { DependencyCategoryList } from "./resources/dependency_category/DependencyCategoryList";
import { DependencyCategoryShow } from "./resources/dependency_category/DependencyCategoryShow";
import { DependencyCategoryCreate } from "./resources/dependency_category/DependencyCategoryCreate";
import { DependencyCategoryEdit } from "./resources/dependency_category/DependencyCategoryEdit";
import { DependencyTypeList } from "./resources/dependency_type/DependencyTypeList";
import { DependencyTypeShow } from "./resources/dependency_type/DependencyTypeShow";
import { DependencyTypeCreate } from "./resources/dependency_type/DependencyTypeCreate";
import { DependencyTypeEdit } from "./resources/dependency_type/DependencyTypeEdit";
import { EmployeeJobList } from "./resources/employee_job/EmployeeJobList";
import { EmployeeJobShow } from "./resources/employee_job/EmployeeJobShow";
import { EmployeeJobCreate } from "./resources/employee_job/EmployeeJobCreate";
import { EmployeeJobEdit } from "./resources/employee_job/EmployeeJobEdit";
import { EntitySchemaLookupList } from "./resources/entity_schema_lookup/EntitySchemaLookupList";
import { EntitySchemaLookupShow } from "./resources/entity_schema_lookup/EntitySchemaLookupShow";
import { EntitySchemaLookupCreate } from "./resources/entity_schema_lookup/EntitySchemaLookupCreate";
import { EntitySchemaLookupEdit } from "./resources/entity_schema_lookup/EntitySchemaLookupEdit";
import { EventStatusList } from "./resources/event_status/EventStatusList";
import { EventStatusShow } from "./resources/event_status/EventStatusShow";
import { EventStatusCreate } from "./resources/event_status/EventStatusCreate";
import { EventStatusEdit } from "./resources/event_status/EventStatusEdit";
import { EventTeamRolesList } from "./resources/event_team_roles/EventTeamRolesList";
import { EventTeamRolesShow } from "./resources/event_team_roles/EventTeamRolesShow";
import { EventTeamRolesCreate } from "./resources/event_team_roles/EventTeamRolesCreate";
import { EventTeamRolesEdit } from "./resources/event_team_roles/EventTeamRolesEdit";
import { EventTypeList } from "./resources/event_type/EventTypeList";
import { EventTypeShow } from "./resources/event_type/EventTypeShow";
import { EventTypeCreate } from "./resources/event_type/EventTypeCreate";
import { EventTypeEdit } from "./resources/event_type/EventTypeEdit";
import { GenderList } from "./resources/gender/GenderList";
import { GenderShow } from "./resources/gender/GenderShow";
import { GenderCreate } from "./resources/gender/GenderCreate";
import { GenderEdit } from "./resources/gender/GenderEdit";
import { GeoNamesTimeZoneList } from "./resources/geo_names_time_zone/GeoNamesTimeZoneList";
import { GeoNamesTimeZoneShow } from "./resources/geo_names_time_zone/GeoNamesTimeZoneShow";
import { GeoNamesTimeZoneCreate } from "./resources/geo_names_time_zone/GeoNamesTimeZoneCreate";
import { GeoNamesTimeZoneEdit } from "./resources/geo_names_time_zone/GeoNamesTimeZoneEdit";
import { HealthExamObjectList } from "./resources/health_exam_object/HealthExamObjectList";
import { HealthExamObjectShow } from "./resources/health_exam_object/HealthExamObjectShow";
import { HealthExamObjectCreate } from "./resources/health_exam_object/HealthExamObjectCreate";
import { HealthExamObjectEdit } from "./resources/health_exam_object/HealthExamObjectEdit";
import { HealthExamResultList } from "./resources/health_exam_result/HealthExamResultList";
import { HealthExamResultShow } from "./resources/health_exam_result/HealthExamResultShow";
import { HealthExamResultCreate } from "./resources/health_exam_result/HealthExamResultCreate";
import { HealthExamResultEdit } from "./resources/health_exam_result/HealthExamResultEdit";
import { InvoicePaymentStatusList } from "./resources/invoice_payment_status/InvoicePaymentStatusList";
import { InvoicePaymentStatusShow } from "./resources/invoice_payment_status/InvoicePaymentStatusShow";
import { InvoicePaymentStatusCreate } from "./resources/invoice_payment_status/InvoicePaymentStatusCreate";
import { InvoicePaymentStatusEdit } from "./resources/invoice_payment_status/InvoicePaymentStatusEdit";
import { JobList } from "./resources/job/JobList";
import { JobShow } from "./resources/job/JobShow";
import { JobCreate } from "./resources/job/JobCreate";
import { JobEdit } from "./resources/job/JobEdit";
import { JobChangeReasonList } from "./resources/job_change_reason/JobChangeReasonList";
import { JobChangeReasonShow } from "./resources/job_change_reason/JobChangeReasonShow";
import { JobChangeReasonCreate } from "./resources/job_change_reason/JobChangeReasonCreate";
import { JobChangeReasonEdit } from "./resources/job_change_reason/JobChangeReasonEdit";
import { LetterList } from "./resources/letter/LetterList";
import { LetterShow } from "./resources/letter/LetterShow";
import { LetterCreate } from "./resources/letter/LetterCreate";
import { LetterEdit } from "./resources/letter/LetterEdit";
import { LitterStatusList } from "./resources/litter_status/LitterStatusList";
import { LitterStatusShow } from "./resources/litter_status/LitterStatusShow";
import { LitterStatusCreate } from "./resources/litter_status/LitterStatusCreate";
import { LitterStatusEdit } from "./resources/litter_status/LitterStatusEdit";
import { LocationTypeList } from "./resources/location_type/LocationTypeList";
import { LocationTypeShow } from "./resources/location_type/LocationTypeShow";
import { LocationTypeCreate } from "./resources/location_type/LocationTypeCreate";
import { LocationTypeEdit } from "./resources/location_type/LocationTypeEdit";
import { MeasurementTypeList } from "./resources/measurement_type/MeasurementTypeList";
import { MeasurementTypeShow } from "./resources/measurement_type/MeasurementTypeShow";
import { MeasurementTypeCreate } from "./resources/measurement_type/MeasurementTypeCreate";
import { MeasurementTypeEdit } from "./resources/measurement_type/MeasurementTypeEdit";
import { OrderDeliveryStatusList } from "./resources/order_delivery_status/OrderDeliveryStatusList";
import { OrderDeliveryStatusShow } from "./resources/order_delivery_status/OrderDeliveryStatusShow";
import { OrderDeliveryStatusCreate } from "./resources/order_delivery_status/OrderDeliveryStatusCreate";
import { OrderDeliveryStatusEdit } from "./resources/order_delivery_status/OrderDeliveryStatusEdit";
import { OrderPaymentStatusList } from "./resources/order_payment_status/OrderPaymentStatusList";
import { OrderPaymentStatusShow } from "./resources/order_payment_status/OrderPaymentStatusShow";
import { OrderPaymentStatusCreate } from "./resources/order_payment_status/OrderPaymentStatusCreate";
import { OrderPaymentStatusEdit } from "./resources/order_payment_status/OrderPaymentStatusEdit";
import { OrderStatusList } from "./resources/order_status/OrderStatusList";
import { OrderStatusShow } from "./resources/order_status/OrderStatusShow";
import { OrderStatusCreate } from "./resources/order_status/OrderStatusCreate";
import { OrderStatusEdit } from "./resources/order_status/OrderStatusEdit";
import { PageViewList } from "./resources/page_view/PageViewList";
import { PageViewShow } from "./resources/page_view/PageViewShow";
import { PageViewCreate } from "./resources/page_view/PageViewCreate";
import { PageViewEdit } from "./resources/page_view/PageViewEdit";
import { ParticipationStatusList } from "./resources/participation_status/ParticipationStatusList";
import { ParticipationStatusShow } from "./resources/participation_status/ParticipationStatusShow";
import { ParticipationStatusCreate } from "./resources/participation_status/ParticipationStatusCreate";
import { ParticipationStatusEdit } from "./resources/participation_status/ParticipationStatusEdit";
import { PaymentMethodList } from "./resources/payment_method/PaymentMethodList";
import { PaymentMethodShow } from "./resources/payment_method/PaymentMethodShow";
import { PaymentMethodCreate } from "./resources/payment_method/PaymentMethodCreate";
import { PaymentMethodEdit } from "./resources/payment_method/PaymentMethodEdit";
import { PaymentTypeList } from "./resources/payment_type/PaymentTypeList";
import { PaymentTypeShow } from "./resources/payment_type/PaymentTypeShow";
import { PaymentTypeCreate } from "./resources/payment_type/PaymentTypeCreate";
import { PaymentTypeEdit } from "./resources/payment_type/PaymentTypeEdit";
import { PeriodList } from "./resources/period/PeriodList";
import { PeriodShow } from "./resources/period/PeriodShow";
import { PeriodCreate } from "./resources/period/PeriodCreate";
import { PeriodEdit } from "./resources/period/PeriodEdit";
import { PetAdditionalInfoTypeList } from "./resources/pet_additional_info_type/PetAdditionalInfoTypeList";
import { PetAdditionalInfoTypeShow } from "./resources/pet_additional_info_type/PetAdditionalInfoTypeShow";
import { PetAdditionalInfoTypeCreate } from "./resources/pet_additional_info_type/PetAdditionalInfoTypeCreate";
import { PetAdditionalInfoTypeEdit } from "./resources/pet_additional_info_type/PetAdditionalInfoTypeEdit";
import { PetClassList } from "./resources/pet_class/PetClassList";
import { PetClassShow } from "./resources/pet_class/PetClassShow";
import { PetClassCreate } from "./resources/pet_class/PetClassCreate";
import { PetClassEdit } from "./resources/pet_class/PetClassEdit";
import { PetIdentifierTypeList } from "./resources/pet_identifier_type/PetIdentifierTypeList";
import { PetIdentifierTypeShow } from "./resources/pet_identifier_type/PetIdentifierTypeShow";
import { PetIdentifierTypeCreate } from "./resources/pet_identifier_type/PetIdentifierTypeCreate";
import { PetIdentifierTypeEdit } from "./resources/pet_identifier_type/PetIdentifierTypeEdit";
import { PetLifecycleEventList } from "./resources/pet_lifecycle_event/PetLifecycleEventList";
import { PetLifecycleEventShow } from "./resources/pet_lifecycle_event/PetLifecycleEventShow";
import { PetLifecycleEventCreate } from "./resources/pet_lifecycle_event/PetLifecycleEventCreate";
import { PetLifecycleEventEdit } from "./resources/pet_lifecycle_event/PetLifecycleEventEdit";
import { PetLifecycleEventStatusList } from "./resources/pet_lifecycle_event_status/PetLifecycleEventStatusList";
import { PetLifecycleEventStatusShow } from "./resources/pet_lifecycle_event_status/PetLifecycleEventStatusShow";
import { PetLifecycleEventStatusCreate } from "./resources/pet_lifecycle_event_status/PetLifecycleEventStatusCreate";
import { PetLifecycleEventStatusEdit } from "./resources/pet_lifecycle_event_status/PetLifecycleEventStatusEdit";
import { PetPedigreeCycleMemberTypeList } from "./resources/pet_pedigree_cycle_member_type/PetPedigreeCycleMemberTypeList";
import { PetPedigreeCycleMemberTypeShow } from "./resources/pet_pedigree_cycle_member_type/PetPedigreeCycleMemberTypeShow";
import { PetPedigreeCycleMemberTypeCreate } from "./resources/pet_pedigree_cycle_member_type/PetPedigreeCycleMemberTypeCreate";
import { PetPedigreeCycleMemberTypeEdit } from "./resources/pet_pedigree_cycle_member_type/PetPedigreeCycleMemberTypeEdit";
import { PetQualificationList } from "./resources/pet_qualification/PetQualificationList";
import { PetQualificationShow } from "./resources/pet_qualification/PetQualificationShow";
import { PetQualificationCreate } from "./resources/pet_qualification/PetQualificationCreate";
import { PetQualificationEdit } from "./resources/pet_qualification/PetQualificationEdit";
import { PetServiceByOptionsList } from "./resources/pet_service_by_options/PetServiceByOptionsList";
import { PetServiceByOptionsShow } from "./resources/pet_service_by_options/PetServiceByOptionsShow";
import { PetServiceByOptionsCreate } from "./resources/pet_service_by_options/PetServiceByOptionsCreate";
import { PetServiceByOptionsEdit } from "./resources/pet_service_by_options/PetServiceByOptionsEdit";
import { PetServiceFeatureList } from "./resources/pet_service_feature/PetServiceFeatureList";
import { PetServiceFeatureShow } from "./resources/pet_service_feature/PetServiceFeatureShow";
import { PetServiceFeatureCreate } from "./resources/pet_service_feature/PetServiceFeatureCreate";
import { PetServiceFeatureEdit } from "./resources/pet_service_feature/PetServiceFeatureEdit";
import { PetServiceStatusList } from "./resources/pet_service_status/PetServiceStatusList";
import { PetServiceStatusShow } from "./resources/pet_service_status/PetServiceStatusShow";
import { PetServiceStatusCreate } from "./resources/pet_service_status/PetServiceStatusCreate";
import { PetServiceStatusEdit } from "./resources/pet_service_status/PetServiceStatusEdit";
import { PetServiceTypeList } from "./resources/pet_service_type/PetServiceTypeList";
import { PetServiceTypeShow } from "./resources/pet_service_type/PetServiceTypeShow";
import { PetServiceTypeCreate } from "./resources/pet_service_type/PetServiceTypeCreate";
import { PetServiceTypeEdit } from "./resources/pet_service_type/PetServiceTypeEdit";
import { PetServiceTypeByEntityList } from "./resources/pet_service_type_by_entity/PetServiceTypeByEntityList";
import { PetServiceTypeByEntityShow } from "./resources/pet_service_type_by_entity/PetServiceTypeByEntityShow";
import { PetServiceTypeByEntityCreate } from "./resources/pet_service_type_by_entity/PetServiceTypeByEntityCreate";
import { PetServiceTypeByEntityEdit } from "./resources/pet_service_type_by_entity/PetServiceTypeByEntityEdit";
import { PetSizeList } from "./resources/pet_size/PetSizeList";
import { PetSizeShow } from "./resources/pet_size/PetSizeShow";
import { PetSizeCreate } from "./resources/pet_size/PetSizeCreate";
import { PetSizeEdit } from "./resources/pet_size/PetSizeEdit";
import { PetStatusList } from "./resources/pet_status/PetStatusList";
import { PetStatusShow } from "./resources/pet_status/PetStatusShow";
import { PetStatusCreate } from "./resources/pet_status/PetStatusCreate";
import { PetStatusEdit } from "./resources/pet_status/PetStatusEdit";
import { PetTagList } from "./resources/pet_tag/PetTagList";
import { PetTagShow } from "./resources/pet_tag/PetTagShow";
import { PetTagCreate } from "./resources/pet_tag/PetTagCreate";
import { PetTagEdit } from "./resources/pet_tag/PetTagEdit";
import { PetTypeList } from "./resources/pet_type/PetTypeList";
import { PetTypeShow } from "./resources/pet_type/PetTypeShow";
import { PetTypeCreate } from "./resources/pet_type/PetTypeCreate";
import { PetTypeEdit } from "./resources/pet_type/PetTypeEdit";
import { PlaceList } from "./resources/place/PlaceList";
import { PlaceShow } from "./resources/place/PlaceShow";
import { PlaceCreate } from "./resources/place/PlaceCreate";
import { PlaceEdit } from "./resources/place/PlaceEdit";
import { PostParticipantRoleList } from "./resources/post_participant_role/PostParticipantRoleList";
import { PostParticipantRoleShow } from "./resources/post_participant_role/PostParticipantRoleShow";
import { PostParticipantRoleCreate } from "./resources/post_participant_role/PostParticipantRoleCreate";
import { PostParticipantRoleEdit } from "./resources/post_participant_role/PostParticipantRoleEdit";
import { PostStateList } from "./resources/post_state/PostStateList";
import { PostStateShow } from "./resources/post_state/PostStateShow";
import { PostStateCreate } from "./resources/post_state/PostStateCreate";
import { PostStateEdit } from "./resources/post_state/PostStateEdit";
import { PostTypeList } from "./resources/post_type/PostTypeList";
import { PostTypeShow } from "./resources/post_type/PostTypeShow";
import { PostTypeCreate } from "./resources/post_type/PostTypeCreate";
import { PostTypeEdit } from "./resources/post_type/PostTypeEdit";
import { ProductCategoryList } from "./resources/product_category/ProductCategoryList";
import { ProductCategoryShow } from "./resources/product_category/ProductCategoryShow";
import { ProductCategoryCreate } from "./resources/product_category/ProductCategoryCreate";
import { ProductCategoryEdit } from "./resources/product_category/ProductCategoryEdit";
import { ProductTypeList } from "./resources/product_type/ProductTypeList";
import { ProductTypeShow } from "./resources/product_type/ProductTypeShow";
import { ProductTypeCreate } from "./resources/product_type/ProductTypeCreate";
import { ProductTypeEdit } from "./resources/product_type/ProductTypeEdit";
import { ProjectCategoryList } from "./resources/project_category/ProjectCategoryList";
import { ProjectCategoryShow } from "./resources/project_category/ProjectCategoryShow";
import { ProjectCategoryCreate } from "./resources/project_category/ProjectCategoryCreate";
import { ProjectCategoryEdit } from "./resources/project_category/ProjectCategoryEdit";
import { ProjectStatusList } from "./resources/project_status/ProjectStatusList";
import { ProjectStatusShow } from "./resources/project_status/ProjectStatusShow";
import { ProjectStatusCreate } from "./resources/project_status/ProjectStatusCreate";
import { ProjectStatusEdit } from "./resources/project_status/ProjectStatusEdit";
import { ProjectTypeList } from "./resources/project_type/ProjectTypeList";
import { ProjectTypeShow } from "./resources/project_type/ProjectTypeShow";
import { ProjectTypeCreate } from "./resources/project_type/ProjectTypeCreate";
import { ProjectTypeEdit } from "./resources/project_type/ProjectTypeEdit";
import { QualificationInCompetitionList } from "./resources/qualification_in_competition/QualificationInCompetitionList";
import { QualificationInCompetitionShow } from "./resources/qualification_in_competition/QualificationInCompetitionShow";
import { QualificationInCompetitionCreate } from "./resources/qualification_in_competition/QualificationInCompetitionCreate";
import { QualificationInCompetitionEdit } from "./resources/qualification_in_competition/QualificationInCompetitionEdit";
import { QuestFrequencyList } from "./resources/quest_frequency/QuestFrequencyList";
import { QuestFrequencyShow } from "./resources/quest_frequency/QuestFrequencyShow";
import { QuestFrequencyCreate } from "./resources/quest_frequency/QuestFrequencyCreate";
import { QuestFrequencyEdit } from "./resources/quest_frequency/QuestFrequencyEdit";
import { QuestStatusList } from "./resources/quest_status/QuestStatusList";
import { QuestStatusShow } from "./resources/quest_status/QuestStatusShow";
import { QuestStatusCreate } from "./resources/quest_status/QuestStatusCreate";
import { QuestStatusEdit } from "./resources/quest_status/QuestStatusEdit";
import { QuestStepStatusList } from "./resources/quest_step_status/QuestStepStatusList";
import { QuestStepStatusShow } from "./resources/quest_step_status/QuestStepStatusShow";
import { QuestStepStatusCreate } from "./resources/quest_step_status/QuestStepStatusCreate";
import { QuestStepStatusEdit } from "./resources/quest_step_status/QuestStepStatusEdit";
import { QuestTypeList } from "./resources/quest_type/QuestTypeList";
import { QuestTypeShow } from "./resources/quest_type/QuestTypeShow";
import { QuestTypeCreate } from "./resources/quest_type/QuestTypeCreate";
import { QuestTypeEdit } from "./resources/quest_type/QuestTypeEdit";
import { RatingTypeList } from "./resources/rating_type/RatingTypeList";
import { RatingTypeShow } from "./resources/rating_type/RatingTypeShow";
import { RatingTypeCreate } from "./resources/rating_type/RatingTypeCreate";
import { RatingTypeEdit } from "./resources/rating_type/RatingTypeEdit";
import { RawDataRealatedEntityList } from "./resources/raw_data_realated_entity/RawDataRealatedEntityList";
import { RawDataRealatedEntityShow } from "./resources/raw_data_realated_entity/RawDataRealatedEntityShow";
import { RawDataRealatedEntityCreate } from "./resources/raw_data_realated_entity/RawDataRealatedEntityCreate";
import { RawDataRealatedEntityEdit } from "./resources/raw_data_realated_entity/RawDataRealatedEntityEdit";
import { RawDataStatusList } from "./resources/raw_data_status/RawDataStatusList";
import { RawDataStatusShow } from "./resources/raw_data_status/RawDataStatusShow";
import { RawDataStatusCreate } from "./resources/raw_data_status/RawDataStatusCreate";
import { RawDataStatusEdit } from "./resources/raw_data_status/RawDataStatusEdit";
import { ReferralLinkList } from "./resources/referral_link/ReferralLinkList";
import { ReferralLinkShow } from "./resources/referral_link/ReferralLinkShow";
import { ReferralLinkCreate } from "./resources/referral_link/ReferralLinkCreate";
import { ReferralLinkEdit } from "./resources/referral_link/ReferralLinkEdit";
import { ReferrerTypeList } from "./resources/referrer_type/ReferrerTypeList";
import { ReferrerTypeShow } from "./resources/referrer_type/ReferrerTypeShow";
import { ReferrerTypeCreate } from "./resources/referrer_type/ReferrerTypeCreate";
import { ReferrerTypeEdit } from "./resources/referrer_type/ReferrerTypeEdit";
import { RegionList } from "./resources/region/RegionList";
import { RegionShow } from "./resources/region/RegionShow";
import { RegionCreate } from "./resources/region/RegionCreate";
import { RegionEdit } from "./resources/region/RegionEdit";
import { RelationTypeList } from "./resources/relation_type/RelationTypeList";
import { RelationTypeShow } from "./resources/relation_type/RelationTypeShow";
import { RelationTypeCreate } from "./resources/relation_type/RelationTypeCreate";
import { RelationTypeEdit } from "./resources/relation_type/RelationTypeEdit";
import { ServiceCategoryList } from "./resources/service_category/ServiceCategoryList";
import { ServiceCategoryShow } from "./resources/service_category/ServiceCategoryShow";
import { ServiceCategoryCreate } from "./resources/service_category/ServiceCategoryCreate";
import { ServiceCategoryEdit } from "./resources/service_category/ServiceCategoryEdit";
import { ServicePactStatusList } from "./resources/service_pact_status/ServicePactStatusList";
import { ServicePactStatusShow } from "./resources/service_pact_status/ServicePactStatusShow";
import { ServicePactStatusCreate } from "./resources/service_pact_status/ServicePactStatusCreate";
import { ServicePactStatusEdit } from "./resources/service_pact_status/ServicePactStatusEdit";
import { SexList } from "./resources/sex/SexList";
import { SexShow } from "./resources/sex/SexShow";
import { SexCreate } from "./resources/sex/SexCreate";
import { SexEdit } from "./resources/sex/SexEdit";
import { StatusOfActivityList } from "./resources/status_of_activity/StatusOfActivityList";
import { StatusOfActivityShow } from "./resources/status_of_activity/StatusOfActivityShow";
import { StatusOfActivityCreate } from "./resources/status_of_activity/StatusOfActivityCreate";
import { StatusOfActivityEdit } from "./resources/status_of_activity/StatusOfActivityEdit";
import { StudbookList } from "./resources/studbook/StudbookList";
import { StudbookShow } from "./resources/studbook/StudbookShow";
import { StudbookCreate } from "./resources/studbook/StudbookCreate";
import { StudbookEdit } from "./resources/studbook/StudbookEdit";
import { StudbookStatusList } from "./resources/studbook_status/StudbookStatusList";
import { StudbookStatusShow } from "./resources/studbook_status/StudbookStatusShow";
import { StudbookStatusCreate } from "./resources/studbook_status/StudbookStatusCreate";
import { StudbookStatusEdit } from "./resources/studbook_status/StudbookStatusEdit";
import { StudbookTypeList } from "./resources/studbook_type/StudbookTypeList";
import { StudbookTypeShow } from "./resources/studbook_type/StudbookTypeShow";
import { StudbookTypeCreate } from "./resources/studbook_type/StudbookTypeCreate";
import { StudbookTypeEdit } from "./resources/studbook_type/StudbookTypeEdit";
import { SysLanguageList } from "./resources/sys_language/SysLanguageList";
import { SysLanguageShow } from "./resources/sys_language/SysLanguageShow";
import { SysLanguageCreate } from "./resources/sys_language/SysLanguageCreate";
import { SysLanguageEdit } from "./resources/sys_language/SysLanguageEdit";
import { TagAccessList } from "./resources/tag_access/TagAccessList";
import { TagAccessShow } from "./resources/tag_access/TagAccessShow";
import { TagAccessCreate } from "./resources/tag_access/TagAccessCreate";
import { TagAccessEdit } from "./resources/tag_access/TagAccessEdit";
import { TagAccessGranteeList } from "./resources/tag_access_grantee/TagAccessGranteeList";
import { TagAccessGranteeShow } from "./resources/tag_access_grantee/TagAccessGranteeShow";
import { TagAccessGranteeCreate } from "./resources/tag_access_grantee/TagAccessGranteeCreate";
import { TagAccessGranteeEdit } from "./resources/tag_access_grantee/TagAccessGranteeEdit";
import { TerritoryList } from "./resources/territory/TerritoryList";
import { TerritoryShow } from "./resources/territory/TerritoryShow";
import { TerritoryCreate } from "./resources/territory/TerritoryCreate";
import { TerritoryEdit } from "./resources/territory/TerritoryEdit";
import { TimeZoneList } from "./resources/time_zone/TimeZoneList";
import { TimeZoneShow } from "./resources/time_zone/TimeZoneShow";
import { TimeZoneCreate } from "./resources/time_zone/TimeZoneCreate";
import { TimeZoneEdit } from "./resources/time_zone/TimeZoneEdit";
import { TitleList } from "./resources/title/TitleList";
import { TitleShow } from "./resources/title/TitleShow";
import { TitleCreate } from "./resources/title/TitleCreate";
import { TitleEdit } from "./resources/title/TitleEdit";
import { UnitList } from "./resources/unit/UnitList";
import { UnitShow } from "./resources/unit/UnitShow";
import { UnitCreate } from "./resources/unit/UnitCreate";
import { UnitEdit } from "./resources/unit/UnitEdit";
import { UnitByMeasurementTypeList } from "./resources/unit_by_measurement_type/UnitByMeasurementTypeList";
import { UnitByMeasurementTypeShow } from "./resources/unit_by_measurement_type/UnitByMeasurementTypeShow";
import { UnitByMeasurementTypeCreate } from "./resources/unit_by_measurement_type/UnitByMeasurementTypeCreate";
import { UnitByMeasurementTypeEdit } from "./resources/unit_by_measurement_type/UnitByMeasurementTypeEdit";
import { VerificationStatusList } from "./resources/verification_status/VerificationStatusList";
import { VerificationStatusShow } from "./resources/verification_status/VerificationStatusShow";
import { VerificationStatusCreate } from "./resources/verification_status/VerificationStatusCreate";
import { VerificationStatusEdit } from "./resources/verification_status/VerificationStatusEdit";
import { VerifiedStageList } from "./resources/verified_stage/VerifiedStageList";
import { VerifiedStageShow } from "./resources/verified_stage/VerifiedStageShow";
import { VerifiedStageCreate } from "./resources/verified_stage/VerifiedStageCreate";
import { VerifiedStageEdit } from "./resources/verified_stage/VerifiedStageEdit";

const instanceUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const dataProvider = supabaseDataProvider({ instanceUrl, apiKey });

export default function App() {
  return (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
      
      <Resource
        name="breed"
        list={BreedList}
        show={BreedShow}
        create={BreedCreate}
        edit={BreedEdit}
      />
    

      <Resource
        name="pet"
        list={PetList}
        show={PetShow}
        create={PetCreate}
        edit={PetEdit}
      />
    

      <Resource
        name="litter"
        list={LitterList}
        show={LitterShow}
        create={LitterCreate}
        edit={LitterEdit}
      />
    

      <Resource
        name="contact"
        list={ContactList}
        show={ContactShow}
        create={ContactCreate}
        edit={ContactEdit}
      />
    

      <Resource
        name="account"
        list={AccountList}
        show={AccountShow}
        create={AccountCreate}
        edit={AccountEdit}
      />
    

      <Resource
        name="cover"
        list={CoverList}
        show={CoverShow}
        create={CoverCreate}
        edit={CoverEdit}
      />
    

      <Resource
        name="note"
        list={NoteList}
        show={NoteShow}
        create={NoteCreate}
        edit={NoteEdit}
      />
    

      <Resource
        name="collection"
        list={CollectionList}
        show={CollectionShow}
        create={CollectionCreate}
        edit={CollectionEdit}
      />
    

      <Resource
        name="event"
        list={EventList}
        show={EventShow}
        create={EventCreate}
        edit={EventEdit}
      />
    

      <Resource
        name="competition"
        list={CompetitionList}
        show={CompetitionShow}
        create={CompetitionCreate}
        edit={CompetitionEdit}
      />
    

      <Resource
        name="project"
        list={ProjectList}
        show={ProjectShow}
        create={ProjectCreate}
        edit={ProjectEdit}
      />
    

      <Resource
        name="activity"
        list={ActivityList}
        show={ActivityShow}
        create={ActivityCreate}
        edit={ActivityEdit}
      />
    

      <Resource
        name="raw_data"
        list={RawDataList}
        show={RawDataShow}
        create={RawDataCreate}
        edit={RawDataEdit}
      />
    

      <Resource
        name="public_data"
        list={PublicDataList}
        show={PublicDataShow}
        create={PublicDataCreate}
        edit={PublicDataEdit}
      />
    

      <Resource
        name="product"
        list={ProductList}
        show={ProductShow}
        create={ProductCreate}
        edit={ProductEdit}
      />
    

      <Resource
        name="order"
        list={OrderList}
        show={OrderShow}
        create={OrderCreate}
        edit={OrderEdit}
      />
    

      <Resource
        name="invoice"
        list={InvoiceList}
        show={InvoiceShow}
        create={InvoiceCreate}
        edit={InvoiceEdit}
      />
    

      <Resource
        name="cashflow"
        list={CashflowList}
        show={CashflowShow}
        create={CashflowCreate}
        edit={CashflowEdit}
      />
    

      <Resource
        name="service_pact"
        list={ServicePactList}
        show={ServicePactShow}
        create={ServicePactCreate}
        edit={ServicePactEdit}
      />
    

      <Resource
        name="service_item"
        list={ServiceItemList}
        show={ServiceItemShow}
        create={ServiceItemCreate}
        edit={ServiceItemEdit}
      />
    

      <Resource
        name="conf_item"
        list={ConfItemList}
        show={ConfItemShow}
        create={ConfItemCreate}
        edit={ConfItemEdit}
      />
    

      <Resource
        name="post"
        list={PostList}
        show={PostShow}
        create={PostCreate}
        edit={PostEdit}
      />
    

      <Resource
        name="post_feed"
        list={PostFeedList}
        show={PostFeedShow}
        create={PostFeedCreate}
        edit={PostFeedEdit}
      />
    

      <Resource
        name="quest"
        list={QuestList}
        show={QuestShow}
        create={QuestCreate}
        edit={QuestEdit}
      />
    

      <Resource
        name="user_quest"
        list={UserQuestList}
        show={UserQuestShow}
        create={UserQuestCreate}
        edit={UserQuestEdit}
      />
    

      <Resource
        name="account_category"
        list={AccountCategoryList}
        show={AccountCategoryShow}
        create={AccountCategoryCreate}
        edit={AccountCategoryEdit}
      />
    

      <Resource
        name="account_industry"
        list={AccountIndustryList}
        show={AccountIndustryShow}
        create={AccountIndustryCreate}
        edit={AccountIndustryEdit}
      />
    

      <Resource
        name="account_ownership"
        list={AccountOwnershipList}
        show={AccountOwnershipShow}
        create={AccountOwnershipCreate}
        edit={AccountOwnershipEdit}
      />
    

      <Resource
        name="account_status"
        list={AccountStatusList}
        show={AccountStatusShow}
        create={AccountStatusCreate}
        edit={AccountStatusEdit}
      />
    

      <Resource
        name="account_tag"
        list={AccountTagList}
        show={AccountTagShow}
        create={AccountTagCreate}
        edit={AccountTagEdit}
      />
    

      <Resource
        name="account_type"
        list={AccountTypeList}
        show={AccountTypeShow}
        create={AccountTypeCreate}
        edit={AccountTypeEdit}
      />
    

      <Resource
        name="achievement"
        list={AchievementList}
        show={AchievementShow}
        create={AchievementCreate}
        edit={AchievementEdit}
      />
    

      <Resource
        name="achievement_category"
        list={AchievementCategoryList}
        show={AchievementCategoryShow}
        create={AchievementCategoryCreate}
        edit={AchievementCategoryEdit}
      />
    

      <Resource
        name="activity_category"
        list={ActivityCategoryList}
        show={ActivityCategoryShow}
        create={ActivityCategoryCreate}
        edit={ActivityCategoryEdit}
      />
    

      <Resource
        name="activity_priority"
        list={ActivityPriorityList}
        show={ActivityPriorityShow}
        create={ActivityPriorityCreate}
        edit={ActivityPriorityEdit}
      />
    

      <Resource
        name="activity_result"
        list={ActivityResultList}
        show={ActivityResultShow}
        create={ActivityResultCreate}
        edit={ActivityResultEdit}
      />
    

      <Resource
        name="activity_status"
        list={ActivityStatusList}
        show={ActivityStatusShow}
        create={ActivityStatusCreate}
        edit={ActivityStatusEdit}
      />
    

      <Resource
        name="activity_type"
        list={ActivityTypeList}
        show={ActivityTypeShow}
        create={ActivityTypeCreate}
        edit={ActivityTypeEdit}
      />
    

      <Resource
        name="address_type"
        list={AddressTypeList}
        show={AddressTypeShow}
        create={AddressTypeCreate}
        edit={AddressTypeEdit}
      />
    

      <Resource
        name="affix_type"
        list={AffixTypeList}
        show={AffixTypeShow}
        create={AffixTypeCreate}
        edit={AffixTypeEdit}
      />
    

      <Resource
        name="award"
        list={AwardList}
        show={AwardShow}
        create={AwardCreate}
        edit={AwardEdit}
      />
    

      <Resource
        name="award_in_competition"
        list={AwardInCompetitionList}
        show={AwardInCompetitionShow}
        create={AwardInCompetitionCreate}
        edit={AwardInCompetitionEdit}
      />
    

      <Resource
        name="body_feature"
        list={BodyFeatureList}
        show={BodyFeatureShow}
        create={BodyFeatureCreate}
        edit={BodyFeatureEdit}
      />
    

      <Resource
        name="breed_category"
        list={BreedCategoryList}
        show={BreedCategoryShow}
        create={BreedCategoryCreate}
        edit={BreedCategoryEdit}
      />
    

      <Resource
        name="breed_group"
        list={BreedGroupList}
        show={BreedGroupShow}
        create={BreedGroupCreate}
        edit={BreedGroupEdit}
      />
    

      <Resource
        name="collection_type"
        list={CollectionTypeList}
        show={CollectionTypeShow}
        create={CollectionTypeCreate}
        edit={CollectionTypeEdit}
      />
    

      <Resource
        name="license_manager_manage_type"
        list={LicenseManagerManageTypeList}
        show={LicenseManagerManageTypeShow}
        create={LicenseManagerManageTypeCreate}
        edit={LicenseManagerManageTypeEdit}
      />
    

      <Resource
        name="license_manager_status"
        list={LicenseManagerStatusList}
        show={LicenseManagerStatusShow}
        create={LicenseManagerStatusCreate}
        edit={LicenseManagerStatusEdit}
      />
    

      <Resource
        name="license_manager_type"
        list={LicenseManagerTypeList}
        show={LicenseManagerTypeShow}
        create={LicenseManagerTypeCreate}
        edit={LicenseManagerTypeEdit}
      />
    

      <Resource
        name="breed_section"
        list={BreedSectionList}
        show={BreedSectionShow}
        create={BreedSectionCreate}
        edit={BreedSectionEdit}
      />
    

      <Resource
        name="breed_standard"
        list={BreedStandardList}
        show={BreedStandardShow}
        create={BreedStandardCreate}
        edit={BreedStandardEdit}
      />
    

      <Resource
        name="breed_standard_status"
        list={BreedStandardStatusList}
        show={BreedStandardStatusShow}
        create={BreedStandardStatusCreate}
        edit={BreedStandardStatusEdit}
      />
    

      <Resource
        name="breed_subsection"
        list={BreedSubsectionList}
        show={BreedSubsectionShow}
        create={BreedSubsectionCreate}
        edit={BreedSubsectionEdit}
      />
    

      <Resource
        name="calendar"
        list={CalendarList}
        show={CalendarShow}
        create={CalendarCreate}
        edit={CalendarEdit}
      />
    

      <Resource
        name="cashflow_category"
        list={CashflowCategoryList}
        show={CashflowCategoryShow}
        create={CashflowCategoryCreate}
        edit={CashflowCategoryEdit}
      />
    

      <Resource
        name="cashflow_status"
        list={CashflowStatusList}
        show={CashflowStatusShow}
        create={CashflowStatusCreate}
        edit={CashflowStatusEdit}
      />
    

      <Resource
        name="cashflow_type"
        list={CashflowTypeList}
        show={CashflowTypeShow}
        create={CashflowTypeCreate}
        edit={CashflowTypeEdit}
      />
    

      <Resource
        name="city"
        list={CityList}
        show={CityShow}
        create={CityCreate}
        edit={CityEdit}
      />
    

      <Resource
        name="coat_color"
        list={CoatColorList}
        show={CoatColorShow}
        create={CoatColorCreate}
        edit={CoatColorEdit}
      />
    

      <Resource
        name="coat_type"
        list={CoatTypeList}
        show={CoatTypeShow}
        create={CoatTypeCreate}
        edit={CoatTypeEdit}
      />
    

      <Resource
        name="competition_backup"
        list={CompetitionBackupList}
        show={CompetitionBackupShow}
        create={CompetitionBackupCreate}
        edit={CompetitionBackupEdit}
      />
    

      <Resource
        name="competition_category"
        list={CompetitionCategoryList}
        show={CompetitionCategoryShow}
        create={CompetitionCategoryCreate}
        edit={CompetitionCategoryEdit}
      />
    

      <Resource
        name="competition_type"
        list={CompetitionTypeList}
        show={CompetitionTypeShow}
        create={CompetitionTypeCreate}
        edit={CompetitionTypeEdit}
      />
    

      <Resource
        name="config_item_category"
        list={ConfigItemCategoryList}
        show={ConfigItemCategoryShow}
        create={ConfigItemCategoryCreate}
        edit={ConfigItemCategoryEdit}
      />
    

      <Resource
        name="config_item_status"
        list={ConfigItemStatusList}
        show={ConfigItemStatusShow}
        create={ConfigItemStatusCreate}
        edit={ConfigItemStatusEdit}
      />
    

      <Resource
        name="config_item_type"
        list={ConfigItemTypeList}
        show={ConfigItemTypeShow}
        create={ConfigItemTypeCreate}
        edit={ConfigItemTypeEdit}
      />
    

      <Resource
        name="conf_item_parsing_status"
        list={ConfItemParsingStatusList}
        show={ConfItemParsingStatusShow}
        create={ConfItemParsingStatusCreate}
        edit={ConfItemParsingStatusEdit}
      />
    

      <Resource
        name="contact_decision_role"
        list={ContactDecisionRoleList}
        show={ContactDecisionRoleShow}
        create={ContactDecisionRoleCreate}
        edit={ContactDecisionRoleEdit}
      />
    

      <Resource
        name="contact_relationship_type"
        list={ContactRelationshipTypeList}
        show={ContactRelationshipTypeShow}
        create={ContactRelationshipTypeCreate}
        edit={ContactRelationshipTypeEdit}
      />
    

      <Resource
        name="contact_role_for_pet"
        list={ContactRoleForPetList}
        show={ContactRoleForPetShow}
        create={ContactRoleForPetCreate}
        edit={ContactRoleForPetEdit}
      />
    

      <Resource
        name="contact_salutation_type"
        list={ContactSalutationTypeList}
        show={ContactSalutationTypeShow}
        create={ContactSalutationTypeCreate}
        edit={ContactSalutationTypeEdit}
      />
    

      <Resource
        name="contact_tag"
        list={ContactTagList}
        show={ContactTagShow}
        create={ContactTagCreate}
        edit={ContactTagEdit}
      />
    

      <Resource
        name="contact_type"
        list={ContactTypeList}
        show={ContactTypeShow}
        create={ContactTypeCreate}
        edit={ContactTypeEdit}
      />
    

      <Resource
        name="country"
        list={CountryList}
        show={CountryShow}
        create={CountryCreate}
        edit={CountryEdit}
      />
    

      <Resource
        name="cover_type"
        list={CoverTypeList}
        show={CoverTypeShow}
        create={CoverTypeCreate}
        edit={CoverTypeEdit}
      />
    

      <Resource
        name="currency"
        list={CurrencyList}
        show={CurrencyShow}
        create={CurrencyCreate}
        edit={CurrencyEdit}
      />
    

      <Resource
        name="department"
        list={DepartmentList}
        show={DepartmentShow}
        create={DepartmentCreate}
        edit={DepartmentEdit}
      />
    

      <Resource
        name="dependency_category"
        list={DependencyCategoryList}
        show={DependencyCategoryShow}
        create={DependencyCategoryCreate}
        edit={DependencyCategoryEdit}
      />
    

      <Resource
        name="dependency_type"
        list={DependencyTypeList}
        show={DependencyTypeShow}
        create={DependencyTypeCreate}
        edit={DependencyTypeEdit}
      />
    

      <Resource
        name="employee_job"
        list={EmployeeJobList}
        show={EmployeeJobShow}
        create={EmployeeJobCreate}
        edit={EmployeeJobEdit}
      />
    

      <Resource
        name="entity_schema_lookup"
        list={EntitySchemaLookupList}
        show={EntitySchemaLookupShow}
        create={EntitySchemaLookupCreate}
        edit={EntitySchemaLookupEdit}
      />
    

      <Resource
        name="event_status"
        list={EventStatusList}
        show={EventStatusShow}
        create={EventStatusCreate}
        edit={EventStatusEdit}
      />
    

      <Resource
        name="event_team_roles"
        list={EventTeamRolesList}
        show={EventTeamRolesShow}
        create={EventTeamRolesCreate}
        edit={EventTeamRolesEdit}
      />
    

      <Resource
        name="event_type"
        list={EventTypeList}
        show={EventTypeShow}
        create={EventTypeCreate}
        edit={EventTypeEdit}
      />
    

      <Resource
        name="gender"
        list={GenderList}
        show={GenderShow}
        create={GenderCreate}
        edit={GenderEdit}
      />
    

      <Resource
        name="geo_names_time_zone"
        list={GeoNamesTimeZoneList}
        show={GeoNamesTimeZoneShow}
        create={GeoNamesTimeZoneCreate}
        edit={GeoNamesTimeZoneEdit}
      />
    

      <Resource
        name="health_exam_object"
        list={HealthExamObjectList}
        show={HealthExamObjectShow}
        create={HealthExamObjectCreate}
        edit={HealthExamObjectEdit}
      />
    

      <Resource
        name="health_exam_result"
        list={HealthExamResultList}
        show={HealthExamResultShow}
        create={HealthExamResultCreate}
        edit={HealthExamResultEdit}
      />
    

      <Resource
        name="invoice_payment_status"
        list={InvoicePaymentStatusList}
        show={InvoicePaymentStatusShow}
        create={InvoicePaymentStatusCreate}
        edit={InvoicePaymentStatusEdit}
      />
    

      <Resource
        name="job"
        list={JobList}
        show={JobShow}
        create={JobCreate}
        edit={JobEdit}
      />
    

      <Resource
        name="job_change_reason"
        list={JobChangeReasonList}
        show={JobChangeReasonShow}
        create={JobChangeReasonCreate}
        edit={JobChangeReasonEdit}
      />
    

      <Resource
        name="letter"
        list={LetterList}
        show={LetterShow}
        create={LetterCreate}
        edit={LetterEdit}
      />
    

      <Resource
        name="litter_status"
        list={LitterStatusList}
        show={LitterStatusShow}
        create={LitterStatusCreate}
        edit={LitterStatusEdit}
      />
    

      <Resource
        name="location_type"
        list={LocationTypeList}
        show={LocationTypeShow}
        create={LocationTypeCreate}
        edit={LocationTypeEdit}
      />
    

      <Resource
        name="measurement_type"
        list={MeasurementTypeList}
        show={MeasurementTypeShow}
        create={MeasurementTypeCreate}
        edit={MeasurementTypeEdit}
      />
    

      <Resource
        name="order_delivery_status"
        list={OrderDeliveryStatusList}
        show={OrderDeliveryStatusShow}
        create={OrderDeliveryStatusCreate}
        edit={OrderDeliveryStatusEdit}
      />
    

      <Resource
        name="order_payment_status"
        list={OrderPaymentStatusList}
        show={OrderPaymentStatusShow}
        create={OrderPaymentStatusCreate}
        edit={OrderPaymentStatusEdit}
      />
    

      <Resource
        name="order_status"
        list={OrderStatusList}
        show={OrderStatusShow}
        create={OrderStatusCreate}
        edit={OrderStatusEdit}
      />
    

      <Resource
        name="page_view"
        list={PageViewList}
        show={PageViewShow}
        create={PageViewCreate}
        edit={PageViewEdit}
      />
    

      <Resource
        name="participation_status"
        list={ParticipationStatusList}
        show={ParticipationStatusShow}
        create={ParticipationStatusCreate}
        edit={ParticipationStatusEdit}
      />
    

      <Resource
        name="payment_method"
        list={PaymentMethodList}
        show={PaymentMethodShow}
        create={PaymentMethodCreate}
        edit={PaymentMethodEdit}
      />
    

      <Resource
        name="payment_type"
        list={PaymentTypeList}
        show={PaymentTypeShow}
        create={PaymentTypeCreate}
        edit={PaymentTypeEdit}
      />
    

      <Resource
        name="period"
        list={PeriodList}
        show={PeriodShow}
        create={PeriodCreate}
        edit={PeriodEdit}
      />
    

      <Resource
        name="pet_additional_info_type"
        list={PetAdditionalInfoTypeList}
        show={PetAdditionalInfoTypeShow}
        create={PetAdditionalInfoTypeCreate}
        edit={PetAdditionalInfoTypeEdit}
      />
    

      <Resource
        name="pet_class"
        list={PetClassList}
        show={PetClassShow}
        create={PetClassCreate}
        edit={PetClassEdit}
      />
    

      <Resource
        name="pet_identifier_type"
        list={PetIdentifierTypeList}
        show={PetIdentifierTypeShow}
        create={PetIdentifierTypeCreate}
        edit={PetIdentifierTypeEdit}
      />
    

      <Resource
        name="pet_lifecycle_event"
        list={PetLifecycleEventList}
        show={PetLifecycleEventShow}
        create={PetLifecycleEventCreate}
        edit={PetLifecycleEventEdit}
      />
    

      <Resource
        name="pet_lifecycle_event_status"
        list={PetLifecycleEventStatusList}
        show={PetLifecycleEventStatusShow}
        create={PetLifecycleEventStatusCreate}
        edit={PetLifecycleEventStatusEdit}
      />
    

      <Resource
        name="pet_pedigree_cycle_member_type"
        list={PetPedigreeCycleMemberTypeList}
        show={PetPedigreeCycleMemberTypeShow}
        create={PetPedigreeCycleMemberTypeCreate}
        edit={PetPedigreeCycleMemberTypeEdit}
      />
    

      <Resource
        name="pet_qualification"
        list={PetQualificationList}
        show={PetQualificationShow}
        create={PetQualificationCreate}
        edit={PetQualificationEdit}
      />
    

      <Resource
        name="pet_service_by_options"
        list={PetServiceByOptionsList}
        show={PetServiceByOptionsShow}
        create={PetServiceByOptionsCreate}
        edit={PetServiceByOptionsEdit}
      />
    

      <Resource
        name="pet_service_feature"
        list={PetServiceFeatureList}
        show={PetServiceFeatureShow}
        create={PetServiceFeatureCreate}
        edit={PetServiceFeatureEdit}
      />
    

      <Resource
        name="pet_service_status"
        list={PetServiceStatusList}
        show={PetServiceStatusShow}
        create={PetServiceStatusCreate}
        edit={PetServiceStatusEdit}
      />
    

      <Resource
        name="pet_service_type"
        list={PetServiceTypeList}
        show={PetServiceTypeShow}
        create={PetServiceTypeCreate}
        edit={PetServiceTypeEdit}
      />
    

      <Resource
        name="pet_service_type_by_entity"
        list={PetServiceTypeByEntityList}
        show={PetServiceTypeByEntityShow}
        create={PetServiceTypeByEntityCreate}
        edit={PetServiceTypeByEntityEdit}
      />
    

      <Resource
        name="pet_size"
        list={PetSizeList}
        show={PetSizeShow}
        create={PetSizeCreate}
        edit={PetSizeEdit}
      />
    

      <Resource
        name="pet_status"
        list={PetStatusList}
        show={PetStatusShow}
        create={PetStatusCreate}
        edit={PetStatusEdit}
      />
    

      <Resource
        name="pet_tag"
        list={PetTagList}
        show={PetTagShow}
        create={PetTagCreate}
        edit={PetTagEdit}
      />
    

      <Resource
        name="pet_type"
        list={PetTypeList}
        show={PetTypeShow}
        create={PetTypeCreate}
        edit={PetTypeEdit}
      />
    

      <Resource
        name="place"
        list={PlaceList}
        show={PlaceShow}
        create={PlaceCreate}
        edit={PlaceEdit}
      />
    

      <Resource
        name="post_participant_role"
        list={PostParticipantRoleList}
        show={PostParticipantRoleShow}
        create={PostParticipantRoleCreate}
        edit={PostParticipantRoleEdit}
      />
    

      <Resource
        name="post_state"
        list={PostStateList}
        show={PostStateShow}
        create={PostStateCreate}
        edit={PostStateEdit}
      />
    

      <Resource
        name="post_type"
        list={PostTypeList}
        show={PostTypeShow}
        create={PostTypeCreate}
        edit={PostTypeEdit}
      />
    

      <Resource
        name="product_category"
        list={ProductCategoryList}
        show={ProductCategoryShow}
        create={ProductCategoryCreate}
        edit={ProductCategoryEdit}
      />
    

      <Resource
        name="product_type"
        list={ProductTypeList}
        show={ProductTypeShow}
        create={ProductTypeCreate}
        edit={ProductTypeEdit}
      />
    

      <Resource
        name="project_category"
        list={ProjectCategoryList}
        show={ProjectCategoryShow}
        create={ProjectCategoryCreate}
        edit={ProjectCategoryEdit}
      />
    

      <Resource
        name="project_status"
        list={ProjectStatusList}
        show={ProjectStatusShow}
        create={ProjectStatusCreate}
        edit={ProjectStatusEdit}
      />
    

      <Resource
        name="project_type"
        list={ProjectTypeList}
        show={ProjectTypeShow}
        create={ProjectTypeCreate}
        edit={ProjectTypeEdit}
      />
    

      <Resource
        name="qualification_in_competition"
        list={QualificationInCompetitionList}
        show={QualificationInCompetitionShow}
        create={QualificationInCompetitionCreate}
        edit={QualificationInCompetitionEdit}
      />
    

      <Resource
        name="quest_frequency"
        list={QuestFrequencyList}
        show={QuestFrequencyShow}
        create={QuestFrequencyCreate}
        edit={QuestFrequencyEdit}
      />
    

      <Resource
        name="quest_status"
        list={QuestStatusList}
        show={QuestStatusShow}
        create={QuestStatusCreate}
        edit={QuestStatusEdit}
      />
    

      <Resource
        name="quest_step_status"
        list={QuestStepStatusList}
        show={QuestStepStatusShow}
        create={QuestStepStatusCreate}
        edit={QuestStepStatusEdit}
      />
    

      <Resource
        name="quest_type"
        list={QuestTypeList}
        show={QuestTypeShow}
        create={QuestTypeCreate}
        edit={QuestTypeEdit}
      />
    

      <Resource
        name="rating_type"
        list={RatingTypeList}
        show={RatingTypeShow}
        create={RatingTypeCreate}
        edit={RatingTypeEdit}
      />
    

      <Resource
        name="raw_data_realated_entity"
        list={RawDataRealatedEntityList}
        show={RawDataRealatedEntityShow}
        create={RawDataRealatedEntityCreate}
        edit={RawDataRealatedEntityEdit}
      />
    

      <Resource
        name="raw_data_status"
        list={RawDataStatusList}
        show={RawDataStatusShow}
        create={RawDataStatusCreate}
        edit={RawDataStatusEdit}
      />
    

      <Resource
        name="referral_link"
        list={ReferralLinkList}
        show={ReferralLinkShow}
        create={ReferralLinkCreate}
        edit={ReferralLinkEdit}
      />
    

      <Resource
        name="referrer_type"
        list={ReferrerTypeList}
        show={ReferrerTypeShow}
        create={ReferrerTypeCreate}
        edit={ReferrerTypeEdit}
      />
    

      <Resource
        name="region"
        list={RegionList}
        show={RegionShow}
        create={RegionCreate}
        edit={RegionEdit}
      />
    

      <Resource
        name="relation_type"
        list={RelationTypeList}
        show={RelationTypeShow}
        create={RelationTypeCreate}
        edit={RelationTypeEdit}
      />
    

      <Resource
        name="service_category"
        list={ServiceCategoryList}
        show={ServiceCategoryShow}
        create={ServiceCategoryCreate}
        edit={ServiceCategoryEdit}
      />
    

      <Resource
        name="service_pact_status"
        list={ServicePactStatusList}
        show={ServicePactStatusShow}
        create={ServicePactStatusCreate}
        edit={ServicePactStatusEdit}
      />
    

      <Resource
        name="sex"
        list={SexList}
        show={SexShow}
        create={SexCreate}
        edit={SexEdit}
      />
    

      <Resource
        name="status_of_activity"
        list={StatusOfActivityList}
        show={StatusOfActivityShow}
        create={StatusOfActivityCreate}
        edit={StatusOfActivityEdit}
      />
    

      <Resource
        name="studbook"
        list={StudbookList}
        show={StudbookShow}
        create={StudbookCreate}
        edit={StudbookEdit}
      />
    

      <Resource
        name="studbook_status"
        list={StudbookStatusList}
        show={StudbookStatusShow}
        create={StudbookStatusCreate}
        edit={StudbookStatusEdit}
      />
    

      <Resource
        name="studbook_type"
        list={StudbookTypeList}
        show={StudbookTypeShow}
        create={StudbookTypeCreate}
        edit={StudbookTypeEdit}
      />
    

      <Resource
        name="sys_language"
        list={SysLanguageList}
        show={SysLanguageShow}
        create={SysLanguageCreate}
        edit={SysLanguageEdit}
      />
    

      <Resource
        name="tag_access"
        list={TagAccessList}
        show={TagAccessShow}
        create={TagAccessCreate}
        edit={TagAccessEdit}
      />
    

      <Resource
        name="tag_access_grantee"
        list={TagAccessGranteeList}
        show={TagAccessGranteeShow}
        create={TagAccessGranteeCreate}
        edit={TagAccessGranteeEdit}
      />
    

      <Resource
        name="territory"
        list={TerritoryList}
        show={TerritoryShow}
        create={TerritoryCreate}
        edit={TerritoryEdit}
      />
    

      <Resource
        name="time_zone"
        list={TimeZoneList}
        show={TimeZoneShow}
        create={TimeZoneCreate}
        edit={TimeZoneEdit}
      />
    

      <Resource
        name="title"
        list={TitleList}
        show={TitleShow}
        create={TitleCreate}
        edit={TitleEdit}
      />
    

      <Resource
        name="unit"
        list={UnitList}
        show={UnitShow}
        create={UnitCreate}
        edit={UnitEdit}
      />
    

      <Resource
        name="unit_by_measurement_type"
        list={UnitByMeasurementTypeList}
        show={UnitByMeasurementTypeShow}
        create={UnitByMeasurementTypeCreate}
        edit={UnitByMeasurementTypeEdit}
      />
    

      <Resource
        name="verification_status"
        list={VerificationStatusList}
        show={VerificationStatusShow}
        create={VerificationStatusCreate}
        edit={VerificationStatusEdit}
      />
    

      <Resource
        name="verified_stage"
        list={VerifiedStageList}
        show={VerifiedStageShow}
        create={VerifiedStageCreate}
        edit={VerifiedStageEdit}
      />
    
    </Admin>
  );
}
