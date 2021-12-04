import react from 'react';
import { Table } from 'antd';

const WidgetPreview = (props) => {
  console.log(props);
  const {axis, metric, data} = props;
  const columns = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      render: text => <a>{text}</a>,
    },
    {
      title: metric,
      dataIndex: 'CIRR',
      key: 'metric',
      render: text => <a>{text}</a>,      
    }
  ]
  console.log(axis);
  return (
    <div>
      {axis &&
        <div>
          Preview for {axis} axis, for {metric}
          <Table columns={columns} dataSource={data} />
        </div>
      }
    </div>
  )
}

export default WidgetPreview;