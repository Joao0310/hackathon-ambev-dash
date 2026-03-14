import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Sidebar, Logo, Nav, NavItem, NavSection, Content, PageContainer } from "./Layout.styles";
 
const navItems = [
  { path: "/",          label: "Overview",   icon: "⬡" },
  { path: "/logistica", label: "Logística",  icon: "⇄" },
  { path: "/custo",     label: "Custos",     icon: "◈" },
  { path: "/riscos",    label: "Riscos",     icon: "◬" },
];
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
 
  return (
    <Container>
      <Sidebar>
        <Logo>
          <span className="mark">A</span>
          <span className="name">Ambev Dash</span>
        </Logo>
 
        <NavSection>Menu</NavSection>
        <Nav>
          {navItems.map(({ path, label, icon }) => (
            <NavItem key={path} as={Link} to={path} $active={pathname === path}>
              <span>{icon}</span> {label}
            </NavItem>
          ))}
        </Nav>
      </Sidebar>
 
      <Content>
        <Header />
        <PageContainer>
          {children}
          <Footer />
        </PageContainer>
      </Content>
    </Container>
  );
}