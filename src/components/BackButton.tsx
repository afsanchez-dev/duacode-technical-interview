import { useNavigate } from "react-router";

interface BackButtonProps {
  text: string;
}
export const BackButton: React.FC<BackButtonProps> = ({ text }) => {
  const navigate = useNavigate();

  const navigateBack = (): void => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <button className="link" onClick={navigateBack}>
      {text}
    </button>
  );
};
