import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table'






export default function Table({ data }) {
    const columnHelper = createColumnHelper()
    const columns = [
        columnHelper.accessor('todo', {
            header: 'Todo',
            cell: info => info.getValue()
        }),
        columnHelper.accessor('completed', {
            header: 'Completed',
            cell: info => info.getValue()
        }),
        columnHelper.accessor('id', {
            header: 'ID',
            cell: info => info.getValue()
        })
    ]


    const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

    return (
        <>
            {data ? <p>Data Recieved</p> : <p>No Data Recieved</p>}
            <h1>Table</h1>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}