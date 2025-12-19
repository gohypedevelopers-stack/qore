import Overlay from '@/components/ui/Overlay';
import ViewCanvas from '@/components/3d/ViewCanvas';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <ViewCanvas />
      </div>

      <div className="relative z-10 pointer-events-none">
        <Overlay />
      </div>
    </main>
  );
}
