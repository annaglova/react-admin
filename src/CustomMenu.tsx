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
import NoteIcon from "@mui/icons-material/Note";
import PeopleIcon from "@mui/icons-material/People";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/material/Divider";
import { Menu } from "react-admin";

export const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem leftIcon={<HomeIcon />} />

    <div
      style={{ fontWeight: 700, padding: "12px 16px 4px 16px", color: "#888" }}
    >
      Spaces
    </div>
    <Menu.Item to="/breed" primaryText="Breeds" leftIcon={<BookIcon />} />
    <Menu.Item to="/pet" primaryText="Pets" leftIcon={<PetsIcon />} />
    <Menu.Item
      to="/litter"
      primaryText="Litters"
      leftIcon={<CollectionsIcon />}
    />
    <Menu.Item to="/contact" primaryText="Contacts" leftIcon={<PeopleIcon />} />
    <Menu.Item
      to="/account"
      primaryText="Accounts"
      leftIcon={<AssignmentIcon />}
    />
    <Menu.Item to="/cover" primaryText="Covers" leftIcon={<CategoryIcon />} />
    <Menu.Item to="/note" primaryText="Notes" leftIcon={<NoteIcon />} />
    <Menu.Item
      to="/collection"
      primaryText="Collections"
      leftIcon={<CollectionsIcon />}
    />
    <Menu.Item to="/event" primaryText="Events" leftIcon={<EventIcon />} />
    <Menu.Item
      to="/competition"
      primaryText="Competitions"
      leftIcon={<LocalOfferIcon />}
    />
    <Menu.Item
      to="/project"
      primaryText="Projects"
      leftIcon={<AssignmentIcon />}
    />
    <Menu.Item
      to="/activity"
      primaryText="Activities"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/raw_data"
      primaryText="Raw Data"
      leftIcon={<ListAltIcon />}
    />
    <Menu.Item
      to="/public_data"
      primaryText="Public Data"
      leftIcon={<ListAltIcon />}
    />
    <Menu.Item
      to="/product"
      primaryText="Products"
      leftIcon={<CategoryIcon />}
    />
    <Menu.Item to="/order" primaryText="Orders" leftIcon={<ListAltIcon />} />
    <Menu.Item
      to="/cashflow"
      primaryText="Cashflows"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <Menu.Item
      to="/service_pact"
      primaryText="Service Pacts"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item
      to="/service_item"
      primaryText="Service Items"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item
      to="/conf_item"
      primaryText="Config Items"
      leftIcon={<SettingsIcon />}
    />
    <Menu.Item to="/post" primaryText="Posts" leftIcon={<ForumIcon />} />
    <Menu.Item
      to="/post_feed"
      primaryText="Post Feeds"
      leftIcon={<ForumIcon />}
    />
    <Menu.Item to="/quest" primaryText="Quests" leftIcon={<AssignmentIcon />} />
    <Menu.Item
      to="/user_quest"
      primaryText="User Quests"
      leftIcon={<PeopleIcon />}
    />

    <div
      style={{ fontWeight: 700, padding: "12px 16px 4px 16px", color: "#888" }}
    >
      Dictionaries
    </div>
    <Divider sx={{ my: 1 }} />
    <div
      style={{ fontWeight: 500, padding: "12px 16px 4px 16px", color: "#888" }}
    >
      Pet
    </div>
    <div className="bg-pink-500 text-white p-8 text-3xl">
      Tailwind працює! 🎉
    </div>
    <Menu.Item to="/pet_type" primaryText="Pet Types" leftIcon={<PetsIcon />} />
    {/* Додавай ще довідники тут */}
  </Menu>
);
