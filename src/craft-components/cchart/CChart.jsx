import { useNode } from '@craftjs/core';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { CChartSettings } from './CChartSettings';

const defaultProps = {
  height: 300,
  minHeight: 100,
  width: 400,
  maxWidth: '100%',
  margin: [0, 0, 0, 0],
  padding: [0, 0, 0, 0],
  //NOTE: {border:'1px solid rgba(32,32,32,1)'} 被拆分成了 3 个属性进行存储和操作，避免进行 CSS 字符串解析
  borderSize: 0,
  borderType: 'solid',
  borderColor: { r: 32, g: 32, b: 32, a: 1 },
  bgColor: { r: 250, g: 250, b: 250, a: 1 },
  // 这是 echarts 图表的配置项，参数含义参见官方文档：https://echarts.apache.org/examples/en/editor.html?c=radar2
  chartOptions: {
    title: {
      text: 'Proportion of Browsers',
      subtext: 'Fake Data',
      top: 10,
      left: 10,
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'scroll',
      bottom: 0,
      data: (function () {
        var list = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + '');
        }
        return list;
      })(),
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true,
    },
    radar: {
      indicator: [
        { text: 'IE8-', max: 400 },
        { text: 'IE9+', max: 400 },
        { text: 'Safari', max: 400 },
        { text: 'Firefox', max: 400 },
        { text: 'Chrome', max: 400 },
      ],
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1,
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)',
            },
          },
          data: [
            {
              value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
              name: i + 2000 + '',
            },
          ],
        });
      }
      return series;
    })(),
  },
};

/**
 * @class CChart
 *
 * 包装原始的 iframe 标签，暴露给 Designer。
 *
 * @author 大漠穷秋<damoqiongqiu@126.com>
 */
export const CChart = props => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { chartOptions, width, maxWidth, height, minHeight, margin, padding, borderSize, borderType, borderColor, bgColor, children } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  const calcStyle = () => {
    let style = {
      width: `${width}px`,
      maxWidth: `${maxWidth}px`,
      height: `${height}px`,
      minHeight: `${minHeight}px`,
      margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      border: `${borderSize}px ${borderType} rgba(${Object.values(borderColor)})`,
      backgroundColor: `rgba(${Object.values(bgColor)})`,
    };
    return style;
  };

  return (
    <div ref={connect} style={calcStyle()}>
      <ReactECharts option={chartOptions} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

CChart.craft = {
  displayName: 'Chart',
  props: defaultProps,
  related: {
    toolbar: CChartSettings,
  },
};
