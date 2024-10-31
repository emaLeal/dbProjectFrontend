import LayoutComponent from "@/modules/dashboard/components/layout";

export default function DashboardLayout({ children }) {
  return (
    <>
      <LayoutComponent>{children}</LayoutComponent>
    </>
  );
}
