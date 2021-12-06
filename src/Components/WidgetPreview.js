import react from 'react';
import { Table } from 'antd';

const WidgetPreview = (props) => {
  console.log(props);
  const {axis, metric, data} = props;
  const columns = [
    {
      title: 'Player',
      dataIndex: 'date',
      key: 'date',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Live',
      dataIndex: 'CIRR',
      key: 'metric',
      render: text => <a>{text}</a>,      
    },
    {
      title: 'VoD',
      dataIndex: 'Vod',
      key: 'metric',
      render: text => <a>{text}</a>,      
    }
  ]
  console.log(axis);
  return (
    <div>
      {axis &&
        <div>
          Widget data Preview
          <Table columns={columns} dataSource={data} />
        </div>
      }
    </div>
  )
}

export default WidgetPreview;