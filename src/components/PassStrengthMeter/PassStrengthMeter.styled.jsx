import styled from 'styled-components';

export const MeterContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.$showMeter ? 'block' : 'none')}; // Встановлення відображення або приховання
`;

export const StrengthMeterBar = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}%;
  max-width: 100%;
  transition: width 0.3s ease-in-out;
`;