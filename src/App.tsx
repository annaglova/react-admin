
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v5.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
  Resource,
} from "react-admin";
import { CustomLayout } from "./layouts/CustomLayout";
import { BreedList, BreedShow, BreedCreate, BreedEdit, PetList, PetShow, PetCreate, PetEdit, LitterList, LitterShow, LitterCreate, LitterEdit, ContactList, ContactShow, ContactCreate, ContactEdit, AccountList, AccountShow, AccountCreate, AccountEdit, CoverList, CoverShow, CoverCreate, CoverEdit, NoteList, NoteShow, NoteCreate, NoteEdit, CollectionList, CollectionShow, CollectionCreate, CollectionEdit, EventList, EventShow, EventCreate, EventEdit, CompetitionList, CompetitionShow, CompetitionCreate, CompetitionEdit, ProjectList, ProjectShow, ProjectCreate, ProjectEdit, ActivityList, ActivityShow, ActivityCreate, ActivityEdit, RawDataList, RawDataShow, RawDataCreate, RawDataEdit, PublicDataList, PublicDataShow, PublicDataCreate, PublicDataEdit, ProductList, ProductShow, ProductCreate, ProductEdit, OrderList, OrderShow, OrderCreate, OrderEdit, InvoiceList, InvoiceShow, InvoiceCreate, InvoiceEdit, CashflowList, CashflowShow, CashflowCreate, CashflowEdit, ServicePactList, ServicePactShow, ServicePactCreate, ServicePactEdit, ServiceItemList, ServiceItemShow, ServiceItemCreate, ServiceItemEdit, ConfItemList, ConfItemShow, ConfItemCreate, ConfItemEdit, PostList, PostShow, PostCreate, PostEdit, PostFeedList, PostFeedShow, PostFeedCreate, PostFeedEdit, QuestList, QuestShow, QuestCreate, QuestEdit, UserQuestList, UserQuestShow, UserQuestCreate, UserQuestEdit, AccountCategoryList, AccountCategoryShow, AccountCategoryCreate, AccountCategoryEdit, AccountIndustryList, AccountIndustryShow, AccountIndustryCreate, AccountIndustryEdit, AccountOwnershipList, AccountOwnershipShow, AccountOwnershipCreate, AccountOwnershipEdit, AccountStatusList, AccountStatusShow, AccountStatusCreate, AccountStatusEdit, AccountTagList, AccountTagShow, AccountTagCreate, AccountTagEdit, AccountTypeList, AccountTypeShow, AccountTypeCreate, AccountTypeEdit, AchievementList, AchievementShow, AchievementCreate, AchievementEdit, AchievementCategoryList, AchievementCategoryShow, AchievementCategoryCreate, AchievementCategoryEdit, ActivityCategoryList, ActivityCategoryShow, ActivityCategoryCreate, ActivityCategoryEdit, ActivityPriorityList, ActivityPriorityShow, ActivityPriorityCreate, ActivityPriorityEdit, ActivityResultList, ActivityResultShow, ActivityResultCreate, ActivityResultEdit, ActivityStatusList, ActivityStatusShow, ActivityStatusCreate, ActivityStatusEdit, ActivityTypeList, ActivityTypeShow, ActivityTypeCreate, ActivityTypeEdit, AddressTypeList, AddressTypeShow, AddressTypeCreate, AddressTypeEdit, AffixTypeList, AffixTypeShow, AffixTypeCreate, AffixTypeEdit, AwardList, AwardShow, AwardCreate, AwardEdit, AwardInCompetitionList, AwardInCompetitionShow, AwardInCompetitionCreate, AwardInCompetitionEdit, BodyFeatureList, BodyFeatureShow, BodyFeatureCreate, BodyFeatureEdit, BreedCategoryList, BreedCategoryShow, BreedCategoryCreate, BreedCategoryEdit, BreedGroupList, BreedGroupShow, BreedGroupCreate, BreedGroupEdit, CollectionTypeList, CollectionTypeShow, CollectionTypeCreate, CollectionTypeEdit, LicenseManagerManageTypeList, LicenseManagerManageTypeShow, LicenseManagerManageTypeCreate, LicenseManagerManageTypeEdit, LicenseManagerStatusList, LicenseManagerStatusShow, LicenseManagerStatusCreate, LicenseManagerStatusEdit, LicenseManagerTypeList, LicenseManagerTypeShow, LicenseManagerTypeCreate, LicenseManagerTypeEdit, BreedSectionList, BreedSectionShow, BreedSectionCreate, BreedSectionEdit, BreedStandardList, BreedStandardShow, BreedStandardCreate, BreedStandardEdit, BreedStandardStatusList, BreedStandardStatusShow, BreedStandardStatusCreate, BreedStandardStatusEdit, BreedSubsectionList, BreedSubsectionShow, BreedSubsectionCreate, BreedSubsectionEdit, CalendarList, CalendarShow, CalendarCreate, CalendarEdit, CashflowCategoryList, CashflowCategoryShow, CashflowCategoryCreate, CashflowCategoryEdit, CashflowStatusList, CashflowStatusShow, CashflowStatusCreate, CashflowStatusEdit, CashflowTypeList, CashflowTypeShow, CashflowTypeCreate, CashflowTypeEdit, CityList, CityShow, CityCreate, CityEdit, CoatColorList, CoatColorShow, CoatColorCreate, CoatColorEdit, CoatTypeList, CoatTypeShow, CoatTypeCreate, CoatTypeEdit, CompetitionBackupList, CompetitionBackupShow, CompetitionBackupCreate, CompetitionBackupEdit, CompetitionCategoryList, CompetitionCategoryShow, CompetitionCategoryCreate, CompetitionCategoryEdit, CompetitionTypeList, CompetitionTypeShow, CompetitionTypeCreate, CompetitionTypeEdit, ConfigItemCategoryList, ConfigItemCategoryShow, ConfigItemCategoryCreate, ConfigItemCategoryEdit, ConfigItemStatusList, ConfigItemStatusShow, ConfigItemStatusCreate, ConfigItemStatusEdit, ConfigItemTypeList, ConfigItemTypeShow, ConfigItemTypeCreate, ConfigItemTypeEdit, ConfItemParsingStatusList, ConfItemParsingStatusShow, ConfItemParsingStatusCreate, ConfItemParsingStatusEdit, ContactRelationshipTypeList, ContactRelationshipTypeShow, ContactRelationshipTypeCreate, ContactRelationshipTypeEdit, ContactRoleForPetList, ContactRoleForPetShow, ContactRoleForPetCreate, ContactRoleForPetEdit, ContactSalutationTypeList, ContactSalutationTypeShow, ContactSalutationTypeCreate, ContactSalutationTypeEdit, ContactTagList, ContactTagShow, ContactTagCreate, ContactTagEdit, ContactTypeList, ContactTypeShow, ContactTypeCreate, ContactTypeEdit, CountryList, CountryShow, CountryCreate, CountryEdit, CoverTypeList, CoverTypeShow, CoverTypeCreate, CoverTypeEdit, CurrencyList, CurrencyShow, CurrencyCreate, CurrencyEdit, DependencyCategoryList, DependencyCategoryShow, DependencyCategoryCreate, DependencyCategoryEdit, DependencyTypeList, DependencyTypeShow, DependencyTypeCreate, DependencyTypeEdit, EntitySchemaLookupList, EntitySchemaLookupShow, EntitySchemaLookupCreate, EntitySchemaLookupEdit, EventStatusList, EventStatusShow, EventStatusCreate, EventStatusEdit, EventTeamRolesList, EventTeamRolesShow, EventTeamRolesCreate, EventTeamRolesEdit, EventTypeList, EventTypeShow, EventTypeCreate, EventTypeEdit, GenderList, GenderShow, GenderCreate, GenderEdit, GeoNamesTimeZoneList, GeoNamesTimeZoneShow, GeoNamesTimeZoneCreate, GeoNamesTimeZoneEdit, HealthExamObjectList, HealthExamObjectShow, HealthExamObjectCreate, HealthExamObjectEdit, HealthExamResultList, HealthExamResultShow, HealthExamResultCreate, HealthExamResultEdit, InvoicePaymentStatusList, InvoicePaymentStatusShow, InvoicePaymentStatusCreate, InvoicePaymentStatusEdit, ContactRoleList, ContactRoleShow, ContactRoleCreate, ContactRoleEdit, LetterList, LetterShow, LetterCreate, LetterEdit, LitterStatusList, LitterStatusShow, LitterStatusCreate, LitterStatusEdit, LocationTypeList, LocationTypeShow, LocationTypeCreate, LocationTypeEdit, MeasurementTypeList, MeasurementTypeShow, MeasurementTypeCreate, MeasurementTypeEdit, OrderDeliveryStatusList, OrderDeliveryStatusShow, OrderDeliveryStatusCreate, OrderDeliveryStatusEdit, OrderPaymentStatusList, OrderPaymentStatusShow, OrderPaymentStatusCreate, OrderPaymentStatusEdit, OrderStatusList, OrderStatusShow, OrderStatusCreate, OrderStatusEdit, PageViewList, PageViewShow, PageViewCreate, PageViewEdit, ParticipationStatusList, ParticipationStatusShow, ParticipationStatusCreate, ParticipationStatusEdit, PaymentMethodList, PaymentMethodShow, PaymentMethodCreate, PaymentMethodEdit, PaymentTypeList, PaymentTypeShow, PaymentTypeCreate, PaymentTypeEdit, PeriodList, PeriodShow, PeriodCreate, PeriodEdit, PetAdditionalInfoTypeList, PetAdditionalInfoTypeShow, PetAdditionalInfoTypeCreate, PetAdditionalInfoTypeEdit, PetClassList, PetClassShow, PetClassCreate, PetClassEdit, PetIdentifierTypeList, PetIdentifierTypeShow, PetIdentifierTypeCreate, PetIdentifierTypeEdit, PetLifecycleEventList, PetLifecycleEventShow, PetLifecycleEventCreate, PetLifecycleEventEdit, PetLifecycleEventStatusList, PetLifecycleEventStatusShow, PetLifecycleEventStatusCreate, PetLifecycleEventStatusEdit, PetPedigreeCycleMemberTypeList, PetPedigreeCycleMemberTypeShow, PetPedigreeCycleMemberTypeCreate, PetPedigreeCycleMemberTypeEdit, PetQualificationList, PetQualificationShow, PetQualificationCreate, PetQualificationEdit, PetServiceByOptionsList, PetServiceByOptionsShow, PetServiceByOptionsCreate, PetServiceByOptionsEdit, PetServiceFeatureList, PetServiceFeatureShow, PetServiceFeatureCreate, PetServiceFeatureEdit, PetServiceStatusList, PetServiceStatusShow, PetServiceStatusCreate, PetServiceStatusEdit, PetServiceTypeList, PetServiceTypeShow, PetServiceTypeCreate, PetServiceTypeEdit, PetServiceTypeByEntityList, PetServiceTypeByEntityShow, PetServiceTypeByEntityCreate, PetServiceTypeByEntityEdit, PetSizeList, PetSizeShow, PetSizeCreate, PetSizeEdit, PetStatusList, PetStatusShow, PetStatusCreate, PetStatusEdit, PetTagList, PetTagShow, PetTagCreate, PetTagEdit, PetTypeList, PetTypeShow, PetTypeCreate, PetTypeEdit, PlaceList, PlaceShow, PlaceCreate, PlaceEdit, PostParticipantRoleList, PostParticipantRoleShow, PostParticipantRoleCreate, PostParticipantRoleEdit, PostStateList, PostStateShow, PostStateCreate, PostStateEdit, PostTypeList, PostTypeShow, PostTypeCreate, PostTypeEdit, ProductCategoryList, ProductCategoryShow, ProductCategoryCreate, ProductCategoryEdit, ProductTypeList, ProductTypeShow, ProductTypeCreate, ProductTypeEdit, ProjectCategoryList, ProjectCategoryShow, ProjectCategoryCreate, ProjectCategoryEdit, ProjectStatusList, ProjectStatusShow, ProjectStatusCreate, ProjectStatusEdit, ProjectTypeList, ProjectTypeShow, ProjectTypeCreate, ProjectTypeEdit, QualificationInCompetitionList, QualificationInCompetitionShow, QualificationInCompetitionCreate, QualificationInCompetitionEdit, QuestFrequencyList, QuestFrequencyShow, QuestFrequencyCreate, QuestFrequencyEdit, QuestStatusList, QuestStatusShow, QuestStatusCreate, QuestStatusEdit, QuestStepStatusList, QuestStepStatusShow, QuestStepStatusCreate, QuestStepStatusEdit, QuestTypeList, QuestTypeShow, QuestTypeCreate, QuestTypeEdit, RawDataRealatedEntityList, RawDataRealatedEntityShow, RawDataRealatedEntityCreate, RawDataRealatedEntityEdit, RawDataStatusList, RawDataStatusShow, RawDataStatusCreate, RawDataStatusEdit, ReferralLinkList, ReferralLinkShow, ReferralLinkCreate, ReferralLinkEdit, ReferrerTypeList, ReferrerTypeShow, ReferrerTypeCreate, ReferrerTypeEdit, RegionList, RegionShow, RegionCreate, RegionEdit, RelationTypeList, RelationTypeShow, RelationTypeCreate, RelationTypeEdit, ServiceCategoryList, ServiceCategoryShow, ServiceCategoryCreate, ServiceCategoryEdit, ServicePactStatusList, ServicePactStatusShow, ServicePactStatusCreate, ServicePactStatusEdit, SexList, SexShow, SexCreate, SexEdit, StatusOfActivityList, StatusOfActivityShow, StatusOfActivityCreate, StatusOfActivityEdit, StudbookList, StudbookShow, StudbookCreate, StudbookEdit, StudbookStatusList, StudbookStatusShow, StudbookStatusCreate, StudbookStatusEdit, StudbookTypeList, StudbookTypeShow, StudbookTypeCreate, StudbookTypeEdit, SysLanguageList, SysLanguageShow, SysLanguageCreate, SysLanguageEdit, TagAccessList, TagAccessShow, TagAccessCreate, TagAccessEdit, TagAccessGranteeList, TagAccessGranteeShow, TagAccessGranteeCreate, TagAccessGranteeEdit, TerritoryList, TerritoryShow, TerritoryCreate, TerritoryEdit, TimeZoneList, TimeZoneShow, TimeZoneCreate, TimeZoneEdit, TitleList, TitleShow, TitleCreate, TitleEdit, UnitList, UnitShow, UnitCreate, UnitEdit, UnitByMeasurementTypeList, UnitByMeasurementTypeShow, UnitByMeasurementTypeCreate, UnitByMeasurementTypeEdit, VerificationStatusList, VerificationStatusShow, VerificationStatusCreate, VerificationStatusEdit, VerifiedStageList, VerifiedStageShow, VerifiedStageCreate, VerifiedStageEdit, CoatTypeInBreedShow, CoatTypeInBreedCreate, CoatTypeInBreedEdit, CoatColorInBreedShow, CoatColorInBreedCreate, CoatColorInBreedEdit, AccountAddressShow, AccountAddressCreate, AccountAddressEdit, AccountBillingInfoShow, AccountBillingInfoCreate, AccountBillingInfoEdit, AccountCommunicationShow, AccountCommunicationCreate, AccountCommunicationEdit, AccountInTagShow, AccountInTagCreate, AccountInTagEdit, AccountReviewShow, AccountReviewCreate, AccountReviewEdit, AchievementInBreedShow, AchievementInBreedCreate, AchievementInBreedEdit, AchievementInContactShow, AchievementInContactCreate, AchievementInContactEdit, ActivityParticipantShow, ActivityParticipantCreate, ActivityParticipantEdit, BodyFeatureInBreedShow, BodyFeatureInBreedCreate, BodyFeatureInBreedEdit, BodyFeatureInBreedDivisionShow, BodyFeatureInBreedDivisionCreate, BodyFeatureInBreedDivisionEdit, BreedDivisionShow, BreedDivisionCreate, BreedDivisionEdit, BreedForecastShow, BreedForecastCreate, BreedForecastEdit, BreedInAccountShow, BreedInAccountCreate, BreedInAccountEdit, BreedInContactShow, BreedInContactCreate, BreedInContactEdit, BreedInKennelShow, BreedInKennelCreate, BreedInKennelEdit, BreedSynonymShow, BreedSynonymCreate, BreedSynonymEdit, CoatColorInBreedDivisionShow, CoatColorInBreedDivisionCreate, CoatColorInBreedDivisionEdit, CoatTypeInBreedDivisionShow, CoatTypeInBreedDivisionCreate, CoatTypeInBreedDivisionEdit, CollectionEntityShow, CollectionEntityCreate, CollectionEntityEdit, CollectionInTagShow, CollectionInTagCreate, CollectionInTagEdit, CommentShow, CommentCreate, CommentEdit, ConfItemAddressShow, ConfItemAddressCreate, ConfItemAddressEdit, ConfItemComparisonResultShow, ConfItemComparisonResultCreate, ConfItemComparisonResultEdit, ConfItemInCaseShow, ConfItemInCaseCreate, ConfItemInCaseEdit, ConfItemInTagShow, ConfItemInTagCreate, ConfItemInTagEdit, ConfItemMeasurementShow, ConfItemMeasurementCreate, ConfItemMeasurementEdit, ConfItemProcessLaunchShow, ConfItemProcessLaunchCreate, ConfItemProcessLaunchEdit, ConfItemRelationshipShow, ConfItemRelationshipCreate, ConfItemRelationshipEdit, ContactAddressShow, ContactAddressCreate, ContactAddressEdit, ContactCommunicationShow, ContactCommunicationCreate, ContactCommunicationEdit, ContactInBreedShow, ContactInBreedCreate, ContactInBreedEdit, ContactInCompetitionShow, ContactInCompetitionCreate, ContactInCompetitionEdit, ContactInPetShow, ContactInPetCreate, ContactInPetEdit, ContactInTagShow, ContactInTagCreate, ContactInTagEdit, ContactLanguageShow, ContactLanguageCreate, ContactLanguageEdit, ContactSynonymShow, ContactSynonymCreate, ContactSynonymEdit, CoverInAccountShow, CoverInAccountCreate, CoverInAccountEdit, CoverInContactShow, CoverInContactCreate, CoverInContactEdit, CoverInLitterShow, CoverInLitterCreate, CoverInLitterEdit, CoverInPetShow, CoverInPetCreate, CoverInPetEdit, DataConfidenceLevelShow, DataConfidenceLevelCreate, DataConfidenceLevelEdit, DataQualityLevelShow, DataQualityLevelCreate, DataQualityLevelEdit, DnaMarkerInPetShow, DnaMarkerInPetCreate, DnaMarkerInPetEdit, EntityByRawDataShow, EntityByRawDataCreate, EntityByRawDataEdit, FavoritesShow, FavoritesCreate, FavoritesEdit, FinAccountShow, FinAccountCreate, FinAccountEdit, HealthExamObjectInBreedShow, HealthExamObjectInBreedCreate, HealthExamObjectInBreedEdit, InvoiceProductShow, InvoiceProductCreate, InvoiceProductEdit, IssueTypeShow, IssueTypeCreate, IssueTypeEdit, LicenseManagerShow, LicenseManagerCreate, LicenseManagerEdit, LikeShow, LikeCreate, LikeEdit, LocationInEventShow, LocationInEventCreate, LocationInEventEdit, MeasurementTypeInBreedShow, MeasurementTypeInBreedCreate, MeasurementTypeInBreedEdit, NoteTestRecordShow, NoteTestRecordCreate, NoteTestRecordEdit, ParsingBusinessProcessInConfItemShow, ParsingBusinessProcessInConfItemCreate, ParsingBusinessProcessInConfItemEdit, PaymentInBreedShow, PaymentInBreedCreate, PaymentInBreedEdit, PetAdditionalInfoShow, PetAdditionalInfoCreate, PetAdditionalInfoEdit, PetHealthExamResultShow, PetHealthExamResultCreate, PetHealthExamResultEdit, PetIdentifierShow, PetIdentifierCreate, PetIdentifierEdit, PetInActivityShow, PetInActivityCreate, PetInActivityEdit, PetInProjectShow, PetInProjectCreate, PetInProjectEdit, PetInTagShow, PetInTagCreate, PetInTagEdit, PetLifecycleShow, PetLifecycleCreate, PetLifecycleEdit, PetMeasurementShow, PetMeasurementCreate, PetMeasurementEdit, PetOldShow, PetOldCreate, PetOldEdit, PetPedigreeCycleShow, PetPedigreeCycleCreate, PetPedigreeCycleEdit, PetServiceShow, PetServiceCreate, PetServiceEdit, PetServiceFeatureInPetShow, PetServiceFeatureInPetCreate, PetServiceFeatureInPetEdit, PetServiceInAccountShow, PetServiceInAccountCreate, PetServiceInAccountEdit, PetServiceInLitterShow, PetServiceInLitterCreate, PetServiceInLitterEdit, PetSizeInBreedShow, PetSizeInBreedCreate, PetSizeInBreedEdit, PetSizeInBreedDivisionShow, PetSizeInBreedDivisionCreate, PetSizeInBreedDivisionEdit, PostCommentShow, PostCommentCreate, PostCommentEdit, PostFeedSubscriptionShow, PostFeedSubscriptionCreate, PostFeedSubscriptionEdit, PostInFeedShow, PostInFeedCreate, PostInFeedEdit, PostLikeShow, PostLikeCreate, PostLikeEdit, PostParticipantShow, PostParticipantCreate, PostParticipantEdit, PostPhotoShow, PostPhotoCreate, PostPhotoEdit, ProcessParameterInConfItemShow, ProcessParameterInConfItemCreate, ProcessParameterInConfItemEdit, ProcessSelectorInConfItemShow, ProcessSelectorInConfItemCreate, ProcessSelectorInConfItemEdit, ProducerCardShow, ProducerCardCreate, ProducerCardEdit, ProductPriceShow, ProductPriceCreate, ProductPriceEdit, ProductSourceShow, ProductSourceCreate, ProductSourceEdit, ProductUnitShow, ProductUnitCreate, ProductUnitEdit, ProjectEntryTypeShow, ProjectEntryTypeCreate, ProjectEntryTypeEdit, QuestCycleTypeShow, QuestCycleTypeCreate, QuestCycleTypeEdit, QuestInTagShow, QuestInTagCreate, QuestInTagEdit, QuestStageShow, QuestStageCreate, QuestStageEdit, QuestStepShow, QuestStepCreate, QuestStepEdit, QuestUserDataShow, QuestUserDataCreate, QuestUserDataEdit, RawDataSessionCookiesShow, RawDataSessionCookiesCreate, RawDataSessionCookiesEdit, ReferralShow, ReferralCreate, ReferralEdit, RelatedBreedShow, RelatedBreedCreate, RelatedBreedEdit, RelationshipShow, RelationshipCreate, RelationshipEdit, ServiceEngineerShow, ServiceEngineerCreate, ServiceEngineerEdit, ServiceInConfItemShow, ServiceInConfItemCreate, ServiceInConfItemEdit, ServiceInServicePactShow, ServiceInServicePactCreate, ServiceInServicePactEdit, ServiceItemInTagShow, ServiceItemInTagCreate, ServiceItemInTagEdit, ServicePactInTagShow, ServicePactInTagCreate, ServicePactInTagEdit, ServiceRelationshipShow, ServiceRelationshipCreate, ServiceRelationshipEdit, TimeUnitShow, TimeUnitCreate, TimeUnitEdit, TitleInPetShow, TitleInPetCreate, TitleInPetEdit, TopPatronInBreedShow, TopPatronInBreedCreate, TopPatronInBreedEdit, TopPetInBreedShow, TopPetInBreedCreate, TopPetInBreedEdit, UserQuestStageShow, UserQuestStageCreate, UserQuestStageEdit, UserQuestStepShow, UserQuestStepCreate, UserQuestStepEdit, UserSettingsShow, UserSettingsCreate, UserSettingsEdit } from "@/resources";

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
        name="contact_role"
        list={ContactRoleList}
        show={ContactRoleShow}
        create={ContactRoleCreate}
        edit={ContactRoleEdit}
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

      <Resource
        name="coat_type_in_breed"
        show={CoatTypeInBreedShow}
        create={CoatTypeInBreedCreate}
        edit={CoatTypeInBreedEdit}
      />

      <Resource
        name="coat_color_in_breed"
        show={CoatColorInBreedShow}
        create={CoatColorInBreedCreate}
        edit={CoatColorInBreedEdit}
      />

      <Resource
        name="account_address"
        show={AccountAddressShow}
        create={AccountAddressCreate}
        edit={AccountAddressEdit}
      />

      <Resource
        name="account_billing_info"
        show={AccountBillingInfoShow}
        create={AccountBillingInfoCreate}
        edit={AccountBillingInfoEdit}
      />

      <Resource
        name="account_communication"
        show={AccountCommunicationShow}
        create={AccountCommunicationCreate}
        edit={AccountCommunicationEdit}
      />

      <Resource
        name="account_in_tag"
        show={AccountInTagShow}
        create={AccountInTagCreate}
        edit={AccountInTagEdit}
      />

      <Resource
        name="account_review"
        show={AccountReviewShow}
        create={AccountReviewCreate}
        edit={AccountReviewEdit}
      />

      <Resource
        name="achievement_in_breed"
        show={AchievementInBreedShow}
        create={AchievementInBreedCreate}
        edit={AchievementInBreedEdit}
      />

      <Resource
        name="achievement_in_contact"
        show={AchievementInContactShow}
        create={AchievementInContactCreate}
        edit={AchievementInContactEdit}
      />

      <Resource
        name="activity_participant"
        show={ActivityParticipantShow}
        create={ActivityParticipantCreate}
        edit={ActivityParticipantEdit}
      />

      <Resource
        name="body_feature_in_breed"
        show={BodyFeatureInBreedShow}
        create={BodyFeatureInBreedCreate}
        edit={BodyFeatureInBreedEdit}
      />

      <Resource
        name="body_feature_in_breed_division"
        show={BodyFeatureInBreedDivisionShow}
        create={BodyFeatureInBreedDivisionCreate}
        edit={BodyFeatureInBreedDivisionEdit}
      />

      <Resource
        name="breed_division"
        show={BreedDivisionShow}
        create={BreedDivisionCreate}
        edit={BreedDivisionEdit}
      />

      <Resource
        name="breed_forecast"
        show={BreedForecastShow}
        create={BreedForecastCreate}
        edit={BreedForecastEdit}
      />

      <Resource
        name="breed_in_account"
        show={BreedInAccountShow}
        create={BreedInAccountCreate}
        edit={BreedInAccountEdit}
      />

      <Resource
        name="breed_in_contact"
        show={BreedInContactShow}
        create={BreedInContactCreate}
        edit={BreedInContactEdit}
      />

      <Resource
        name="breed_in_kennel"
        show={BreedInKennelShow}
        create={BreedInKennelCreate}
        edit={BreedInKennelEdit}
      />

      <Resource
        name="breed_synonym"
        show={BreedSynonymShow}
        create={BreedSynonymCreate}
        edit={BreedSynonymEdit}
      />

      <Resource
        name="coat_color_in_breed_division"
        show={CoatColorInBreedDivisionShow}
        create={CoatColorInBreedDivisionCreate}
        edit={CoatColorInBreedDivisionEdit}
      />

      <Resource
        name="coat_type_in_breed_division"
        show={CoatTypeInBreedDivisionShow}
        create={CoatTypeInBreedDivisionCreate}
        edit={CoatTypeInBreedDivisionEdit}
      />

      <Resource
        name="collection_entity"
        show={CollectionEntityShow}
        create={CollectionEntityCreate}
        edit={CollectionEntityEdit}
      />

      <Resource
        name="collection_in_tag"
        show={CollectionInTagShow}
        create={CollectionInTagCreate}
        edit={CollectionInTagEdit}
      />

      <Resource
        name="comment"
        show={CommentShow}
        create={CommentCreate}
        edit={CommentEdit}
      />

      <Resource
        name="conf_item_address"
        show={ConfItemAddressShow}
        create={ConfItemAddressCreate}
        edit={ConfItemAddressEdit}
      />

      <Resource
        name="conf_item_comparison_result"
        show={ConfItemComparisonResultShow}
        create={ConfItemComparisonResultCreate}
        edit={ConfItemComparisonResultEdit}
      />

      <Resource
        name="conf_item_in_case"
        show={ConfItemInCaseShow}
        create={ConfItemInCaseCreate}
        edit={ConfItemInCaseEdit}
      />

      <Resource
        name="conf_item_in_tag"
        show={ConfItemInTagShow}
        create={ConfItemInTagCreate}
        edit={ConfItemInTagEdit}
      />

      <Resource
        name="conf_item_measurement"
        show={ConfItemMeasurementShow}
        create={ConfItemMeasurementCreate}
        edit={ConfItemMeasurementEdit}
      />

      <Resource
        name="conf_item_process_launch"
        show={ConfItemProcessLaunchShow}
        create={ConfItemProcessLaunchCreate}
        edit={ConfItemProcessLaunchEdit}
      />

      <Resource
        name="conf_item_relationship"
        show={ConfItemRelationshipShow}
        create={ConfItemRelationshipCreate}
        edit={ConfItemRelationshipEdit}
      />

      <Resource
        name="contact_address"
        show={ContactAddressShow}
        create={ContactAddressCreate}
        edit={ContactAddressEdit}
      />

      <Resource
        name="contact_communication"
        show={ContactCommunicationShow}
        create={ContactCommunicationCreate}
        edit={ContactCommunicationEdit}
      />

      <Resource
        name="contact_in_breed"
        show={ContactInBreedShow}
        create={ContactInBreedCreate}
        edit={ContactInBreedEdit}
      />

      <Resource
        name="contact_in_competition"
        show={ContactInCompetitionShow}
        create={ContactInCompetitionCreate}
        edit={ContactInCompetitionEdit}
      />

      <Resource
        name="contact_in_pet"
        show={ContactInPetShow}
        create={ContactInPetCreate}
        edit={ContactInPetEdit}
      />

      <Resource
        name="contact_in_tag"
        show={ContactInTagShow}
        create={ContactInTagCreate}
        edit={ContactInTagEdit}
      />

      <Resource
        name="contact_language"
        show={ContactLanguageShow}
        create={ContactLanguageCreate}
        edit={ContactLanguageEdit}
      />

      <Resource
        name="contact_synonym"
        show={ContactSynonymShow}
        create={ContactSynonymCreate}
        edit={ContactSynonymEdit}
      />

      <Resource
        name="cover_in_account"
        show={CoverInAccountShow}
        create={CoverInAccountCreate}
        edit={CoverInAccountEdit}
      />

      <Resource
        name="cover_in_contact"
        show={CoverInContactShow}
        create={CoverInContactCreate}
        edit={CoverInContactEdit}
      />

      <Resource
        name="cover_in_litter"
        show={CoverInLitterShow}
        create={CoverInLitterCreate}
        edit={CoverInLitterEdit}
      />

      <Resource
        name="cover_in_pet"
        show={CoverInPetShow}
        create={CoverInPetCreate}
        edit={CoverInPetEdit}
      />

      <Resource
        name="data_confidence_level"
        show={DataConfidenceLevelShow}
        create={DataConfidenceLevelCreate}
        edit={DataConfidenceLevelEdit}
      />

      <Resource
        name="data_quality_level"
        show={DataQualityLevelShow}
        create={DataQualityLevelCreate}
        edit={DataQualityLevelEdit}
      />

      <Resource
        name="dna_marker_in_pet"
        show={DnaMarkerInPetShow}
        create={DnaMarkerInPetCreate}
        edit={DnaMarkerInPetEdit}
      />

      <Resource
        name="entity_by_raw_data"
        show={EntityByRawDataShow}
        create={EntityByRawDataCreate}
        edit={EntityByRawDataEdit}
      />

      <Resource
        name="favorites"
        show={FavoritesShow}
        create={FavoritesCreate}
        edit={FavoritesEdit}
      />

      <Resource
        name="fin_account"
        show={FinAccountShow}
        create={FinAccountCreate}
        edit={FinAccountEdit}
      />

      <Resource
        name="health_exam_object_in_breed"
        show={HealthExamObjectInBreedShow}
        create={HealthExamObjectInBreedCreate}
        edit={HealthExamObjectInBreedEdit}
      />

      <Resource
        name="invoice_product"
        show={InvoiceProductShow}
        create={InvoiceProductCreate}
        edit={InvoiceProductEdit}
      />

      <Resource
        name="issue_type"
        show={IssueTypeShow}
        create={IssueTypeCreate}
        edit={IssueTypeEdit}
      />

      <Resource
        name="license_manager"
        show={LicenseManagerShow}
        create={LicenseManagerCreate}
        edit={LicenseManagerEdit}
      />

      <Resource
        name="like"
        show={LikeShow}
        create={LikeCreate}
        edit={LikeEdit}
      />

      <Resource
        name="location_in_event"
        show={LocationInEventShow}
        create={LocationInEventCreate}
        edit={LocationInEventEdit}
      />

      <Resource
        name="measurement_type_in_breed"
        show={MeasurementTypeInBreedShow}
        create={MeasurementTypeInBreedCreate}
        edit={MeasurementTypeInBreedEdit}
      />

      <Resource
        name="note_test_record"
        show={NoteTestRecordShow}
        create={NoteTestRecordCreate}
        edit={NoteTestRecordEdit}
      />

      <Resource
        name="parsing_business_process_in_conf_item"
        show={ParsingBusinessProcessInConfItemShow}
        create={ParsingBusinessProcessInConfItemCreate}
        edit={ParsingBusinessProcessInConfItemEdit}
      />

      <Resource
        name="payment_in_breed"
        show={PaymentInBreedShow}
        create={PaymentInBreedCreate}
        edit={PaymentInBreedEdit}
      />

      <Resource
        name="pet_additional_info"
        show={PetAdditionalInfoShow}
        create={PetAdditionalInfoCreate}
        edit={PetAdditionalInfoEdit}
      />

      <Resource
        name="pet_health_exam_result"
        show={PetHealthExamResultShow}
        create={PetHealthExamResultCreate}
        edit={PetHealthExamResultEdit}
      />

      <Resource
        name="pet_identifier"
        show={PetIdentifierShow}
        create={PetIdentifierCreate}
        edit={PetIdentifierEdit}
      />

      <Resource
        name="pet_in_activity"
        show={PetInActivityShow}
        create={PetInActivityCreate}
        edit={PetInActivityEdit}
      />

      <Resource
        name="pet_in_project"
        show={PetInProjectShow}
        create={PetInProjectCreate}
        edit={PetInProjectEdit}
      />

      <Resource
        name="pet_in_tag"
        show={PetInTagShow}
        create={PetInTagCreate}
        edit={PetInTagEdit}
      />

      <Resource
        name="pet_lifecycle"
        show={PetLifecycleShow}
        create={PetLifecycleCreate}
        edit={PetLifecycleEdit}
      />

      <Resource
        name="pet_measurement"
        show={PetMeasurementShow}
        create={PetMeasurementCreate}
        edit={PetMeasurementEdit}
      />

      <Resource
        name="pet_old"
        show={PetOldShow}
        create={PetOldCreate}
        edit={PetOldEdit}
      />

      <Resource
        name="pet_pedigree_cycle"
        show={PetPedigreeCycleShow}
        create={PetPedigreeCycleCreate}
        edit={PetPedigreeCycleEdit}
      />

      <Resource
        name="pet_service"
        show={PetServiceShow}
        create={PetServiceCreate}
        edit={PetServiceEdit}
      />

      <Resource
        name="pet_service_feature_in_pet"
        show={PetServiceFeatureInPetShow}
        create={PetServiceFeatureInPetCreate}
        edit={PetServiceFeatureInPetEdit}
      />

      <Resource
        name="pet_service_in_account"
        show={PetServiceInAccountShow}
        create={PetServiceInAccountCreate}
        edit={PetServiceInAccountEdit}
      />

      <Resource
        name="pet_service_in_litter"
        show={PetServiceInLitterShow}
        create={PetServiceInLitterCreate}
        edit={PetServiceInLitterEdit}
      />

      <Resource
        name="pet_size_in_breed"
        show={PetSizeInBreedShow}
        create={PetSizeInBreedCreate}
        edit={PetSizeInBreedEdit}
      />

      <Resource
        name="pet_size_in_breed_division"
        show={PetSizeInBreedDivisionShow}
        create={PetSizeInBreedDivisionCreate}
        edit={PetSizeInBreedDivisionEdit}
      />

      <Resource
        name="post_comment"
        show={PostCommentShow}
        create={PostCommentCreate}
        edit={PostCommentEdit}
      />

      <Resource
        name="post_feed_subscription"
        show={PostFeedSubscriptionShow}
        create={PostFeedSubscriptionCreate}
        edit={PostFeedSubscriptionEdit}
      />

      <Resource
        name="post_in_feed"
        show={PostInFeedShow}
        create={PostInFeedCreate}
        edit={PostInFeedEdit}
      />

      <Resource
        name="post_like"
        show={PostLikeShow}
        create={PostLikeCreate}
        edit={PostLikeEdit}
      />

      <Resource
        name="post_participant"
        show={PostParticipantShow}
        create={PostParticipantCreate}
        edit={PostParticipantEdit}
      />

      <Resource
        name="post_photo"
        show={PostPhotoShow}
        create={PostPhotoCreate}
        edit={PostPhotoEdit}
      />

      <Resource
        name="process_parameter_in_conf_item"
        show={ProcessParameterInConfItemShow}
        create={ProcessParameterInConfItemCreate}
        edit={ProcessParameterInConfItemEdit}
      />

      <Resource
        name="process_selector_in_conf_item"
        show={ProcessSelectorInConfItemShow}
        create={ProcessSelectorInConfItemCreate}
        edit={ProcessSelectorInConfItemEdit}
      />

      <Resource
        name="producer_card"
        show={ProducerCardShow}
        create={ProducerCardCreate}
        edit={ProducerCardEdit}
      />

      <Resource
        name="product_price"
        show={ProductPriceShow}
        create={ProductPriceCreate}
        edit={ProductPriceEdit}
      />

      <Resource
        name="product_source"
        show={ProductSourceShow}
        create={ProductSourceCreate}
        edit={ProductSourceEdit}
      />

      <Resource
        name="product_unit"
        show={ProductUnitShow}
        create={ProductUnitCreate}
        edit={ProductUnitEdit}
      />

      <Resource
        name="project_entry_type"
        show={ProjectEntryTypeShow}
        create={ProjectEntryTypeCreate}
        edit={ProjectEntryTypeEdit}
      />

      <Resource
        name="quest_cycle_type"
        show={QuestCycleTypeShow}
        create={QuestCycleTypeCreate}
        edit={QuestCycleTypeEdit}
      />

      <Resource
        name="quest_in_tag"
        show={QuestInTagShow}
        create={QuestInTagCreate}
        edit={QuestInTagEdit}
      />

      <Resource
        name="quest_stage"
        show={QuestStageShow}
        create={QuestStageCreate}
        edit={QuestStageEdit}
      />

      <Resource
        name="quest_step"
        show={QuestStepShow}
        create={QuestStepCreate}
        edit={QuestStepEdit}
      />

      <Resource
        name="quest_user_data"
        show={QuestUserDataShow}
        create={QuestUserDataCreate}
        edit={QuestUserDataEdit}
      />

      <Resource
        name="raw_data_session_cookies"
        show={RawDataSessionCookiesShow}
        create={RawDataSessionCookiesCreate}
        edit={RawDataSessionCookiesEdit}
      />

      <Resource
        name="referral"
        show={ReferralShow}
        create={ReferralCreate}
        edit={ReferralEdit}
      />

      <Resource
        name="related_breed"
        show={RelatedBreedShow}
        create={RelatedBreedCreate}
        edit={RelatedBreedEdit}
      />

      <Resource
        name="relationship"
        show={RelationshipShow}
        create={RelationshipCreate}
        edit={RelationshipEdit}
      />

      <Resource
        name="service_engineer"
        show={ServiceEngineerShow}
        create={ServiceEngineerCreate}
        edit={ServiceEngineerEdit}
      />

      <Resource
        name="service_in_conf_item"
        show={ServiceInConfItemShow}
        create={ServiceInConfItemCreate}
        edit={ServiceInConfItemEdit}
      />

      <Resource
        name="service_in_service_pact"
        show={ServiceInServicePactShow}
        create={ServiceInServicePactCreate}
        edit={ServiceInServicePactEdit}
      />

      <Resource
        name="service_item_in_tag"
        show={ServiceItemInTagShow}
        create={ServiceItemInTagCreate}
        edit={ServiceItemInTagEdit}
      />

      <Resource
        name="service_pact_in_tag"
        show={ServicePactInTagShow}
        create={ServicePactInTagCreate}
        edit={ServicePactInTagEdit}
      />

      <Resource
        name="service_relationship"
        show={ServiceRelationshipShow}
        create={ServiceRelationshipCreate}
        edit={ServiceRelationshipEdit}
      />

      <Resource
        name="time_unit"
        show={TimeUnitShow}
        create={TimeUnitCreate}
        edit={TimeUnitEdit}
      />

      <Resource
        name="title_in_pet"
        show={TitleInPetShow}
        create={TitleInPetCreate}
        edit={TitleInPetEdit}
      />

      <Resource
        name="top_patron_in_breed"
        show={TopPatronInBreedShow}
        create={TopPatronInBreedCreate}
        edit={TopPatronInBreedEdit}
      />

      <Resource
        name="top_pet_in_breed"
        show={TopPetInBreedShow}
        create={TopPetInBreedCreate}
        edit={TopPetInBreedEdit}
      />

      <Resource
        name="user_quest_stage"
        show={UserQuestStageShow}
        create={UserQuestStageCreate}
        edit={UserQuestStageEdit}
      />

      <Resource
        name="user_quest_step"
        show={UserQuestStepShow}
        create={UserQuestStepCreate}
        edit={UserQuestStepEdit}
      />

      <Resource
        name="user_settings"
        show={UserSettingsShow}
        create={UserSettingsCreate}
        edit={UserSettingsEdit}
      />
    </Admin>
  );
}
