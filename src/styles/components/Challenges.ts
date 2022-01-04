import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80%;
  background: #ffffff;

  border-radius: 5px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 80%;
  height: 90%;

  display: flex;
  align-items: center;

  section.notChallengeActive {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    > h2 {
      text-align: center;
      line-height: 1.4;
      color: var(--gray-dark);
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 1rem;

      p {
        text-align: center;
        line-height: 1.4;
        color: var(--gray-dark);
      }
    }
  }

  section.isChallengeActive {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 1.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--blue-light);
    }

    span.divider {
      margin: 2rem 0;
      width: 70%;
      border: 1px solid var(--gray-medium);
      border-radius: 50px;
    }

    .challenge {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      gap: 2rem;
      margin: 2rem 0;

      h1 {
        font-size: 1.875rem;
        font-weight: 600;
        color: var(--blue-dark);
      }

      p {
        text-align: center;
        line-height: 1.4;
        color: var(--gray-dark);
      }
    }

    .buttonsChallenge {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 2rem 0;
      gap: 2rem;

      button {
        width: 100%;
        height: 3.5rem;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;

        border: none;
        outline: none;

        color: #FFFFFF;
      }

      .failedChallenge{
        background var(--red-light);

        transition: background-color 0.2s;

        &:hover{
          background: #BF344B;
        }
      }
      
      .successChallenge{
        background var(--green-light);

        transition: background-color 0.2s;

        &:hover{
          background: #40B324;
        }
      }
    }
  }
`
