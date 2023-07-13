import styled from 'styled-components';
import { colors } from 'components/theme';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const Link = styled.a`
display: flex;
justify-content: center;
align-items: center; 
background-color: ${colors.backgroundColor};
color:${colors.mainDarkColor};
border-radius: 50%;
width: 44px;
height: 44px;
transition: color 250ms linear;
text-decoration: none;

&:hover{
color:${colors.accentColor};
background: ${colors.mainLightColor};
border: 1px solid ${colors.textColorDarkBg};
}

&:first-child {
  margin-right: 30px;
}
`;

export const DevLink = styled.a`
  transition: color 250ms linear;
  text-decoration: none;
  color: ${colors.mainDarkColor};

&:hover{
color: ${colors.accentColor};
}
`;