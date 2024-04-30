
export default function Table({ data }) {
    return (
        <>
            {data? <p>Data Recieved</p> : <p>No Data Recieved</p>}
            <h1>Table</h1>
            <table className="table table-dark table-striped table-hover">
            </table>
        </>
    )
}