import {AiFillCalendar} from 'react-icons/ai'
import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    githubUrl,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <div>
      <VisitLink href={projectUrl} target='_blank'>Project Demo</VisitLink> &nbsp;&nbsp;&nbsp;
      <VisitLink href={githubUrl} target='_blank'>Github</VisitLink>
      </div>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard
