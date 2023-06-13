import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";

const TableBasic = (props) => {
    const { tableData ,buscarId} = props;
    const columns = [
        {
            name: "id",
            label: "Código",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    },
                }),
            }
        },
        {
            name: "nombre",
            label: "Nombre",
            options: {

            }
        },
        {
            name: "descripcion",
            label: "Descripcion",
            options: {
            }
        },
    ];
    const datos = tableData.map(({ id, nombre, descripcion }) => {
        const datos = [id, nombre, descripcion]
        return datos
    })
    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted) => {
            const deletedData = rowsDeleted.data.map(d => {
                console.log(datos[d.dataIndex])
                return datos[d.dataIndex]
            });
            console.log('Eliminados:', deletedData)
        },
        onRowClick:(rowSelected) => {
            const id = rowSelected[0]
            buscarId(id)
        }
    }
    return (
        <Box sx={{
            padding: "3rem 5%"
        }}>
            <MUIDataTable
                title={"Lista Categorias"}
                data={datos}
                columns={columns}
                options={options} />
        </Box>
    )
}

export default TableBasic