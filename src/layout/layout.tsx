import React from 'react';

import { Link, Outlet } from 'react-router-dom';
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
        <Link to='page1'>page1</Link>
        <br />
        <br />
        <br />
        <Link to='page2'>page2</Link>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </StyledLayout>
  );
}
