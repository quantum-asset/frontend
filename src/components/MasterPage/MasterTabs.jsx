import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:"calc(100vh - 159px)" }}
    >
      {value === index && (
        
          <div style={{height:"100%",width:"100%"}}>{children}</div>
        
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MasterTabs(props) {
  const { labels, content } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 70px)", backgroundColor: "#c4c4c4" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ backgroundColor: "gainsboro" }}
        >
          {labels.map((label, index) => (
            <Tab label={label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {content.map((contentItem, index) => (
        <TabPanel value={value} index={index}>
          {contentItem}
        </TabPanel>
      ))}
    </Box>
  );
}
