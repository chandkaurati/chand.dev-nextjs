import Hero from "@/components/herosection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 justify-center px-6 md:px-14">
    <Hero/>
     <div>
      <Button>CLick</Button>
     </div>
    </main>
  );
}
