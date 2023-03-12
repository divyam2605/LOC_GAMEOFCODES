import React from 'react'
import Nav from '../../components/Nav'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import Chat from "../../components/Chat";

const Blog = () => {
  return (
    <>
    
    <Nav/>
    <Chat/>
    <Grid container sx={{ padding: '3em'}}>
    
        <Grid item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}} elevation={6} >
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://blog.sparkhire.com/wp-content/uploads/2015/08/The-Game-of-Hiring-and-How-it-Works.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Application Process
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "The Game of Hiring and How it Works"

        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://blog.sparkhire.com/2015/08/08/the-game-of-hiring-and-how-it-works/' size="small" sx={{alignItems: "center", justifyContent:'center', alignContent:'center', justifySelf:'center',justifyItems:'center'}}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/12/13115603/high-paying-freelance-1024x512.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        10 High Paying Freelance Jobs

        </Typography>
        <Typography variant="body2" color="text.secondary">
        Find the best freelance jobs based upon your interests
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://www.flexjobs.com/blog/post/high-paying-freelance-jobs/' size="small" >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid  item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.cheggindia.com/wp-content/uploads/2021/02/Top-25-Freelance-Jobs-from-Home-that-Pay-Really-Well.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Freelance Career Advise

        </Typography>
        <Typography variant="body2" color="text.secondary">
        5 Things To Consider Before Starting A Freelance Career
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small" href='https://www.bubble-jobs.co.uk/blog/blog/five-things-consider-starting-freelance-career/'>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid  item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Acing a Phone Interview
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Six tips to get you through to the next round
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://blog.simplyhired.com/career/phone-interview-advice/' size="small" >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid  item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Acing a Phone Interview
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Six tips to get you through to the next round
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://blog.simplyhired.com/career/phone-interview-advice/' size="small" >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}} elevation={6} >
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://blog.sparkhire.com/wp-content/uploads/2015/08/The-Game-of-Hiring-and-How-it-Works.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Application Process
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "The Game of Hiring and How it Works"

        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://blog.sparkhire.com/2015/08/08/the-game-of-hiring-and-how-it-works/' size="small" >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/12/13115603/high-paying-freelance-1024x512.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        10 High Paying Freelance Jobs

        </Typography>
        <Typography variant="body2" color="text.secondary">
        Find the best freelance jobs based upon your interests
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button href='https://www.flexjobs.com/blog/post/high-paying-freelance-jobs/' size="small" >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid  item xs={12} md={6} lg={3} sx={{marginBottom:'2em'}}>
        <Card sx={{  width: 350 , height: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.cheggindia.com/wp-content/uploads/2021/02/Top-25-Freelance-Jobs-from-Home-that-Pay-Really-Well.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Freelance Career Advise

        </Typography>
        <Typography variant="body2" color="text.secondary">
        5 Things To Consider Before Starting A Freelance Career
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small" href='https://www.bubble-jobs.co.uk/blog/blog/five-things-consider-starting-freelance-career/'>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
   
   
   

    </Grid>
   
    </>
  )
}

export default Blog
