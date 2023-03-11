import { Button, Link } from '@mui/material';
import React from 'react';
import  "./Blog.css"
import Side from '../../components/Side';
import {Grid} from '@mui/material';


const Blogs = () => {
  return (
    <>
    <Grid sx={{display:'flex',flexDirection:'row'}}>
    <Grid>
    <Side/>
    </Grid>
   <Grid >
   <div className="wrapper">
     
      <Card
        img="https://blog.sparkhire.com/wp-content/uploads/2015/08/The-Game-of-Hiring-and-How-it-Works.jpg"
        title="The Application Process"
        description="The Game of Hiring and How it Works"
        url="https://blog.sparkhire.com/2015/08/08/the-game-of-hiring-and-how-it-works/"
      />
      
    
      
      <Card
        img="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/12/13115603/high-paying-freelance-1024x512.png"
        title="10 High Paying Freelance Jobs"
        description="Find the best freelance jobs based upon your interests"
        url="https://www.flexjobs.com/blog/post/high-paying-freelance-jobs/"
      />
      
      
      <Card
        img="https://www.cheggindia.com/wp-content/uploads/2021/02/Top-25-Freelance-Jobs-from-Home-that-Pay-Really-Well.png"
        title="Freelance Career Advise"
        description="5 Things To Consider Before Starting A Freelance Career"
        url="https://www.bubble-jobs.co.uk/blog/blog/five-things-consider-starting-freelance-career/"
      />
      <Card
        img="https://media.istockphoto.com/id/1070271688/photo/sales-manager-consulting-client-talking-on-phone-in-office.jpg?b=1&s=170667a&w=0&k=20&c=N5y45xFHBfz8u3u1ZrxQ7nF0NuF8_JReQDaATqqnGhU="
        title="Acing a Phone Interview"
        description="Six tips to get you through to the next round"
        url="https://blog.simplyhired.com/career/phone-interview-advice/"
      />
      <Card
        img="https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg"
        title="5 Ways to Start Your Career"
        description="Launch your career as a college student"
        url="https://www.youtern.com/thesavvyintern/index.php/2015/08/22/5-ways-to-start-your-career-while-still-in-college/"
      />
      <Card
        img="https://blog.sparkhire.com/wp-content/uploads/2015/08/The-Game-of-Hiring-and-How-it-Works.jpg"
        title="The Application Process"
        description="The Game of Hiring and How it Works"
        url="https://blog.sparkhire.com/2015/08/08/the-game-of-hiring-and-how-it-works/"
      />

      <Card
        img="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/12/13115603/high-paying-freelance-1024x512.png"
        title="10 High Paying Freelance Jobs"
        description="Find the best freelance jobs based upon your interests"
        url="https://www.flexjobs.com/blog/post/high-paying-freelance-jobs/"
      />
      <Card
        img="https://www.cheggindia.com/wp-content/uploads/2021/02/Top-25-Freelance-Jobs-from-Home-that-Pay-Really-Well.png"
        title="Freelance Career Advise"
        description="5 Things To Consider Before Starting A Freelance Career"
        url="https://www.bubble-jobs.co.uk/blog/blog/five-things-consider-starting-freelance-career/"
      />
      <Card
        img="https://media.istockphoto.com/id/1070271688/photo/sales-manager-consulting-client-talking-on-phone-in-office.jpg?b=1&s=170667a&w=0&k=20&c=N5y45xFHBfz8u3u1ZrxQ7nF0NuF8_JReQDaATqqnGhU="
        title="Acing a Phone Interview"
        description="Six tips to get you through to the next round"
        url="https://blog.simplyhired.com/career/phone-interview-advice/"
      />
      <Card
        img="https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg"
        title="5 Ways to Start Your Career"
        description="Launch your career as a college student"
        url="https://www.youtern.com/thesavvyintern/index.php/2015/08/22/5-ways-to-start-your-career-while-still-in-college/"
      />
      
    </div>
   </Grid>
     
    </Grid>
    
    </>
    
   
  );
}

function Card(props) {
  return (
    <>
     <Grid xs={4}>
     <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        
        <a href={props.url}><button className="card__btn"  variant="raised" >Learn More</button></a>
      </div>
    </div></Grid> 
     </>
   
  );
}

export default Blogs;
