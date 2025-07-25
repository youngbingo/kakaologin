import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./assets/routes/login";
import Main from "./assets/routes/Main";
import Layout from "./components/layout";
import reset from "styled-reset";
import Pretendard from "./assets/fonts/PretendardVariable.woff2";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "main",
        element: <Main />
      }

    ]
  }
], { basename: "/kakaologin/" });

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'Pretendard'; 
    src: url(${Pretendard}) format('woff2-variations');
    font-weight: 100 900; 
  }
  *{
    box-sizing: border-box;
  }
  body {
    background-color: white;
    font-family: 'Pretendard', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
