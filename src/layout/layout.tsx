import React from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  ${(props) => props.theme.layout}
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  header,
  footer {
    padding: 1rem;
  }
`;

export default function Layout() {
  return (
    <StyledLayout>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </StyledLayout>
  );
}
