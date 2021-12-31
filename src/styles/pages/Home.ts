import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100vw - 24rem);
  height: 100vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;

  margin-top: 6.5rem;

  .sideLeft {
    flex: 1;
  }

  .sideRight {
    flex: 1;
  }
`
