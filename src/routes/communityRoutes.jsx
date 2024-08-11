import CategoryCommunity from "../pages/Community/CategoryCommunity";
import CommunityHome from "../pages/Community/CommunityHome";
import Post from "../pages/Community/Post";

const communityRoutes = [
  {
    path: "/community/:category",
    element: <CommunityHome />,
  },
  {
    path: "/community/:category/:mbti",
    element: <CategoryCommunity />,
    children: [
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
];

export default communityRoutes;
