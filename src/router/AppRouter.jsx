import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../app/auth";
import { JournalRoutes } from "../app/journal";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
        <Route />
      </Routes>
    </>
  );
};
