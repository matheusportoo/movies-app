import styled from 'styled-components'

export const AverageGrade = styled.div`
  display: inline-block;
  position: relative;
`

export const AverageGradeText = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-light) !important;
`

export const AverageGradePie = styled.div`
  transform: rotate(-90deg);
  max-width: 50px;
  position: relative;

  @keyframes fillup {
    from { stroke-dasharray: 0 100; }
  }

  svg circle:last-child {
    animation: fillup 0.75s linear;
  }
`
