import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  const [expanded, setExpanded] = React.useState(false);
  const { year } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        title="Use Cash Completely"
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
          <Typography sx={{ marginBottom: 2 }}>January:</Typography>
          <Typography sx={{ marginBottom: 2 }}>February:</Typography>
          <Typography sx={{ marginBottom: 2 }}>March:</Typography>
          <Typography sx={{ marginBottom: 2 }}>April:</Typography>
          <Typography sx={{ marginBottom: 2 }}>May:</Typography>
          <Typography sx={{ marginBottom: 2 }}>June:</Typography>
          <Typography sx={{ marginBottom: 2 }}>July:</Typography>
          <Typography sx={{ marginBottom: 2 }}>August:</Typography>
          <Typography sx={{ marginBottom: 2 }}>September:</Typography>
          <Typography sx={{ marginBottom: 2 }}>October:</Typography>
          <Typography sx={{ marginBottom: 2 }}>November:</Typography>
          <Typography sx={{ marginBottom: 2 }}>December:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
