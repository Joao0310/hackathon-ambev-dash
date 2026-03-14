import { Container, Sidebar, Content } from "./Layout.styles";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Sidebar>
        <h2>Dashboard</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>

            <li>
              <Link to="/logistica">Logistica</Link>
            </li>

            <li>
              <Link to="/custo">Custos</Link>
            </li>

            <li>
              <Link to="/riscos">Riscos</Link>
            </li>

          </ul>
        </nav>
      </Sidebar>

      <Content>{children}</Content>
    </Container>
  );
}