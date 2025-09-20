import { Footer } from "@/feature/common/components/footer";
import { Sidebar } from "@/feature/common/components/sidebar";

export default async function Home() {
  return (
    <div>
      <Sidebar />
      <Footer />
    </div>
  );
}
