import Whiteboard from "@components/Whiteboard"
import link from "next/Link"

export default function TeachPage({ params }): { params: { roomId: string }} {
    const { roomId } = params;
    const viewUrl = `/room/${roomId}/view`

    return (
        <main className="h-screen flex flex-col">
            <header className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">Teacher Mode</h1>
                        <p className="text-sm text-gray-600">
                            Room: <span className="font-mono text-gray-900">{roomId}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Save Button goes here */}
                        <Link
                            href={viewUrl}
                            className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
                        >
                            Open student view
                        </Link>
                    </div>
                </div>

                <div className="mx-autp max-w-6xl px-4 pb-3">
                    <p className="text-xs text-gray-500">
                        Share this link with students:{" "}
                        <span className="font-mono text-gray-800">{viewUrl}</span>
                    </p>
                </div>
            </header>

            <section className="flex-1">
                <Whiteboard roomId={roomId} mode="teach" />
            </section>
        </main>
    )
}  