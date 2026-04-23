export const dynamic = "force-dynamic";
import { api } from "@/lib/api";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default async function AdminPage() {
  let demandes: any[] = [];
  
  try {
    demandes = await api.listerDemandes();
  } catch (error) {
    console.error("Erreur lors du chargement des demandes:", error);
    // Le composant affichera un message d'erreur
  }

  return <AdminDashboard demandes={demandes} />;
}
