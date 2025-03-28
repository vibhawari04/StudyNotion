// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  console.log("opn route me tokrn ton mil gya", token);
  if (token === null) {
    return children;
  } else {
    return <Navigate to="/dashboard/my-profile" />;
  }
}

export default OpenRoute;
