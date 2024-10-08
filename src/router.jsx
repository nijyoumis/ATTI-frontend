import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Onboarding from "./pages/onboarding/Onboarding";
import SignUp from "./pages/signup/SignUp";
import Authentication from "./pages/signup/Authentication";
import PasswordSetup from "./pages/signup/PasswordSetup";
import onboardingRoutes from "./routes/onboardingRoutes";
import signupRoutes from "./routes/signupRoutes";
import Mypage from "./pages/Mypage";
import ChatRoom from "./pages/chat/ChatRoom";
import CommunityHome from "./pages/Community/CommunityHome";
import CategoryCommunity from "./pages/Community/CategoryCommunity";
import Post from "./pages/Community/Post";
import ChatMain from "./pages/chat/ChatMain";
import attitalkRoutes from "./routes/attitalkRoutes";
import Notification from "./pages/Notification";
import FriendRecommendation from "./pages/FriendRecommendation";
import WritePost from "./pages/Community/WritePost";
import Chat1on1 from "./pages/chat/Chat1on1";
import MyAction from "./pages/Community/MyAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Login />,
      },
      ...signupRoutes,
      ...onboardingRoutes,
      ...attitalkRoutes,
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/chatroom",
        element: <ChatRoom />,
      },
      {
        path: "/community/:category",
        element: <CommunityHome />,
      },
      {
        path: "/community/:category/:mbti",
        element: <CategoryCommunity />,
      },
      {
        path: "/community/:category/:mbti/:postId",
        element: <Post />,
      },
      {
        path: "/chatmain",
        element: <ChatMain />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/friends",
        element: <FriendRecommendation />,
      },
      {
        path: "/newpost",
        element: <WritePost />,
      },
      {
        path: "/chat1on1",
        element: <Chat1on1 />,
      },
      {
        path: "/actions/:label",
        element: <MyAction />,
      },
    ],
  },
]);

export default router;
