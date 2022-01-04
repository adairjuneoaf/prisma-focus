import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  font-size: 1.25rem;

  .level {
    h1 {
      font-size: 8.75rem;
      color: var(--blue-light);
    }
  }

  h2 {
    font-size: 1.875rem;
    color: var(--blue-dark);
  }
`
