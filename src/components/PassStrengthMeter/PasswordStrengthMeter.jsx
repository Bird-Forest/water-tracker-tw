import styled from 'styled-components';

const MeterContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: ${(props) => (props.$showMeter ? 'block' : 'none')}; // Встановлення відображення або приховання
`;

const StrengthMeterBar = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}%;
  transition: width 0.3s ease-in-out;
`;

const PasswordStrengthMeter = ({ strength, showMeter }) => {
  const getColor = () => {
    switch (strength) {
      case 0:
        return '#ff4d4f'; // Weak
      case 1:
        return '#ffa940'; // Fair
      case 2:
        return '#faad14'; // Good
      case 3:
        return '#52c41a'; // Strong
      default:
        return '#bfbfbf'; // Default
    }
  };

  return (
    <MeterContainer $showMeter={showMeter}>
      <StrengthMeterBar color={getColor()} width={(strength + 1) * 25} />
    </MeterContainer>
  );
};

export default PasswordStrengthMeter;