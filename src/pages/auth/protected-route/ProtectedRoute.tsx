import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { tokenSelector } from "../../../redux/features/auth/auth";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const authUser = useSelector(tokenSelector);

  return authUser ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
