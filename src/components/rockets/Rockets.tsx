import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rocketActions } from "../../redux/rocket/rocket.actions";
import { selectRockets } from "../../redux/rocket/rocket.reducer";

export function Rockets() {
    const dispatch = useAppDispatch();
    const rockets = useAppSelector(selectRockets);

    useEffect(() => {
        dispatch(rocketActions.getRockets());
    }, [dispatch]);

    return (
        <>
            <Typography variant="h2">
                Rockets
            </Typography>
            <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rockets.map((rocket) => (
                            <TableRow
                                key={rocket.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                                <TableCell component="th" scope="row" width={90}>
                                    {rocket.name}
                                </TableCell>
                                <TableCell align="center" width={140}>
                                    <img src={rocket.flickr_images[0]} height="50px" alt=""/>
                                </TableCell>
                                <TableCell align="left">
                                    {rocket.active ? <CheckCircleIcon color="success"/> : <CancelIcon color="error"/>}
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/rockets/${rocket.id}`}>Details</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}