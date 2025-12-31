import Whiteboard from "@/components/Whiteboard"

export default function viewPage({ params }): { params: { roomId: string } }) {
    const { roomId } = params;
    
    return (
        <main className="h-screen flex flex-col">
            <header className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-4 py-3">
                    <h1 className="text-lg font-semibold">Student View</h1>
                    <p className="text-sm text-gray-600">
                        Read-only notes | Room: {" "}
                        <span className="font-mono text-gray-900">{roomId}</span>
                    </p>
                </div>
            </header>

            <section className="flex-1">
                <Whiteboard roomId={roomId} mode="view" />
            </section>
        </main>
    )
}