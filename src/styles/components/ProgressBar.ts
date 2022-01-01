import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 1.5rem;

  margin-top: 1rem;

  .progressBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .expInitial {
      padding: 0 1rem 0 0;
    }

    .expProgress {
      display: flex;
      flex: 1;

      height: 0.375rem;

      background: ${props => props.theme.colors.primary};

      border-radius: 0.375rem;

      > span {
        height: 0.375rem;
        //width: 50%;

        background: var(--green-light);

        border-radius: 0.375rem;
      }
    }

    .expFinal {
      padding: 0 0 0 1rem;
    }
  }
`
