import styled from "styled-components";
 
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
  font-family: 'DM Sans', sans-serif;
`;
 
export const Sidebar = styled.div`
  width: 220px;
  background: #0a1628;
  position: fixed;
  inset: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  border-right: 1px solid #1e3a5f;
`;
 
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 36px;
  padding: 0 8px;
 
  span.mark {
    width: 28px; height: 28px;
    background: #f5c518;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 13px; color: #0a1628;
  }
 
  span.name {
    font-size: 14px; font-weight: 700;
    color: #fff; letter-spacing: 0.3px;
  }
`;
 
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
 
export const NavItem = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${p => p.$active ? '#fff' : '#7a9cbf'};
  background: ${p => p.$active ? 'rgba(245,197,24,0.12)' : 'transparent'};
  border-left: 3px solid ${p => p.$active ? '#f5c518' : 'transparent'};
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 0 6px 6px 0;
  font-size: 14px;
  font-weight: ${p => p.$active ? 600 : 400};
  transition: all 0.15s ease;
 
  &:hover { color: #fff; background: rgba(255,255,255,0.06); }
`;
 
export const Content = styled.div`
  flex: 1;
  margin-left: 220px;
  display: flex;
  flex-direction: column;
`;
 
export const PageContainer = styled.div`
  padding: 28px 32px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;
 
export const NavSection = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #3a5a7a;
  text-transform: uppercase;
  padding: 16px 12px 6px;
`;