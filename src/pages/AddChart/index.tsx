import {UploadOutlined} from '@ant-design/icons';
import {genChatByAiUsingPost} from "@/services/autoBi/chartController";
import ReactECharts from 'echarts-for-react';
import {Button, Card, Col, Divider, Empty, Form, Input, message, Row, Select, Space, Spin, Upload} from "antd";
import TextArea from 'antd/es/input/TextArea';
import {useState} from "react";

const AddChart: React.FC = () => {
  const [chart, setChart] = useState<API.BiResponse>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [options, setOption] = useState<any>(null);
  const onFinish = async (values: any) => {
    //避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    setChart(undefined);
    setOption(undefined);

    //对接后端上传数据
    const params = {
      ...values,
      file: undefined,
    }
    try {
      const res = await genChatByAiUsingPost(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败')
      } else {
        const chartOption = JSON.parse(res.data?.genChart ?? '');
        // @ts-ignore
        const chartResult = res.data?.genResult.replace(/^{|}$/g, '');
        if (!chartOption) {
          throw  new Error('图表解析失败！')
        } else {
          setChart({
            ...res.data,
            genResult:chartResult
          })
          setOption(chartOption)
          message.success('分析成功')
        }
      }
    } catch (e: any) {
      message.error('分析失败,' + e.message);
    }
    setSubmitting(false);
  };
  return (
    <div className="add-chart">
      <Row gutter={24} >
        <Col span={12}>
          <Card title="智能分析">
            <Form name="addChart" labelAlign="left" labelCol={{ span: 4 }}
                  wrapperCol={{ span: 15 }}  onFinish={onFinish} initialValues={{}} style={{maxWidth: 600}}>
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
        <Col span={12}>
          <Card title="结论分析">
            <div>
              {
              submitting ? (
              <Spin spinning={submitting} />
              ) : chart?.genResult ? (
              chart.genResult
              ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )
              }
            </div>
          </Card>
          <Divider/>
          <Card title="数据可视化">
            <div>
              {/* 判断 options 是否存在且有值 */}
              {options && <ReactECharts option={options} />}

              {/* 如果 options 不存在或没有值，并且正在加载中 */}
              {!options && submitting && <Spin spinning={true} />}

              {/* 如果 options 不存在或没有值，且没有正在加载中，则显示空状态 */}
              {!options && !submitting && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default AddChart;
