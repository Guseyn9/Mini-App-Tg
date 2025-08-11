import { CheckCircle } from "../../../pages/CheckCircle/ui/CheckCircle";
import { CirclePage } from "../../../pages/CirclePage/ui/CirclePage";
import { SuccessCircle } from "../../../pages/CompletedCircle/ui/CompletedCircle";
import { CreateCircle } from "../../../pages/CreateCircle/ui/CreateCircle";
import { FindCircle } from "../../../pages/FindCircle/ui/FindCircle";
import { FriendsPage } from "../../../pages/FriendsPage/ui/FriendsPage";
import { HomePage } from "../../../pages/HomePage/ui/HomePage";
import { JoinCircle } from "../../../pages/JoinCircle/ui/JoinCircle";
import { JoinCirclePage } from "../../../pages/JoinCirclePage/ui/JoinCirclePage";
import { RatingPage } from "../../../pages/RatingPage/ui/RatingPage";
import { ReferralsPage } from "../../../pages/ReferralsPage/ui/ReferralsPage";
import { TasksPage } from "../../../pages/TasksPage/ui/TasksPage";
import { TopCircles } from "../../../pages/TopCircles/ui/TopCircles";
import { UserPage } from "../../../pages/UserPage/ui/UserPage";
import { WalletPage } from "../../../pages/WalletPage/ui/WalletPage";

export const ROUTES = {
    routes: [
      { path: "/", element: <HomePage /> },
      { path: "/tasks", element: <TasksPage /> },
      { path: "/circle", element: <CirclePage /> },
      { path: "/friends", element: <FriendsPage /> },
      { path: "/user", element: <UserPage /> },
      { path: "/connectWallet", element: <WalletPage /> },
      { path: "/joincircle", element: <JoinCircle /> },
      { path: "/findcircle", element: <FindCircle /> },
      { path: "/topcircle", element: <TopCircles /> },
      { path: "/circlepage", element: <JoinCirclePage /> },
      { path: "/createcircle", element: <CreateCircle /> },
      { path: "/checkcircle", element: <CheckCircle /> },
      { path: "/successcircle", element: <SuccessCircle /> },
      { path: "/friends/referrals", element: <ReferralsPage /> },
      { path: "/user/rating", element: <RatingPage /> },
    ]
  };