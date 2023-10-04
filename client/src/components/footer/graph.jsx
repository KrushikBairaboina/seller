import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Typography from '@mui/material/Typography';

export default function BasicSparkLineCustomization() {
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const handleHighlightChange = (event) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };

  const years = ['2021', '2022', '2023', '2024']; 
  const generateRandomData = () => {
    const baseData = [1, 4, 2, 5, 7, 2, 4, 6];
    const randomData = baseData.map((value) => {
      const randomDifference = Math.random() * 2 - 1; 
      return value + randomDifference;
    });
    return randomData;
  };

  const lineColor = '#DCE1E3'; 

  return (
    <Stack direction="column" sx={{ width: '100%' }}>
      <Stack direction="row">
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={showHighlight}
              onChange={handleHighlightChange}
            />
          }
          label="showHighlight"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={showTooltip}
              onChange={handleTooltipChange}
            />
          }
          label="showTooltip"
          labelPlacement="end"
        />
      </Stack>
      <Stack direction="row" sx={{ width: '100%' }}>
        {years.map((year) => (
          <Box key={year} sx={{ flexGrow: 1 }}>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showHighlight={showHighlight}
              showTooltip={showTooltip}
              strokeColor={lineColor} 
            />
            <Typography variant="body1" align="center">
              {year}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
