import styled from 'styled-components';
import theme from '../../../BasicStyle/themeJSX';

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.colors.primaryAccent};
  cursor: pointer;

  & p {
    transition: color 0.25s ${theme.animation.cubicBezier};
  }

  &:hover,
  &:focus {
    & p {
      color: ${theme.colors.secondaryYellow};
    }
  }
  &:hover,
  &:focus {
    & svg {
      fill: ${theme.colors.secondaryYellow};
    }
  }
  & svg {
    transition: fill 0.25s ${theme.animation.cubicBezier};
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${theme.colors.secondaryGray};
  background-size: cover;
  background-repeat: no-repeat;
`;
