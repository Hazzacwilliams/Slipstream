interface DataTableProps {
    headers: string[]
    children: React.ReactNode
}

function DataTable({ headers, children }: DataTableProps) {
    return (
        <div className="w-full max-w-3x1 mx-auto mt-16">
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-neutral-900 uppercase text-sm tracking-wider font-semibold text-neutral-300">
                        <tr className="border-b-2 border-red-600">
                            { headers.map(header => (
                                <th key={header} className="px-6 py-4">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{ children }</tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable