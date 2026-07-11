import * as S from './style'

function percentualValue(value?: number): string {
  if (!value) return '0 100'

  return `${value * 10} 100`
}

interface AverageGradeProps {
  value?: number
}

const AverageGrade = ({ value }: AverageGradeProps) => {
  return (
    <S.AverageGrade>
      <S.AverageGradeText>{value}</S.AverageGradeText>
      <S.AverageGradePie>
        <svg width="100%" height="100%" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="16.25"
            style={{ strokeDasharray: '100 0', opacity: 0.1 }}
            fill="transparent"
            stroke="var(--color-light)"
            strokeWidth="0.75"
          />
          <circle
            cx="20"
            cy="20"
            r="16.25"
            style={{
              strokeDasharray: percentualValue(value),
              strokeLinecap: 'round',
            }}
            fill="transparent"
            stroke="var(--color-highlight)"
            strokeWidth="2.5"
          />
        </svg>
      </S.AverageGradePie>
    </S.AverageGrade>
  )
}

export default AverageGrade
