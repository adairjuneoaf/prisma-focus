import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 2rem;

  .timer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 7.5rem;

    > span {
      font-family: 'Rajdhani', sans-serif;
      font-size: 104px;
      padding: 0 8px;
      color: var(--blue-dark);
    }

    .minutes,
    .seconds {
      display: flex;
      align-items: center;
      flex-direction: row;

      gap: 0.125rem;

      h4 {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 7.5rem;

        font-family: 'Rajdhani', sans-serif;
        color: var(--blue-dark);
        background: #ffffff;
        box-shadow: 0px 0px 60px 0px #0000000d;

        padding: 1.625rem 0;
      }
    }

    .minutes {
      h4:first-child {
        border-radius: 5px 0 0 5px;
      }
      h4:last-child {
        border-radius: 0 5px 5px 0;
      }
    }
    .seconds {
      h4:first-child {
        border-radius: 5px 0 0 5px;
      }
      h4:last-child {
        border-radius: 0 5px 5px 0;
      }
    }
  }

  button.activeCutdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 0.5rem;

    width: 100%;
    height: 5rem;

    outline: none;
    border: none;

    border-radius: 5px;
    background: var(--blue-light);
    color: #ffffff;

    font-size: 20px;

    transition: background-color 0.3s;

    &:hover {
      background: var(--blue);
    }

    > span {
      display: flex;
      align-items: center;
    }
  }

  button.disableCutdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 0.5rem;

    width: 100%;
    height: 5rem;

    outline: none;
    border: none;
    cursor: pointer;

    border-radius: 5px;
    background: #ffffff;
    color: var(--gray-dark);

    font-size: 20px;

    svg {
      path {
        fill: var(--gray-dark);
      }
    }

    transition: all 0.3s;

    &:hover {
      background: var(--red-light);
      color: #ffffff;

      svg {
        path {
          fill: #ffffff;
        }
      }
    }

    > span {
      display: flex;
      align-items: center;
    }
  }

  button.cycleCompleted {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 0.5rem;

    width: 100%;
    height: 5rem;

    outline: none;
    border: none;
    border-bottom: 4px solid var(--green-light);
    cursor: not-allowed;

    border-radius: 5px;
    background: #ffffff;
    color: var(--gray-dark);

    font-size: 20px;

    > span {
      display: flex;
      align-items: center;
    }
  }
`
