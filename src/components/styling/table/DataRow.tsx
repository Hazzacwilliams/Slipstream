function DataRow({ children }: { children: React.ReactNode }) {
    return (
        <tr className="border-b border-neutral-800 hover:bg-red-950/30">
            {children}
        </tr>
    )
}

export default DataRow