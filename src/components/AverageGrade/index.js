import React from 'react'
import * as S from './style'

function percentualValue(value) {
  if (!value) return '0 100'

  return `${value * 10} 100`
}

const AverageGrade = ({ value }) => {
  return (
    <>
      <S.AverageGrade>
        <S.AverageGradeText>{value}</S.AverageGradeText>
        <S.AverageGradePie>
          <svg width="100%" height="100%" viewBox="0 0 40 40">
            <circle
              cx="20" cy="20" r="14.75"
              style={{ strokeDasharray: '100 0' }}
              fill='transparent'
              stroke='#d3d3d3'
              stroke-width='0.75'
            />
            <circle
              cx="20" cy="20" r="14.75"
              style={{ strokeDasharray: percentualValue(value) }}
              fill='transparent'
              stroke='#00e0ff'
              stroke-linecap='round'
              stroke-width='2.5'
            />
          </svg>
        </S.AverageGradePie>
      </S.AverageGrade>
    </>
  )
}

export default AverageGrade
