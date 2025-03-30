import { logoutUser } from "../Auth";

const Logout = () => {
    const handleLogout = async () => {
        try {
          await logoutUser();
          alert('تم تسجيل الخروج');
        } catch (err) {
          alert(err.message);
        }
      };
  return (
    <>
       <button onClick={handleLogout}>تسجيل الخروج</button>
    </>
  )
}

export default Logout
