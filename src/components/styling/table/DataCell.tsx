function DataCell({ children }: { children: React.ReactNode }) {
    return (
        <td className="px-6 py-4">
            { children }
        </td>
    )
}

export default DataCell