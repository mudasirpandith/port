import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main>
      <div
        className="bg-cover md:bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89787.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full  animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 animate-slideUp delay-100">
            Mudasir Pandith
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-center mt-4 px-6 ">
            Crafting unique digital experiences for the web.
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Contact Me</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Coming soon</AlertDialogTitle>
                <AlertDialogDescription>Working...</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Close</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </main>
  );
}
