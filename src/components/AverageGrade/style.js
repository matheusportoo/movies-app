import styled from 'styled-components'

export const AverageGrade = styled.div`
  display: inline-block;
  position: relative;
`

export const AverageGradeText = styled.p`
  font-size: 1rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #222 !important;
`

export const AverageGradePie = styled.div`
  transform: rotate(-90deg);
  max-width: 50px;
  position: relative;
`
