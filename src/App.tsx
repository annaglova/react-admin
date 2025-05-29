import { supabaseDataProvider } from "ra-supabase";
import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { CustomLayout } from "./CustomLayout";

// ==== АВТО-ІМПОРТИ ДЛЯ ВСІХ РЕСУРСІВ ====

// Основні
import { AccountList } from "./resources/account/AccountList";
import { ActivityList } from "./resources/activity/ActivityList";
import { BreedList } from "./resources/breed/BreedList";
import { CashflowList } from "./resources/cashflow/CashflowList";
import { CollectionList } from "./resources/collection/CollectionList";
import { CompetitionList } from "./resources/competition/CompetitionList";
import { ConfItemList } from "./resources/conf_item/ConfItemList";
import { ContactList } from "./resources/contact/ContactList";
import { CoverList } from "./resources/cover/CoverList";
import { EventList } from "./resources/event/EventList";
import { InvoiceList } from "./resources/invoice/InvoiceList";
import { LitterList } from "./resources/litter/LitterList";
import { NoteList } from "./resources/note/NoteList";
import { OrderList } from "./resources/order/OrderList";
import { PetList } from "./resources/pet/PetList";
import { PostList } from "./resources/post/PostList";
import { PostFeedList } from "./resources/post_feed/PostFeedList";
import { ProductList } from "./resources/product/ProductList";
import { ProjectList } from "./resources/project/ProjectList";
import { PublicDataList } from "./resources/public_data/PublicDataList";
import { QuestList } from "./resources/quest/QuestList";
import { RawDataList } from "./resources/raw_data/RawDataList";
import { ServiceItemList } from "./resources/service_item/ServiceItemList";
import { ServicePactList } from "./resources/service_pact/ServicePactList";
import { UserQuestList } from "./resources/user_quest/UserQuestList";

// Довідники (dictionaries)
import { AccountCategoryList } from "./resources/account_category/AccountCategoryList";
import { AccountIndustryList } from "./resources/account_industry/AccountIndustryList";
import { AccountOwnershipList } from "./resources/account_ownership/AccountOwnershipList";
import { AccountStatusList } from "./resources/account_status/AccountStatusList";
import { AccountTagList } from "./resources/account_tag/AccountTagList";
import { AccountTypeList } from "./resources/account_type/AccountTypeList";
import { AchievementList } from "./resources/achievement/AchievementList";
import { AchievementCategoryList } from "./resources/achievement_category/AchievementCategoryList";
import { ActivityCategoryList } from "./resources/activity_category/ActivityCategoryList";
import { ActivityPriorityList } from "./resources/activity_priority/ActivityPriorityList";
import { ActivityResultList } from "./resources/activity_result/ActivityResultList";
import { ActivityStatusList } from "./resources/activity_status/ActivityStatusList";
import { ActivityTypeList } from "./resources/activity_type/ActivityTypeList";
import { AddressTypeList } from "./resources/address_type/AddressTypeList";
import { AffixTypeList } from "./resources/affix_type/AffixTypeList";
import { AwardList } from "./resources/award/AwardList";
import { AwardInCompetitionList } from "./resources/award_in_competition/AwardInCompetitionList";
import { BodyFeatureList } from "./resources/body_feature/BodyFeatureList";
import { BreedCategoryList } from "./resources/breed_category/BreedCategoryList";
import { BreedGroupList } from "./resources/breed_group/BreedGroupList";
import { BreedPrideLicenceManagerManageTypeList } from "./resources/breed_pride_licence_manager_manage_type/BreedPrideLicenceManagerManageTypeList";
import { BreedPrideLicenceManagerStatusList } from "./resources/breed_pride_licence_manager_status/BreedPrideLicenceManagerStatusList";
import { BreedPrideLicenceManagerTypeList } from "./resources/breed_pride_licence_manager_type/BreedPrideLicenceManagerTypeList";
import { BreedSectionList } from "./resources/breed_section/BreedSectionList";
import { BreedStandardList } from "./resources/breed_standard/BreedStandardList";
import { BreedStandardStatusList } from "./resources/breed_standard_status/BreedStandardStatusList";
import { BreedSubsectionList } from "./resources/breed_subsection/BreedSubsectionList";
import { BreedprideCollectionTypeList } from "./resources/breedpride_collection_type/BreedprideCollectionTypeList";
import { CalendarList } from "./resources/calendar/CalendarList";
import { CashflowCategoryList } from "./resources/cashflow_category/CashflowCategoryList";
import { CashflowStatusList } from "./resources/cashflow_status/CashflowStatusList";
import { CashflowTypeList } from "./resources/cashflow_type/CashflowTypeList";
import { CityList } from "./resources/city/CityList";
import { CoatColorList } from "./resources/coat_color/CoatColorList";
import { CoatTypeList } from "./resources/coat_type/CoatTypeList";
import { CompetitionBackupList } from "./resources/competition_backup/CompetitionBackupList";
import { CompetitionCategoryList } from "./resources/competition_category/CompetitionCategoryList";
import { CompetitionTypeList } from "./resources/competition_type/CompetitionTypeList";
import { ConfItemParsingStatusList } from "./resources/conf_item_parsing_status/ConfItemParsingStatusList";
import { ConfigItemCategoryList } from "./resources/config_item_category/ConfigItemCategoryList";
import { ConfigItemStatusList } from "./resources/config_item_status/ConfigItemStatusList";
import { ConfigItemTypeList } from "./resources/config_item_type/ConfigItemTypeList";
import { ContactDecisionRoleList } from "./resources/contact_decision_role/ContactDecisionRoleList";
import { ContactRelationshipTypeList } from "./resources/contact_relationship_type/ContactRelationshipTypeList";
import { ContactRoleForPetList } from "./resources/contact_role_for_pet/ContactRoleForPetList";
import { ContactSalutationTypeList } from "./resources/contact_salutation_type/ContactSalutationTypeList";
import { ContactTagList } from "./resources/contact_tag/ContactTagList";
import { ContactTypeList } from "./resources/contact_type/ContactTypeList";
import { CountryList } from "./resources/country/CountryList";
import { CoverTypeList } from "./resources/cover_type/CoverTypeList";
import { CurrencyList } from "./resources/currency/CurrencyList";
import { DepartmentList } from "./resources/department/DepartmentList";
import { DependencyCategoryList } from "./resources/dependency_category/DependencyCategoryList";
import { DependencyTypeList } from "./resources/dependency_type/DependencyTypeList";
import { EmployeeJobList } from "./resources/employee_job/EmployeeJobList";
import { EntitySchemaLookupList } from "./resources/entity_schema_lookup/EntitySchemaLookupList";
import { EventStatusList } from "./resources/event_status/EventStatusList";
import { EventTeamRolesList } from "./resources/event_team_roles/EventTeamRolesList";
import { EventTypeList } from "./resources/event_type/EventTypeList";
import { GenderList } from "./resources/gender/GenderList";
import { GeoNamesTimeZoneList } from "./resources/geo_names_time_zone/GeoNamesTimeZoneList";
import { HealthExamObjectList } from "./resources/health_exam_object/HealthExamObjectList";
import { HealthExamResultList } from "./resources/health_exam_result/HealthExamResultList";
import { InvoicePaymentStatusList } from "./resources/invoice_payment_status/InvoicePaymentStatusList";
import { JobList } from "./resources/job/JobList";
import { JobChangeReasonList } from "./resources/job_change_reason/JobChangeReasonList";
import { LetterList } from "./resources/letter/LetterList";
import { LitterStatusList } from "./resources/litter_status/LitterStatusList";
import { LocationTypeList } from "./resources/location_type/LocationTypeList";
import { MeasurementTypeList } from "./resources/measurement_type/MeasurementTypeList";
import { OperatorRoutingRulesList } from "./resources/operator_routing_rules/OperatorRoutingRulesList";
import { OppContactInfluenceList } from "./resources/opp_contact_influence/OppContactInfluenceList";
import { OrderDeliveryStatusList } from "./resources/order_delivery_status/OrderDeliveryStatusList";
import { OrderPaymentStatusList } from "./resources/order_payment_status/OrderPaymentStatusList";
import { OrderStatusList } from "./resources/order_status/OrderStatusList";
import { PageViewList } from "./resources/page_view/PageViewList";
import { ParticipationStatusList } from "./resources/participation_status/ParticipationStatusList";
import { PaymentMethodList } from "./resources/payment_method/PaymentMethodList";
import { PaymentTypeList } from "./resources/payment_type/PaymentTypeList";
import { PeriodList } from "./resources/period/PeriodList";
import { PetAdditionalInfoTypeList } from "./resources/pet_additional_info_type/PetAdditionalInfoTypeList";
import { PetClassList } from "./resources/pet_class/PetClassList";
import { PetIdentifierTypeList } from "./resources/pet_identifier_type/PetIdentifierTypeList";
import { PetLifecycleEventList } from "./resources/pet_lifecycle_event/PetLifecycleEventList";
import { PetLifecycleEventStatusList } from "./resources/pet_lifecycle_event_status/PetLifecycleEventStatusList";
import { PetPedigreeCycleMemberTypeList } from "./resources/pet_pedigree_cycle_member_type/PetPedigreeCycleMemberTypeList";
import { PetQualificationList } from "./resources/pet_qualification/PetQualificationList";
import { PetServiceByOptionsList } from "./resources/pet_service_by_options/PetServiceByOptionsList";
import { PetServiceFeatureList } from "./resources/pet_service_feature/PetServiceFeatureList";
import { PetServiceStatusList } from "./resources/pet_service_status/PetServiceStatusList";
import { PetServiceTypeList } from "./resources/pet_service_type/PetServiceTypeList";
import { PetServiceTypeByEntityList } from "./resources/pet_service_type_by_entity/PetServiceTypeByEntityList";
import { PetSizeList } from "./resources/pet_size/PetSizeList";
import { PetStatusList } from "./resources/pet_status/PetStatusList";
import { PetTagList } from "./resources/pet_tag/PetTagList";
import { PetTypeList } from "./resources/pet_type/PetTypeList";
import { PlaceList } from "./resources/place/PlaceList";
import { PostParticipantRoleList } from "./resources/post_participant_role/PostParticipantRoleList";
import { PostStateList } from "./resources/post_state/PostStateList";
import { PostTypeList } from "./resources/post_type/PostTypeList";
import { ProductCategoryList } from "./resources/product_category/ProductCategoryList";
import { ProductTypeList } from "./resources/product_type/ProductTypeList";
import { ProjectCategoryList } from "./resources/project_category/ProjectCategoryList";
import { ProjectStatusList } from "./resources/project_status/ProjectStatusList";
import { ProjectTypeList } from "./resources/project_type/ProjectTypeList";
import { QualificationInCompetitionList } from "./resources/qualification_in_competition/QualificationInCompetitionList";
import { QuestFrequencyList } from "./resources/quest_frequency/QuestFrequencyList";
import { QuestStatusList } from "./resources/quest_status/QuestStatusList";
import { QuestStepStatusList } from "./resources/quest_step_status/QuestStepStatusList";
import { QuestTypeList } from "./resources/quest_type/QuestTypeList";
import { RatingTypeList } from "./resources/rating_type/RatingTypeList";
import { RawDataRealatedEntityList } from "./resources/raw_data_realated_entity/RawDataRealatedEntityList";
import { RawDataStatusList } from "./resources/raw_data_status/RawDataStatusList";
import { ReferralLinkList } from "./resources/referral_link/ReferralLinkList";
import { ReferrerTypeList } from "./resources/referrer_type/ReferrerTypeList";
import { RegionList } from "./resources/region/RegionList";
import { RelationTypeList } from "./resources/relation_type/RelationTypeList";
import { ServiceCategoryList } from "./resources/service_category/ServiceCategoryList";
import { ServicePactStatusList } from "./resources/service_pact_status/ServicePactStatusList";
import { SexList } from "./resources/sex/SexList";
import { StatusOfActivityList } from "./resources/status_of_activity/StatusOfActivityList";
import { StudbookList } from "./resources/studbook/StudbookList";
import { StudbookStatusList } from "./resources/studbook_status/StudbookStatusList";
import { StudbookTypeList } from "./resources/studbook_type/StudbookTypeList";
import { SysLanguageList } from "./resources/sys_language/SysLanguageList";
import { TagAccessList } from "./resources/tag_access/TagAccessList";
import { TagAccessGranteeList } from "./resources/tag_access_grantee/TagAccessGranteeList";
import { TerritoryList } from "./resources/territory/TerritoryList";
import { TimeZoneList } from "./resources/time_zone/TimeZoneList";
import { TitleList } from "./resources/title/TitleList";
import { UnitList } from "./resources/unit/UnitList";
import { UnitByMeasurementTypeList } from "./resources/unit_by_measurement_type/UnitByMeasurementTypeList";
import { VerificationStatusList } from "./resources/verification_status/VerificationStatusList";
import { VerifiedStageList } from "./resources/verified_stage/VerifiedStageList";

// ==== /АВТО-ІМПОРТИ ====

// Ключі для supabaseDataProvider
const instanceUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const dataProvider = supabaseDataProvider({ instanceUrl, apiKey });

export default function App() {
  return (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
      {/* Основні ресурси */}
      <Resource
        name="breed"
        list={BreedList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet"
        list={PetList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="litter"
        list={LitterList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact"
        list={ContactList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account"
        list={AccountList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cover"
        list={CoverList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="note"
        list={NoteList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="collection"
        list={CollectionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="event"
        list={EventList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="competition"
        list={CompetitionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="project"
        list={ProjectList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity"
        list={ActivityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="raw_data"
        list={RawDataList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="public_data"
        list={PublicDataList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product"
        list={ProductList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="order"
        list={OrderList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="invoice"
        list={InvoiceList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cashflow"
        list={CashflowList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="service_pact"
        list={ServicePactList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="service_item"
        list={ServiceItemList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="conf_item"
        list={ConfItemList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="post"
        list={PostList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="post_feed"
        list={PostFeedList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="quest"
        list={QuestList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="user_quest"
        list={UserQuestList}
        edit={EditGuesser}
        show={ShowGuesser}
      />

      {/* Довідники */}
      <Resource
        name="pet_type"
        list={PetTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_category"
        list={AccountCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_industry"
        list={AccountIndustryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_ownership"
        list={AccountOwnershipList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_status"
        list={AccountStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_tag"
        list={AccountTagList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="account_type"
        list={AccountTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="achievement"
        list={AchievementList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="achievement_category"
        list={AchievementCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity_category"
        list={ActivityCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity_priority"
        list={ActivityPriorityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity_result"
        list={ActivityResultList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity_status"
        list={ActivityStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="activity_type"
        list={ActivityTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="address_type"
        list={AddressTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="affix_type"
        list={AffixTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="award"
        list={AwardList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="award_in_competition"
        list={AwardInCompetitionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="body_feature"
        list={BodyFeatureList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_category"
        list={BreedCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_group"
        list={BreedGroupList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breedpride_collection_type"
        list={BreedprideCollectionTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_pride_licence_manager_manage_type"
        list={BreedPrideLicenceManagerManageTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_pride_licence_manager_status"
        list={BreedPrideLicenceManagerStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_pride_licence_manager_type"
        list={BreedPrideLicenceManagerTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_section"
        list={BreedSectionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_standard"
        list={BreedStandardList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_standard_status"
        list={BreedStandardStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="breed_subsection"
        list={BreedSubsectionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="calendar"
        list={CalendarList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cashflow_category"
        list={CashflowCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cashflow_status"
        list={CashflowStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cashflow_type"
        list={CashflowTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="city"
        list={CityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="coat_color"
        list={CoatColorList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="coat_type"
        list={CoatTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="competition_backup"
        list={CompetitionBackupList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="competition_category"
        list={CompetitionCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="competition_type"
        list={CompetitionTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="config_item_category"
        list={ConfigItemCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="config_item_status"
        list={ConfigItemStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="config_item_type"
        list={ConfigItemTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="conf_item_parsing_status"
        list={ConfItemParsingStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_decision_role"
        list={ContactDecisionRoleList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_relationship_type"
        list={ContactRelationshipTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_role_for_pet"
        list={ContactRoleForPetList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_salutation_type"
        list={ContactSalutationTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_tag"
        list={ContactTagList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="contact_type"
        list={ContactTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="country"
        list={CountryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="cover_type"
        list={CoverTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="currency"
        list={CurrencyList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="department"
        list={DepartmentList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="dependency_category"
        list={DependencyCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="dependency_type"
        list={DependencyTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="employee_job"
        list={EmployeeJobList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="entity_schema_lookup"
        list={EntitySchemaLookupList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="event_status"
        list={EventStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="event_team_roles"
        list={EventTeamRolesList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="event_type"
        list={EventTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="gender"
        list={GenderList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="geo_names_time_zone"
        list={GeoNamesTimeZoneList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="health_exam_object"
        list={HealthExamObjectList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="health_exam_result"
        list={HealthExamResultList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="invoice_payment_status"
        list={InvoicePaymentStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="job"
        list={JobList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="job_change_reason"
        list={JobChangeReasonList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="letter"
        list={LetterList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="litter_status"
        list={LitterStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="location_type"
        list={LocationTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="measurement_type"
        list={MeasurementTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="operator_routing_rules"
        list={OperatorRoutingRulesList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="opp_contact_influence"
        list={OppContactInfluenceList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="order_delivery_status"
        list={OrderDeliveryStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="order_payment_status"
        list={OrderPaymentStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="order_status"
        list={OrderStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="page_view"
        list={PageViewList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="participation_status"
        list={ParticipationStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="payment_method"
        list={PaymentMethodList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="payment_type"
        list={PaymentTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="period"
        list={PeriodList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_additional_info_type"
        list={PetAdditionalInfoTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_class"
        list={PetClassList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_identifier_type"
        list={PetIdentifierTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_lifecycle_event"
        list={PetLifecycleEventList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_lifecycle_event_status"
        list={PetLifecycleEventStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_pedigree_cycle_member_type"
        list={PetPedigreeCycleMemberTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_qualification"
        list={PetQualificationList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_service_by_options"
        list={PetServiceByOptionsList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_service_feature"
        list={PetServiceFeatureList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_service_status"
        list={PetServiceStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_service_type"
        list={PetServiceTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_service_type_by_entity"
        list={PetServiceTypeByEntityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_size"
        list={PetSizeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_status"
        list={PetStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="pet_tag"
        list={PetTagList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="place"
        list={PlaceList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="post_participant_role"
        list={PostParticipantRoleList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="post_state"
        list={PostStateList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="post_type"
        list={PostTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product_category"
        list={ProductCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product_type"
        list={ProductTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="project_category"
        list={ProjectCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="project_status"
        list={ProjectStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="project_type"
        list={ProjectTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="qualification_in_competition"
        list={QualificationInCompetitionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="quest_frequency"
        list={QuestFrequencyList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="quest_status"
        list={QuestStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="quest_step_status"
        list={QuestStepStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="quest_type"
        list={QuestTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="rating_type"
        list={RatingTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="raw_data_realated_entity"
        list={RawDataRealatedEntityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="raw_data_status"
        list={RawDataStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="referral_link"
        list={ReferralLinkList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="referrer_type"
        list={ReferrerTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="region"
        list={RegionList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="relation_type"
        list={RelationTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="service_category"
        list={ServiceCategoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="service_pact_status"
        list={ServicePactStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="sex"
        list={SexList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="status_of_activity"
        list={StatusOfActivityList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="studbook"
        list={StudbookList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="studbook_status"
        list={StudbookStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="studbook_type"
        list={StudbookTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="sys_language"
        list={SysLanguageList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="tag_access"
        list={TagAccessList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="tag_access_grantee"
        list={TagAccessGranteeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="territory"
        list={TerritoryList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="time_zone"
        list={TimeZoneList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="title"
        list={TitleList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="unit"
        list={UnitList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="unit_by_measurement_type"
        list={UnitByMeasurementTypeList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="verification_status"
        list={VerificationStatusList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="verified_stage"
        list={VerifiedStageList}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
}
