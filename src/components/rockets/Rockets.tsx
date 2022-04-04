import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rocketActions } from "../../redux/rocket/rocket.actions";
import { selectRockets } from "../../redux/rocket/rocket.reducer";
import styled from "styled-components";
import { favouriteRocketsStorage } from "src/utils/favourite-rockets-storage/favouriteRocketsStorage";

export function Rockets() {
    const dispatch = useAppDispatch()
    const rockets = useAppSelector(selectRockets)
    const [dialogImageUrl, setDialogImageUrl] = useState("")
    const [favouriteIds, setFavouriteIds] = useState<string[]>(favouriteRocketsStorage.getAll())

    useEffect(() => {
        dispatch(rocketActions.getRockets())
    }, [dispatch])

    const handleClickImage = (imageUrl: string) => {
        setDialogImageUrl(imageUrl)
    }

    const handleClose = () => {
        setDialogImageUrl("")
    }

    const handleClickToggleFavourite = (rocketId: string) => {
        setFavouriteIds(favouriteRocketsStorage.toggle(rocketId))
    }

    return (
        <>
            <Typography variant="h2">
                Rockets
            </Typography>
            <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                data-testid="rockets-table-row"
                            >
                                <TableCell width={30}>
                                    {favouriteIds.includes(rocket.id) ? (
                                        <StarIconStyled onClick={() => handleClickToggleFavourite(rocket.id)}/>
                                    ) : (
                                        <StarBorderIconStyled onClick={() => handleClickToggleFavourite(rocket.id)}/>
                                    )}
                                </TableCell>
                                <TableCell component="th" scope="row" width={90} data-testid="rockets-table-name">
                                    {rocket.name}
                                </TableCell>
                                <TableCell align="center" width={140}>
                                    <PreviewImage src={rocket.flickr_images[0]} height="50px" alt="" onClick={() => handleClickImage(rocket.flickr_images[0])} data-testid="rockets-table-preview-image" />
                                </TableCell>
                                <TableCell align="left">
                                    {rocket.active ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/rockets/${rocket.id}`} data-testid="rockets-table-details-link">Details</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={!!dialogImageUrl} onClose={handleClose}>
                <img src={dialogImageUrl} alt="" data-testid="rockets-dialog-image" />
            </Dialog>
        </>
    )
}

const PreviewImage = styled.img`
    cursor: pointer;
`

const StarIconStyled = styled(StarIcon)`
    cursor: pointer;
`

const StarBorderIconStyled = styled(StarBorderIcon)`
    cursor: pointer;
`