import {useLocation,Navigate,Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}) =>{
  const {auth} = useAuth();
  const location = useLocation();

  return (
    allowedRoles?.includes(auth?.userRole) ? <Outlet/> : auth?.email? <Navigate to="/unauthorized"/>  : <Navigate to="/login" state={{from:location}} replace/>
  )
}

export default RequireAuth;