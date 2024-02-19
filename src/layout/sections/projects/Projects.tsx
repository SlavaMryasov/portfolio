import styled from "styled-components"
import { Container } from './../../../components/Container';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import Project1 from "../../../assets/project2.jpg"
import Project2 from "../../../assets/project1.jpg"
import { SectionTitle } from "../../../components/SectionTitle";

export const Projects = () => {
    return(
        <StyledProjects>
            <Container>
            <SectionTitle>Projects</SectionTitle>
                    <FlexWrapper justify="center" >
                        
                        <ProjectsItems>
                        <Project title="projec1" 
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ad voluptate error id dolor, labore pariatur ex aperiam atque officia omnis quo fugit unde! Ipsum assumenda nulla veniam vel fugiat eos totam voluptatem saepe adipisci. Incidunt cupiditate non adipisci eaque?"
                        src={Project1}
                        alt="project 1 img"
                        />
                           <Project title="projec2" 
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ad voluptate error id dolor, labore pariatur ex aperiam atque officia omnis quo fugit unde! Ipsum assumenda nulla veniam vel fugiat eos totam voluptatem saepe adipisci. Incidunt cupiditate non adipisci eaque?"
                        src={Project2}
                        alt="project 2 img"
                        />
                        </ProjectsItems>
                    </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`

`
const ProjectsItems = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 40px;
width: 100%;
margin-bottom: 100px;
`
