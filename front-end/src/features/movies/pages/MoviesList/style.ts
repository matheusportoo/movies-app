import styled from 'styled-components'

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`

export const LoadMoreButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-highlight);
  color: var(--color-dark);
  border: none;
  font-family: var(--font-family-default);
  font-size: 1.6rem;
  font-weight: 900;
  cursor: pointer;
  border-radius: 3px;
  transition: opacity 0.2s ease-in-out;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
