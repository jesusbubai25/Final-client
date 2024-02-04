import "./App.css";
import AuthModule from "./modules/auth/AuthModule";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PageURL from "./constants/PageURL";
import CountryModule from "./modules/countries/CountryModule";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userLogout } from "./actions/userActions";
import ProtectedRoute from "./modules/auth/ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";



function App() {
  const { user, error } = useSelector(state => state.user)
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  const path = location.pathname;

  return (
    <>
      <div className="App">
        <ToastContainer />
        {PageURL.BASE === location.pathname && user && <Navigate to="/dashboard" />}
        <Routes>
          <Route path={PageURL.BASE} element={<AuthModule />}></Route>
          <Route path={PageURL.SIGN_UP} element={<AuthModule />}></Route>
          <Route path={PageURL.FORGOT_PASSWORD} element={<AuthModule />}></Route>
          <Route path={PageURL.OTP_VERIFICATION} element={<AuthModule />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path={PageURL.COUNTRYDEFAULT} element={<CountryModule />}> </Route>
            <Route path={PageURL.INDIA_GEN_SUMMARY} element={<CountryModule />} />
            <Route path={PageURL.INDIA_PRES_MODEL_Loss_Flow} element={<CountryModule />} />
            <Route path={PageURL.INDIA_PRES_MODEL_Fault_Tree} element={<CountryModule />} />
            <Route path={PageURL.PROJECT_DETAILS} element={<CountryModule />} />
            <Route
              path={PageURL.INDIA_PROJ_OVERVIEW}
              element={<CountryModule />}
            />
            <Route path={PageURL.INDIA_DIAGONISTIC} element={<CountryModule />}></Route>
            <Route
              path={PageURL.INDIA_DIAGONISTIC_DETAILED}
              element={<CountryModule />}
            />
            <Route path={PageURL.INDIA_LOSS_FLOW} element={<CountryModule />} />
            <Route
              path={PageURL.INDIA_INVERTER_EFFICIENCY}
              element={<CountryModule />}
            />
            {
              (
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB1 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB2 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB3 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB4 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB5 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB6 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB7 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB8 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB9 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB10 ||
                location.pathname === PageURL.INDIA_INVERTER1_SCB_SMB11 ||

                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB1 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB2 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB3 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB4 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB5 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB6 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB7 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB8 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB9 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB10 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB12 ||

                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB1 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB2 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB3 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB4 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB5 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB6 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB7 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB8 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB9 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB10 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB12 ||

                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB1 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB2 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB3 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB4 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB5 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB6 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB7 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB8 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB9 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB10 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB11 ||
                location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB12||
                location.pathname === PageURL.INDIA_INVERTER1_HEATMAP_DIAGRAM ||
              location.pathname === PageURL.INDIA_INVERTER2_HEATMAP_DIAGRAM ||
              location.pathname === PageURL.INDIA_INVERTER3_HEATMAP_DIAGRAM ||
              location.pathname === PageURL.INDIA_INVERTER4_HEATMAP_DIAGRAM 

              )
              &&
              <Route
                path={path}
                element={<CountryModule />}
              />
            }

            {/* <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} /> */}
            {/* <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} />
            <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} />
            <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} />
            <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} />
            <Route path={PageURL.INDIA_INVERTER1_SCB_SMB2} element={<CountryModule />} /> */}


            <Route path="*" element={<Navigate to={PageURL.COUNTRYDEFAULT} />} />
          </Route>
          <Route path="*" element={<Navigate to={PageURL.BASE} />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
