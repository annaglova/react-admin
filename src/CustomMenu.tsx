import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";
import CategoryIcon from "@mui/icons-material/Category";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import NoteIcon from "@mui/icons-material/Note";
import PeopleIcon from "@mui/icons-material/People";
import PetsIcon from "@mui/icons-material/Pets";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Menu } from "react-admin";
import { MenuSection } from "./MenuSection";

export const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem leftIcon={<HomeIcon />} />

    <div className="font-bold px-4 pt-3 pb-1 text-gray-500 uppercase tracking-wide text-xs select-none">
      Spaces
    </div>
    <Menu.Item to="/breed" primaryText="Breeds*" leftIcon={<BookIcon />} />
    <Menu.Item to="/pet" primaryText="Pets*" leftIcon={<PetsIcon />} />
    <Menu.Item
      to="/litter"
      primaryText="Litters*"
      leftIcon={<CollectionsIcon />}
    />
    <Menu.Item
      to="/contact"
      primaryText="Contacts*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/account"
      primaryText="Accounts*"
      leftIcon={<AssignmentIcon />}
    />
    <Menu.Item to="/cover" primaryText="Covers*" leftIcon={<CategoryIcon />} />
    <Menu.Item to="/note" primaryText="Notes*" leftIcon={<NoteIcon />} />
    <Menu.Item
      to="/collection"
      primaryText="Collections*"
      leftIcon={<CollectionsIcon />}
    />
    <Menu.Item to="/event" primaryText="Events*" leftIcon={<EventIcon />} />
    <Menu.Item
      to="/competition"
      primaryText="Competitions*"
      leftIcon={<LocalOfferIcon />}
    />
    <Menu.Item
      to="/project"
      primaryText="Projects*"
      leftIcon={<AssignmentIcon />}
    />
    <Menu.Item
      to="/activity"
      primaryText="Activities*"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/raw_data"
      primaryText="Raw Data*"
      leftIcon={<ListAltIcon />}
    />
    <Menu.Item
      to="/public_data"
      primaryText="Public Data*"
      leftIcon={<ListAltIcon />}
    />
    <Menu.Item
      to="/product"
      primaryText="Products*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/order" primaryText="Orders*" leftIcon={<ListAltIcon />} />
    <Menu.Item
      to="/invoice"
      primaryText="Invoices*"
      leftIcon={<ListAltIcon />}
    />
    <Menu.Item
      to="/cashflow"
      primaryText="Cashflows*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item
      to="/service_pact"
      primaryText="Service Pacts*"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item
      to="/service_item"
      primaryText="Service Items*"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item
      to="/conf_item"
      primaryText="Config Items*"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item to="/post" primaryText="Posts*" leftIcon={<ForumIcon />} />
    <Menu.Item
      to="/post_feed"
      primaryText="Post Feeds*"
      leftIcon={<ForumIcon />}
    />
    <Menu.Item
      to="/quest"
      primaryText="Quests*"
      leftIcon={<AssignmentIcon />}
    />
    <Menu.Item
      to="/user_quest"
      primaryText="User Quests*"
      leftIcon={<PeopleIcon />}
    />

    {/* Dictionaries */}
    <div className="font-bold px-4 pt-4 pb-1 text-gray-500 uppercase tracking-wide text-xs select-none">
      Dictionaries
    </div>

    {/* Breed */}
    <MenuSection title="Breed" />
    <Menu.Item
      to="/body_feature"
      primaryText="Body Features*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/breed_category"
      primaryText="Breed Categories*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/breed_group"
      primaryText="Breed Groups*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/breed_section"
      primaryText="Breed Sections*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/breed_standard"
      primaryText="Breed Standards*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/breed_standard_status"
      primaryText="Breed Standard Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/breed_subsection"
      primaryText="Breed Subsections*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/coat_color"
      primaryText="Coat Colors*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/coat_type"
      primaryText="Coat Types*"
      leftIcon={<PetsIcon />}
    />
    {/* Pet */}
    <MenuSection title="Pet" />
    <Menu.Item
      to="/pet_type"
      primaryText="Pet Types*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/health_exam_object"
      primaryText="Health Exam Objects*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/health_exam_result"
      primaryText="Health Exam Results*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/measurement_type"
      primaryText="Measurement Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_additional_info_type"
      primaryText="Pet Additional Info Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_identifier_type"
      primaryText="Pet Identifier Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_lifecycle_event"
      primaryText="Pet Lifecycle Events*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_lifecycle_event_status"
      primaryText="Pet Lifecycle Event Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_pedigree_cycle_member_type"
      primaryText="Pet Pedigree Cycle Member Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_qualification"
      primaryText="Pet Qualifications*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_service_by_options"
      primaryText="Pet Service By Options*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_service_feature"
      primaryText="Pet Service Features*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_service_status"
      primaryText="Pet Service Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_service_type"
      primaryText="Pet Service Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_service_type_by_entity"
      primaryText="Pet Service Type By Entities*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_size"
      primaryText="Pet Sizes*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/pet_status"
      primaryText="Pet Statuses*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item to="/pet_tag" primaryText="Pet Tags*" leftIcon={<PetsIcon />} />
    <Menu.Item
      to="/pet_type"
      primaryText="Pet Types*"
      leftIcon={<PetsIcon />}
    />
    <Menu.Item
      to="/studbook"
      primaryText="Studbooks*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/studbook_status"
      primaryText="Studbook Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/studbook_type"
      primaryText="Studbook Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/sex" primaryText="Sexes*" leftIcon={<PeopleIcon />} />
    <Menu.Item to="/title" primaryText="Titles*" leftIcon={<CategoryIcon />} />
    {/* Litter */}
    <MenuSection title="Litter" />
    <Menu.Item
      to="/letter"
      primaryText="Letters*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/litter_status"
      primaryText="Litter Statuses*"
      leftIcon={<PetsIcon />}
    />
    {/* Contact */}
    <MenuSection title="Contact" />
    <Menu.Item
      to="/contact_decision_role"
      primaryText="Contact Decision Roles*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/contact_relationship_type"
      primaryText="Contact Relationship Types*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/contact_role_for_pet"
      primaryText="Contact Role For Pets*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/contact_salutation_type"
      primaryText="Contact Salutation Types*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/contact_tag"
      primaryText="Contact Tags*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/contact_type"
      primaryText="Contact Types*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/department"
      primaryText="Departments*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/dependency_category"
      primaryText="Dependency Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/dependency_type"
      primaryText="Dependency Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/employee_job"
      primaryText="Employee Jobs*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/job" primaryText="Jobs*" leftIcon={<CategoryIcon />} />
    <Menu.Item
      to="/job_change_reason"
      primaryText="Job Change Reasons*"
      leftIcon={<CategoryIcon />}
    />
    {/* Account */}
    <MenuSection title="Account" />
    <Menu.Item
      to="/account_category"
      primaryText="Account Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/account_industry"
      primaryText="Account Industries*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/account_ownership"
      primaryText="Account Ownerships*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/account_status"
      primaryText="Account Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/account_tag"
      primaryText="Account Tags*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/account_type"
      primaryText="Account Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/affix_type"
      primaryText="Affix Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/relation_type"
      primaryText="Relation Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Cover */}
    <MenuSection title="Cover" />
    <Menu.Item
      to="/cover_type"
      primaryText="Cover Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Note */}
    <MenuSection title="Note" />
    <Menu.Item
      to="/entity_schema_lookup"
      primaryText="Entity Schema Lookups*"
      leftIcon={<CategoryIcon />}
    />
    {/* Collection */}
    <MenuSection title="Collection" />
    <Menu.Item
      to="/collection_type"
      primaryText="Breedpride Collection Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Event */}
    <MenuSection title="Event" />
    <Menu.Item
      to="/event_status"
      primaryText="Event Statuses*"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/event_team_roles"
      primaryText="Event Team Roles*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/event_type"
      primaryText="Event Types*"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/location_type"
      primaryText="Location Types*"
      leftIcon={<LocationCityIcon />}
    />
    <Menu.Item
      to="/place"
      primaryText="Places*"
      leftIcon={<LocationCityIcon />}
    />
    {/* Competition */}
    <MenuSection title="Competition" />
    <Menu.Item
      to="/achievement"
      primaryText="Achievements*"
      leftIcon={<StarIcon />}
    />
    <Menu.Item
      to="/achievement_category"
      primaryText="Achievement Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/award" primaryText="Awards*" leftIcon={<StarIcon />} />
    <Menu.Item
      to="/award_in_competition"
      primaryText="Awards In Competition*"
      leftIcon={<StarIcon />}
    />
    <Menu.Item
      to="/competition_backup"
      primaryText="Competition Backups*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/competition_category"
      primaryText="Competition Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/competition_type"
      primaryText="Competition Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/pet_class"
      primaryText="Pet Classes*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/qualification_in_competition"
      primaryText="Qualification In Competitions*"
      leftIcon={<StarIcon />}
    />
    <Menu.Item
      to="/participation_status"
      primaryText="Participation Statuses*"
      leftIcon={<CategoryIcon />}
    />
    {/* Project */}
    <MenuSection title="Project" />
    <Menu.Item
      to="/project_category"
      primaryText="Project Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/project_status"
      primaryText="Project Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/project_type"
      primaryText="Project Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Activity */}
    <MenuSection title="Activity" />
    <Menu.Item
      to="/activity_category"
      primaryText="Activity Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/activity_priority"
      primaryText="Activity Priorities*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/activity_result"
      primaryText="Activity Results*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/activity_status"
      primaryText="Activity Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/activity_type"
      primaryText="Activity Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/status_of_activity"
      primaryText="Status Of Activities*"
      leftIcon={<CategoryIcon />}
    />
    {/* Raw Data */}
    <MenuSection title="Raw Data" />
    <Menu.Item
      to="/raw_data_realated_entity"
      primaryText="Raw Data Realated Entities*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/raw_data_status"
      primaryText="Raw Data Statuses*"
      leftIcon={<CategoryIcon />}
    />
    {/* Public Data */}
    <MenuSection title="Public Data" />
    {/* Product */}
    <MenuSection title="Product" />
    <Menu.Item
      to="/product"
      primaryText="Products*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/product_category"
      primaryText="Product Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/product_type"
      primaryText="Product Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/unit" primaryText="Units*" leftIcon={<CategoryIcon />} />
    <Menu.Item
      to="/unit_by_measurement_type"
      primaryText="Units By Measurement Type*"
      leftIcon={<CategoryIcon />}
    />
    {/* Order */}
    <MenuSection title="Order" />
    <Menu.Item
      to="/order_delivery_status"
      primaryText="Order Delivery Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/order_payment_status"
      primaryText="Order Payment Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/order_status"
      primaryText="Order Statuses*"
      leftIcon={<CategoryIcon />}
    />
    {/* Invoice */}
    <MenuSection title="Invoice" />
    <Menu.Item
      to="/invoice_payment_status"
      primaryText="Invoice Payment Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/payment_method"
      primaryText="Payment Methods*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item
      to="/payment_type"
      primaryText="Payment Types*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    {/* Cashflow */}
    <MenuSection title="Cashflow" />
    <Menu.Item
      to="/cashflow_category"
      primaryText="Cashflow Categories*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item
      to="/cashflow_status"
      primaryText="Cashflow Statuses*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item
      to="/cashflow_type"
      primaryText="Cashflow Types*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    {/* Service Pact */}
    <MenuSection title="Service Pact" />
    <Menu.Item
      to="/service_category"
      primaryText="Service Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/service_pact_status"
      primaryText="Service Pact Statuses*"
      leftIcon={<CategoryIcon />}
    />
    {/* Service Item */}
    <MenuSection title="Service Item" />
    {/* Config Item */}
    <MenuSection title="Config Item" />
    <Menu.Item
      to="/config_item_category"
      primaryText="Config Item Categories*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/config_item_status"
      primaryText="Config Item Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/config_item_type"
      primaryText="Config Item Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/conf_item_parsing_status"
      primaryText="Conf Item Parsing Statuses*"
      leftIcon={<CategoryIcon />}
    />
    {/* Post */}
    <MenuSection title="Post" />
    <Menu.Item
      to="/post_participant_role"
      primaryText="Post Participant Roles*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/post_state"
      primaryText="Post States*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/post_type"
      primaryText="Post Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Post Feed */}
    <MenuSection title="Post Feed" />
    {/* Quest */}
    <MenuSection title="Quest" />
    <Menu.Item
      to="/quest_frequency"
      primaryText="Quest Frequencies*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/quest_status"
      primaryText="Quest Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/quest_step_status"
      primaryText="Quest Step Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/quest_type"
      primaryText="Quest Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* User Quest */}
    <MenuSection title="User Quest" />
    {/* License manager */}
    <MenuSection title="License manager" />
    <Menu.Item
      to="/license_manager_manage_type"
      primaryText="Breed Pride Licence Manager Manage Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/license_manager_status"
      primaryText="Breed Pride Licence Manager Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/license_manager_type"
      primaryText="Breed Pride Licence Manager Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/referral_link"
      primaryText="Referral Links*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/referrer_type"
      primaryText="Referrer Types*"
      leftIcon={<CategoryIcon />}
    />
    {/* Common */}
    <MenuSection title="Common" />
    <Menu.Item
      to="/calendar"
      primaryText="Calendars*"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/country"
      primaryText="Countries*"
      leftIcon={<PublicIcon />}
    />
    <Menu.Item
      to="/city"
      primaryText="Cities*"
      leftIcon={<LocationCityIcon />}
    />
    <Menu.Item
      to="/address_type"
      primaryText="Address Types*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/currency"
      primaryText="Currencies*"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item to="/gender" primaryText="Genders*" leftIcon={<PeopleIcon />} />
    <Menu.Item
      to="/geo_names_time_zone"
      primaryText="Geo Names Time Zones*"
      leftIcon={<TimelineIcon />}
    />
    <Menu.Item
      to="/verification_status"
      primaryText="Verification Statuses*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/verified_stage"
      primaryText="Verified Stages*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/page_view"
      primaryText="Page Views*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/period"
      primaryText="Periods*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/region" primaryText="Regions*" leftIcon={<PublicIcon />} />
    <Menu.Item
      to="/sys_language"
      primaryText="Languages*"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/tag_access"
      primaryText="Tag Access*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/tag_access_grantee"
      primaryText="Tag Access Grantees*"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item
      to="/territory"
      primaryText="Territories*"
      leftIcon={<PublicIcon />}
    />
    <Menu.Item
      to="/time_zone"
      primaryText="Time Zones*"
      leftIcon={<TimelineIcon />}
    />
    <Menu.Item
      to="/rating_type"
      primaryText="Rating type*"
      leftIcon={<TimelineIcon />}
    />
  </Menu>
);
