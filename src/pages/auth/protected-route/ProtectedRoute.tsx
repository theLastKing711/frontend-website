import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TokenSelector } from "src/redux/features/auth/auth";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const authUser = useSelector(TokenSelector);

  return authUser ? { children } : <Navigate to="/login" />;
};

export default ProtectedRoute;
