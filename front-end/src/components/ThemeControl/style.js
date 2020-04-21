import styled from 'styled-components'

export const Button = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  outline: none;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  svg {
    color: var(--color-highlight);
    width: 1.6rem;
    height: 1.6rem;
  }
`