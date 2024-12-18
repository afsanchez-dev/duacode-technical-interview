import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import { store } from "@app/store.ts";
import { UsersList } from "@appPages/UsersList/UsersList";
import MainLayout from "@appLayouts/MainLayout";
import { ErrorPage } from "@appPages/Error/ErrorPage";
import { UserForm } from "@appPages/UserForm/UserForm";
import { UserDetail } from "@appPages/UserDetail/UserDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/users" element={<UsersList />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="/create-user" element={<UserForm isCreate={true} />} />
            <Route
              path="/edit-user/:id"
              element={<UserForm isCreate={false} />}
            />
            <Route path="/" element={<Navigate to={"/users"} />}></Route>
            <Route
              path="*"
              element={
                <ErrorPage
                  errorMessage={"404 Not Found"}
                  errorDescription={"It seems you got lost..."}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
