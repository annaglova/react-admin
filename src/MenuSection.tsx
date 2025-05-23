import Divider from "@mui/material/Divider";

export const MenuSection = ({ title }: { title: string }) => (
  <div className="w-full flex items-center px-4 py-2 text-gray-500">
    <div className="mr-2 font-semibold text-xs">{title}</div>
    <div className="w-full">
      <Divider />
    </div>
  </div>
);
