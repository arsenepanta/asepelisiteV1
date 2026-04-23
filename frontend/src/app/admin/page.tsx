export const dynamic = "force-dynamic";
import { api } from "@/lib/api";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default async function AdminPage() {
  const demandes = await api.listerDemandes();
  return <AdminDashboard demandes={demandes} />;
}
