import { Container, Grid } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";
import { color } from "@mui/system";
import React from "react";
import Faq from "react-faq-component";
import Nav from '../components/Nav'
import Chat from "../components/Chat";

const data = {
  title: "FAQ's Section",
  rows: [
    {
      title: "How long should be my resume/cover letter?",
      content: `Your cover letter should be no more than a page. It should simply explain who you are and why you are the best candidate very concisely. It should keep the hiring manager waiting for more.

      Your resume should also be limited to a page in length. Especially, if your work experience is less than 10 years. 
    Employers spend a fraction of seconds on a single resume, hence it is important to impart strong keywords for yours to stand out.`,
    },
    {
      title:
        "What is the most important thing to include in a resume?",
      content:
        "Other than your personal details and contact information, your resume should have information about your work history, educational qualifications and related skills. For every job applications, these needs to be tailored.Add professional recognitions and accomplishments to stand out.",
    },
    {
      title: "I don’t have the required experience. Should I apply for the job?",
      content: `If you think you can pull off the job requirements well, you should definitely apply to the job. If you do not have the required number of years or miss any hard skill, it does not rule you out as an applicant. If you’re the best candidate, years of experience won’t matter in the end.`,
    },
    {
      title: "What are some key ways to make an impact on the hiring manager?",
      content: `Practice mock interviews
      Research about the company
      Know as much as you can about the job
      Keep a check on your body posture`,
    },
    {
      title: "I've never given an interview. Help!",
      content: `There is no need to be scared by the word 'interview'. Just be yourself and present what you know. We won't ask difficult stuff or algorithms or anything. Be well versed with the projects or courses that you have done. `,
    },
    {
      title: "What are some interview questions that I definitely should practice?",
      content: `Tell me about yourself
      Where do you see yourself in 5 years from now?
      Why should we hire you?
      Do have any questions for us?`,
    },
    {
      title:
        "How long should I wait before following up?",
      content: `If you do not get a response right away, wait till the interviewer’s deadline has passed. If you still do not hear anything, send a brief follow up note and remind the interviewer that how you fit the position well and your interest in the role.

      You should follow-up 2 more times with an interval of 7-10 days each. If you still do not get a response, you should move on.`,
    },
  ],
};

const styles = {
  titleTextColor: "#09c1d7",
  rowTitleColor: "#09c1d7",
};

export default function FAQ() {
  return (
    <div>
        <Nav/>
        {/* <Chat/> */}
        <Container>
        <Grid container>
            <Grid
            item
            sm={12}
            md={12}
            sx={{
                margin: "15px",
            }}
            >
            <Faq data={data} styles={{
                    titleTextColor: "lightBlue",
                    rowTitleColor: "blue"
                }}  />
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}
