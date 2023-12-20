import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

export default function MainPage() {
    return (
        <div className="text-black">
            <h1 className="mt-2 text-2xl">Dashboard</h1>
            <span>Información general</span>
            <WidgetsGrid />
        </div>
    );
}