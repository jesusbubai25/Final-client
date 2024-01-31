import React, { useEffect} from "react";
import Buttons from "../../../components/ButtonsComp";
import { useDispatch, useSelector } from "react-redux";
import { allowUser, deleteUser, registredUsers } from "../../../actions/userActions";
import SpinLoader from "../../../components/SpinLoader";
import { allow_user_reset, clear_errors, delete_user_reset } from "../../../constants/dataConstants";
import { toast } from "react-toastify";

const AdminDashBoard = () => {
  const { registred_users, loading, error } = useSelector(state => state.registred_users)
  const { isAllowed, isDeleted,loading2 } = useSelector(state => state.allow_user)
  const dispatch = useDispatch();

  const SentEmailTouser = (email) => {
    dispatch(allowUser(email))
  }

  const DeleteUser = (email) => {
    dispatch(deleteUser(email))
  }
  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:clear_errors})
    }
    if (isAllowed) {
      dispatch({ type: allow_user_reset })
      toast.success("User allowed and mail sent to the user regarding login")
      return ()=>undefined;
    }
    if (isDeleted) {
      dispatch({ type: delete_user_reset })
      toast.success("User deleted sucessfully!")
      return ()=>undefined;
    }
    dispatch(registredUsers())

  }, [dispatch, isAllowed, isDeleted,error])

  return (
    <>

      {loading ? <SpinLoader /> :
      <>       
      <h3 style={{fontFamily:"cursive"}}>All Registered Users</h3>
            {registred_users && registred_users.length > 0 ?
              <table
                style={{
                  width: "1500px",
                  height: "200px",
                  backgroundColor:loading2?"whitesmoke":"white",
                  opacity:loading2?0.3:1,
                  fontFamily:"cursive"
                }}
              >
                <tr style={{ backgroundColor: "#edeafb", height: "70px" }}>
                  <th>SL. Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email id</th>
                  <th> Mobile Number</th>
                  <th>Level Requested</th>
                  <th> Action</th>
                </tr>
                {
                  registred_users.map((item, index) => {
                    return (
                      <tr key={index}
                        style={{
                          width: "1500px",
                          backgroundColor:index&1?"whitesmoke":"white"
                        }}
                      >
                        <td style={{ textAlign: "center" }}>{index+1}</td>
                        <td style={{ textAlign: "center" }}>{item.FirstName}</td>

                        <td style={{ textAlign: "center" }}>{item.LastName}</td>

                        <td style={{ textAlign: "center" }}>{item.EmailID}</td>
                        <td style={{ textAlign: "center" }}>{item.MobileNumber}</td>
                        <td style={{ textAlign: "center" }}>{item.LevelPermission}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Buttons onClick={() => SentEmailTouser(item.EmailID)}
                              type="contained"
                              buttonType="primary"
                              buttonText="Accept"
                            ></Buttons>
                            <Buttons onClick={() => DeleteUser(item.EmailID)}
                              type="contained"
                              buttonType="error"
                              buttonText="Reject"
                            ></Buttons>
                          </div>
                        </td>
                      </tr>
                    )
                  })

                }

              </table> :
              <h2 style={{ textAlign: "center" }}>No User Registred Yet</h2>
            }
          </>
      
      }
    </>
  );
};

export default AdminDashBoard;
