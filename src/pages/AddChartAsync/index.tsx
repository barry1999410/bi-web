import {NotificationOutlined, UploadOutlined} from '@ant-design/icons';
import {
  genChatByAiAsyncMqUsingPost,
} from "@/services/autoBi/chartController";

import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  List,
  message,
  Row,
  Select,
  Space,
  Spin,
  Upload
} from "antd";
import TextArea from 'antd/es/input/TextArea';
import {useState} from "react";
import {useForm} from "antd/es/form/Form";
import ReactECharts from "echarts-for-react";


/**
 * 添加图表（异步）页面
 * @constructor
 */
const AddChartAsync: React.FC = () => {
  const [form] =useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  const onFinish = async (values: any) => {
    //避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);


    //对接后端上传数据
    const params = {
      ...values,
      file: undefined,
    }
    try {
      const res = await genChatByAiAsyncMqUsingPost(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败')
      } else {
          message.success('分析任务提交成功，稍后请在我的图表页面查看')
          form.resetFields();
        }
      }
     catch (e: any) {
      message.error('分析失败,' + e.message);
    }
    setSubmitting(false);
  };
  return (
    <div className="add-chart">
      <Row gutter={24} >
        <Col span={12}>
          <Card title="智能分析" style={{ width: 650 , height:600 }}>
            <Form form={form} name="addChart" labelAlign="left" labelCol={{ span: 4 }}
                  wrapperCol={{ span: 15 }}  onFinish={onFinish} initialValues={{}} style={{maxWidth: 800}}>
              <Form.Item
                name="goal"
                label="分析目标"
              >
                <TextArea placeholder="请输入你的分析需求，比如分析网站用户的增长趋势"/>
              </Form.Item>
              <Form.Item
                name="name"
                label="图表名称"
              >
                <Input placeholder="请输入图表名称"/>
              </Form.Item>

              <Form.Item
                name="chartType"
                label="图表类型"
              >
                <Select
                  placeholder="请输入图表类型"
                  options={[
                    {value: '折线图', label: '折线图'},
                    {value: '柱状图', label: '柱状图'},
                    {value: '堆叠图', label: '堆叠图'},
                    {value: '饼图', label: '饼图'},
                    {value: '雷达图', label: '雷达图'},
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="file"
                label="原始数据"
              >
                <Upload name="file" action="/upload.do">
                  <Button icon={<UploadOutlined/>}>上传 csv 文件</Button>
                </Upload>
              </Form.Item>

              <Form.Item wrapperCol={{span: 16, offset: 4}}>
                <Space>
                  <Button type="primary"  htmlType="submit" loading={submitting} disabled={submitting}>
                    智能分析
                  </Button>
                  <Button htmlType="reset">重置</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="分析任务">
          </Card>
        </Col>
      </Row>

    </div>
  );
}
export default AddChartAsync;
