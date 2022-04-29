import { Box, Text, theme } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Config Chart
const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'datetime',
    axisBorder: { color: theme.colors.gray[600] },
    axisTicks: { color: theme.colors.gray[600] },
    categories: [
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
      '2021-03-25T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];

interface ChartContentProps {
  chartTitle: string;
}

export const ChartContent = ({ chartTitle }: ChartContentProps) => {
  return (
    <Box p={['6', '8']} pb="4" bg="gray.800" borderRadius={8}>
      <Text fontSize="lg" mb="4">
        {chartTitle}
      </Text>
      <Chart type="area" height={160} options={options} series={series} />
    </Box>
  );
};
