import { MeterContainer, StrengthMeterBar } from './PassStrengthMeter.styled';

const PasswordStrengthMeter = ({ strength, showMeter }) => {
  const getColor = () => {
    switch (strength) {
      case 0:
        return '#EF5050'; // Weak
      case 1:
        return '#FF9D43'; // Fair
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