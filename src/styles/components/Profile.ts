import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  width: 100%;
  height: 10rem;

  .profileUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    gap: 2rem;

    img.imgProfile {
      width: 5rem;
      clip-path: circle();
    }

    .infoProfile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: left;

      gap: 0.5rem;

      h3 {
        font-size: 1.5rem;
        color: var(--blue-dark);
      }

      .levelProfile {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        p {
          color: ${props => props.theme.colors.text};
        }
      }
    }

    .chooseTheme {
      button {
        width: fit-content;
        height: 32px;

        color: var(--background-white);
        background: var(--blue-light);

        font-size: 1rem;
        border: 0;
        outline: none;

        border-radius: 9999px;
        padding: 0rem 1rem;

        transition: background-color 0.3s;

        &:hover {
          background: var(--blue);
        }
      }
    }
  }

  .challengesComplete {
    padding: 1.125rem 0;

    border-bottom: 2px solid #d7d8da;
    .challengesCounter {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`
