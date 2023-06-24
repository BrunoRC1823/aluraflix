import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import './TablaBasic.css';
import MiModal from "../MiModal/MiModal";
import { useState } from "react";

const TableBasic = (props) => {
    const[openModal,setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const { tableData, buscarId, tableColumns, nombreTabla, eliminarDatos } = props;
    const datos = tableData.map((rowData) => {
        const datos = tableColumns.map((column) => rowData[column.name]);
        return datos;
    });
    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted) => {
            const deletedData = rowsDeleted.data.map(d => {
                const datosEliminar = datos[d.dataIndex]
                const ids = datosEliminar[0];
                return ids
            });
            handleOpenModal()
        },
        onRowClick: (rowSelected) => {
            const id = rowSelected[0]
            buscarId(id)
        }
    }
    return (
        <>
            <Box sx={{ padding: "3rem 5%" }}>
                <MUIDataTable
                    title={nombreTabla}
                    data={datos}
                    columns={tableColumns}
                    options={options} />
            </Box>
            <MiModal openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    )
}

export default TableBasic