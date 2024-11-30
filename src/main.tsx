import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { store } from "@app/store.ts";
import { UsersList } from "@appPages/UsersList/UsersList";
import MainLayout from "@appLayouts/MainLayout";
import { ErrorPage } from "@appPages/Error/ErrorPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<UsersList />} />
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
