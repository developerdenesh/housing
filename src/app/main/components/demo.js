"use client"

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = useState(false);
    const [rowData, setRowData] = useState([
        { Name: "Tesla", Bill: "Model Y", Timeframe: 64950, electric: true },
        { Name: "Ford", Bill: "F-Series", Timeframe: 33850, electric: false },
        { Name: "Toyota", Bill: "Corolla", Timeframe: 29600, electric: false },
      ]);
    const colData = [
        {
            field: "Name"
        },
        {
            field: "Bill"
        },
        {
            field: "Timeframe"
        },
    ]
    const { year, expenditure } = props;

    useEffect(() => {
        console.log(expenditure)

        const data = []
        expenditure.map((element) => {
            data.push({
                Name: element.name,
                Timeframe: element.timeframe,
                Bill: element.bill
            })
        })

        setRowData(data)
    }, [expenditure])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Cash"
                subheader={year}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    If we were to completely use our CPF the breakdown would look as follows:
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Monthly:</Typography>
                    <div
                        className="ag-theme-quartz" // applying the Data Grid theme
                        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
                    >
                        {expenditure.map((element) => (
                            <Fragment key={element.name}>
                                <AgGridReact
                                    rowData={rowData}
                                    columnDefs={colData}
                                />
                                <Typography sx={{ marginBottom: 2 }}>{element.name}</Typography>
                                <Typography sx={{ marginBottom: 2 }}>{element.bill}:</Typography>
                                <Typography sx={{ marginBottom: 2 }}>{element.timeframe}</Typography>
                            </Fragment>
                        ))}
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}
