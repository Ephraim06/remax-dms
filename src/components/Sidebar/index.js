import {
  AppsOutline,
  GridOutline,
  HomeOutline,
  LogOutOutline,
  NewspaperOutline,
  NotificationsOutline,
  PeopleOutline,
  PieChartOutline,
} from "react-ionicons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Home",
      icon: <HomeOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Boards",
      icon: <AppsOutline color="#555" width="22px" height="22px" />,
      active: true,
    },
    {
      title: "Projects",
      icon: <GridOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Analytics",
      icon: <PieChartOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Workflows",
      icon: <PeopleOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Notifications",
      icon: <NotificationsOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Newsletter",
      icon: <NewspaperOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: { md: "230px", xs: "60px" },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "flex-start", xs: "center" },
          paddingLeft: { md: "20px", xs: 0 },
          height: "70px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "orange",
            fontWeight: "bold",
            display: { md: "block", xs: "none" },
          }}
        >
          Logo.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "orange",
            fontWeight: "bold",
            display: { md: "none", xs: "block" },
          }}
        >
          L.
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          flex: 1,
          borderRight: "1px solid #d1d5db",
          padding: { md: "20px", xs: "10px" },
          display: "flex",
          flexDirection: "column",
          alignItems: { md: "flex-start", xs: "center" },
          gap: "10px",
          overflowY: "auto",
        }}
      >
        {navLinks.map((link) => (
          <Box
            key={link.title}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: link.active ? "#fbbf24" : "transparent",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#fbbf24" },
            }}
          >
            {link.icon}
            <Typography
              variant="body2"
              sx={{
                fontWeight: "medium",
                display: { md: "block", xs: "none" },
              }}
            >
              {link.title}
            </Typography>
          </Box>
        ))}

        {/* Log Out Button */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { md: "flex-start", xs: "center" },
            gap: "10px",
            width: "90%",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#e5e7eb",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#fbbf24" },
          }}
        >
          <LogOutOutline />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "medium",
              display: { md: "block", xs: "none" },
            }}
          >
            Log Out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
